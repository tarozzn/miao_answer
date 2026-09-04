import { createSession, findUserByPhone, hashPassword, isAdminPhone, normalizePhone, publicUser } from "./_lib/auth.mjs";
import { methodAllowed, readJson, send, setSessionCookie } from "./_lib/http.mjs";
import { hasDatabase, supabase } from "./_lib/supabase.mjs";

export default async function handler(req, res) {
  if (!methodAllowed(req, res, ["POST"])) return;
  if (!hasDatabase()) {
    send(res, 503, { error: "数据库还没配置，先去填 Supabase 环境变量。" });
    return;
  }

  try {
    const body = await readJson(req);
    const phone = normalizePhone(body.phone);
    const password = String(body.password || "");
    const nickname = String(body.nickname || "某只猪").trim().slice(0, 18) || "某只猪";

    if (phone.length < 6 || password.length < 6) {
      send(res, 400, { error: "手机号和密码都要认真填哦，密码至少 6 位。" });
      return;
    }

    if (await findUserByPhone(phone)) {
      send(res, 409, { error: "该用户已注册，请登录。" });
      return;
    }

    const created = await supabase("app_users", {
      method: "POST",
      body: JSON.stringify({
        phone,
        password_hash: hashPassword(password),
        nickname,
        avatar: "🐷",
        is_admin: isAdminPhone(phone),
      }),
    });
    const user = created[0];
    const token = await createSession(res, user.id);
    setSessionCookie(res, token);
    send(res, 201, { user: publicUser(user) });
  } catch (error) {
    send(res, 500, { error: error.message || "注册失败" });
  }
}
