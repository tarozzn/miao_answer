import { hashPassword, isAdminPhone, normalizePhone, publicUser, requireAdmin } from "./_lib/auth.mjs";
import { methodAllowed, readJson, send } from "./_lib/http.mjs";
import { encodeFilter, supabase } from "./_lib/supabase.mjs";

export default async function handler(req, res) {
  if (!methodAllowed(req, res, ["GET", "PATCH", "DELETE"])) return;

  try {
    const admin = await requireAdmin(req);
    if (!admin) {
      send(res, 403, { error: "只有小兔子后台管理员可以看这里。" });
      return;
    }

    if (req.method === "GET") {
      const rows = await supabase("app_users?select=id,phone,nickname,avatar,is_admin,created_at&order=created_at.desc");
      send(res, 200, { users: rows.map(publicUser) });
      return;
    }

    const body = await readJson(req);
    const id = String(body.id || "");
    if (!id) {
      send(res, 400, { error: "缺少用户 id。" });
      return;
    }

    if (req.method === "DELETE") {
      if (id === admin.id) {
        send(res, 400, { error: "不能删除当前登录的管理员账号。" });
        return;
      }
      await supabase(`app_users?id=eq.${encodeFilter(id)}`, { method: "DELETE" });
      send(res, 200, { ok: true });
      return;
    }

    const phone = normalizePhone(body.phone);
    const nickname = String(body.nickname || "某只猪").trim().slice(0, 18) || "某只猪";
    const rawAvatar = String(body.avatar || "🐷").trim();
    const avatar = rawAvatar.startsWith("data:image/")
      ? rawAvatar.slice(0, 220000)
      : rawAvatar.slice(0, 8) || "🐷";
    const password = String(body.password || "");

    if (phone.length < 6) {
      send(res, 400, { error: "手机号至少要 6 位。" });
      return;
    }

    if (rawAvatar.startsWith("data:") && !rawAvatar.startsWith("data:image/")) {
      send(res, 400, { error: "头像只能是图片或短文本。" });
      return;
    }

    if (rawAvatar.length > 220000) {
      send(res, 400, { error: "头像图片太大了。" });
      return;
    }

    if (password && password.length < 6) {
      send(res, 400, { error: "新密码至少 6 位。" });
      return;
    }

    const patch = {
      phone,
      nickname,
      avatar,
      is_admin: Boolean(body.isAdmin) || isAdminPhone(phone),
    };
    if (password) {
      patch.password_hash = hashPassword(password);
    }

    const rows = await supabase("app_users?select=id,phone,nickname,avatar,is_admin,created_at&order=created_at.desc");
    const duplicate = rows.find((user) => user.phone === phone && user.id !== id);
    if (duplicate) {
      send(res, 409, { error: "这个手机号已经被别的用户注册了。" });
      return;
    }

    const updated = await supabase(`app_users?id=eq.${encodeFilter(id)}`, {
      method: "PATCH",
      body: JSON.stringify(patch),
    });
    send(res, 200, { user: publicUser(updated[0] || { id, phone, nickname, avatar, is_admin: patch.is_admin }) });
  } catch (error) {
    send(res, 500, { error: error.message || "读取用户失败" });
  }
}
