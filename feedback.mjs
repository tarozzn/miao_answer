import { getSessionUser } from "./_lib/auth.mjs";
import { methodAllowed, readJson, send } from "./_lib/http.mjs";
import { hasDatabase, supabase } from "./_lib/supabase.mjs";

export default async function handler(req, res) {
  if (!methodAllowed(req, res, ["POST"])) return;
  if (!hasDatabase()) {
    send(res, 503, { error: "数据库还没配置，反馈暂时没地方放。" });
    return;
  }

  try {
    const user = await getSessionUser(req);
    if (!user) {
      send(res, 401, { error: "请先登录再提交反馈。" });
      return;
    }

    const body = await readJson(req);
    const message = String(body.message || "").trim().slice(0, 300);
    if (!message) {
      send(res, 400, { error: "反馈内容不能为空。" });
      return;
    }

    await supabase("feedback", {
      method: "POST",
      body: JSON.stringify({ user_id: user.id, message }),
    });
    send(res, 201, { ok: true });
  } catch (error) {
    send(res, 500, { error: error.message || "提交反馈失败" });
  }
}
