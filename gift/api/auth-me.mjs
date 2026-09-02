import { getSessionUser, publicUser } from "./_lib/auth.mjs";
import { methodAllowed, readJson, send } from "./_lib/http.mjs";
import { encodeFilter, hasDatabase, supabase } from "./_lib/supabase.mjs";

export default async function handler(req, res) {
  if (!methodAllowed(req, res, ["GET", "PATCH"])) return;
  if (!hasDatabase()) {
    send(res, 200, { user: null, configured: false });
    return;
  }

  try {
    const user = await getSessionUser(req);
    if (!user) {
      send(res, 200, { user: null, configured: true });
      return;
    }

    if (req.method === "GET") {
      send(res, 200, { user: publicUser(user), configured: true });
      return;
    }

    const body = await readJson(req);
    const nickname = String(body.nickname || user.nickname || "某只猪").trim().slice(0, 18) || "某只猪";
    const rawAvatar = String(body.avatar || user.avatar || "🐷").trim();
    const avatar = rawAvatar.startsWith("data:image/")
      ? rawAvatar.slice(0, 220000)
      : rawAvatar.slice(0, 8) || "🐷";

    if (rawAvatar.startsWith("data:") && !rawAvatar.startsWith("data:image/")) {
      send(res, 400, { error: "头像只能选择图片哦。" });
      return;
    }

    if (rawAvatar.length > 220000) {
      send(res, 400, { error: "头像图片太大了，换一张小一点的试试。" });
      return;
    }

    const rows = await supabase(`app_users?id=eq.${encodeFilter(user.id)}`, {
      method: "PATCH",
      body: JSON.stringify({ nickname, avatar }),
    });
    send(res, 200, { user: publicUser(rows[0] || { ...user, nickname, avatar }) });
  } catch (error) {
    send(res, 500, { error: error.message || "读取用户失败" });
  }
}
