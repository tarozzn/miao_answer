import { requireAdmin } from "./_lib/auth.mjs";
import { methodAllowed, send } from "./_lib/http.mjs";
import { supabase } from "./_lib/supabase.mjs";

export default async function handler(req, res) {
  if (!methodAllowed(req, res, ["GET"])) return;

  try {
    const admin = await requireAdmin(req);
    if (!admin) {
      send(res, 403, { error: "只有小兔子后台管理员可以看记录。" });
      return;
    }

    const rows = await supabase(
      "question_logs?select=id,question,answer_text,mood,created_at,app_users(phone,nickname,avatar)&order=created_at.desc&limit=200",
    );
    send(res, 200, { logs: rows });
  } catch (error) {
    send(res, 500, { error: error.message || "读取记录失败" });
  }
}
