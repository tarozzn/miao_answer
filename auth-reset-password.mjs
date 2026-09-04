import { createSession, findUserByPhone, hashPassword, normalizePhone, publicUser } from "./_lib/auth.mjs";
import { methodAllowed, readJson, send, setSessionCookie } from "./_lib/http.mjs";
import { encodeFilter, hasDatabase, supabase } from "./_lib/supabase.mjs";

const RESET_ANSWER = "2024上海";

function normalizeResetAnswer(answer) {
  return String(answer || "")
    .trim()
    .replace(/\s+/g, "")
    .replace(/[，,。]/g, "");
}

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
    const secretAnswer = normalizeResetAnswer(body.secretAnswer);

    if (phone.length < 6 || password.length < 6) {
      send(res, 400, { error: "手机号和新密码都要认真填哦，新密码至少 6 位。" });
      return;
    }

    if (secretAnswer !== RESET_ANSWER) {
      send(res, 401, { error: "暗号不对哦，某只猪再想想大白菜骨头汤。" });
      return;
    }

    const user = await findUserByPhone(phone);
    if (!user) {
      send(res, 404, { error: "没有找到这个手机号的小猪通行证。" });
      return;
    }

    const rows = await supabase(`app_users?id=eq.${encodeFilter(user.id)}`, {
      method: "PATCH",
      body: JSON.stringify({ password_hash: hashPassword(password) }),
    });
    const updatedUser = rows[0] || user;
    const token = await createSession(res, user.id);
    setSessionCookie(res, token);
    send(res, 200, { user: publicUser(updatedUser) });
  } catch (error) {
    send(res, 500, { error: error.message || "重设密码失败" });
  }
}
