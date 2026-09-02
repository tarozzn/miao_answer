import { getSessionUser } from "./_lib/auth.mjs";
import { methodAllowed, readJson, send } from "./_lib/http.mjs";
import { encodeFilter, hasDatabase, supabase } from "./_lib/supabase.mjs";

export default async function handler(req, res) {
  if (!methodAllowed(req, res, ["GET", "POST", "DELETE"])) return;
  if (!hasDatabase()) {
    send(res, 200, { favorites: [], configured: false });
    return;
  }

  try {
    const user = await getSessionUser(req);
    if (!user) {
      send(res, 401, { error: "请先登录再收藏。" });
      return;
    }

    if (req.method === "GET") {
      const rows = await supabase(
        `favorites?user_id=eq.${encodeFilter(user.id)}&select=id,answer_text,question,created_at&order=created_at.desc&limit=50`,
      );
      send(res, 200, { favorites: rows, configured: true });
      return;
    }

    if (req.method === "POST") {
      const body = await readJson(req);
      const answerText = String(body.answerText || "").trim().slice(0, 220);
      const question = String(body.question || "").trim().slice(0, 120);
      if (!answerText) {
        send(res, 400, { error: "还没有可以收藏的答案。" });
        return;
      }
      const rows = await supabase("favorites", {
        method: "POST",
        body: JSON.stringify({ user_id: user.id, answer_text: answerText, question }),
      });
      send(res, 201, { favorite: rows[0] });
      return;
    }

    const body = await readJson(req);
    const id = String(body.id || "");
    const answerText = String(body.answerText || "").trim().slice(0, 220);
    const question = String(body.question || "").trim().slice(0, 120);
    if (!id && !answerText) {
      send(res, 400, { error: "缺少要取消收藏的答案。" });
      return;
    }

    const filter = id
      ? `favorites?id=eq.${encodeFilter(id)}&user_id=eq.${encodeFilter(user.id)}`
      : `favorites?user_id=eq.${encodeFilter(user.id)}&answer_text=eq.${encodeFilter(
          answerText,
        )}&question=eq.${encodeFilter(question)}`;
    await supabase(filter, { method: "DELETE" });
    send(res, 200, { ok: true });
  } catch (error) {
    send(res, 500, { error: error.message || "收藏失败" });
  }
}
