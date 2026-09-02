import { createSession, findUserByPhone, normalizePhone, publicUser, verifyPassword } from "./_lib/auth.mjs";
import { methodAllowed, readJson, send, setSessionCookie } from "./_lib/http.mjs";
import { hasDatabase } from "./_lib/supabase.mjs";

export default async function handler(req, res) {
  if (!methodAllowed(req, res, ["POST"])) return;
  if (!hasDatabase()) {
    send(res, 503, { error: "数据库还没配置，先去填 Supabase 环境变量。" });
    return;
  }

  try {
    const body = await readJson(req);
    const user = await findUserByPhone(normalizePhone(body.phone));

    if (!user || !verifyPassword(body.password, user.password_hash)) {
      send(res, 401, { error: "手机号或密码不对，某只猪再检查一下。" });
      return;
    }

    const token = await createSession(res, user.id);
    setSessionCookie(res, token);
    send(res, 200, { user: publicUser(user) });
  } catch (error) {
    send(res, 500, { error: error.message || "登录失败" });
  }
}
