import { requireAdmin } from "./_lib/auth.mjs";
import { methodAllowed, readJson, send } from "./_lib/http.mjs";
import { encodeFilter, supabase } from "./_lib/supabase.mjs";

const allowedMoods = new Set(["general", "action", "wait", "comfort", "love", "playful", "book"]);

export default async function handler(req, res) {
  if (!methodAllowed(req, res, ["GET", "POST", "PATCH", "DELETE"])) return;

  try {
    const admin = await requireAdmin(req);
    if (!admin) {
      send(res, 403, { error: "只有小兔子后台管理员可以管理答案。" });
      return;
    }

    if (req.method === "GET") {
      const rows = await supabase("answers?select=id,text,mood,active,created_at&order=created_at.desc");
      send(res, 200, { answers: rows });
      return;
    }

    const body = await readJson(req);
    const id = String(body.id || "");

    if (req.method === "POST") {
      const text = String(body.text || "").trim().slice(0, 140);
      const mood = allowedMoods.has(body.mood) ? body.mood : "book";
      if (!text) {
        send(res, 400, { error: "答案内容不能为空。" });
        return;
      }
      const rows = await supabase("answers", {
        method: "POST",
        body: JSON.stringify({ text, mood, active: body.active !== false }),
      });
      send(res, 201, { answer: rows[0] });
      return;
    }

    if (!id) {
      send(res, 400, { error: "缺少答案 id。" });
      return;
    }

    if (req.method === "PATCH") {
      const patch = {};
      if (typeof body.text === "string") patch.text = body.text.trim().slice(0, 140);
      if (allowedMoods.has(body.mood)) patch.mood = body.mood;
      if (typeof body.active === "boolean") patch.active = body.active;
      const rows = await supabase(`answers?id=eq.${encodeFilter(id)}`, {
        method: "PATCH",
        body: JSON.stringify(patch),
      });
      send(res, 200, { answer: rows[0] });
      return;
    }

    await supabase(`answers?id=eq.${encodeFilter(id)}`, { method: "DELETE" });
    send(res, 200, { ok: true });
  } catch (error) {
    send(res, 500, { error: error.message || "管理答案失败" });
  }
}
