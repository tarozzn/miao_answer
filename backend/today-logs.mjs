import { getSessionUser } from "./_lib/auth.mjs";
import { methodAllowed, send } from "./_lib/http.mjs";
import { encodeFilter, hasDatabase, supabase } from "./_lib/supabase.mjs";

function getChinaDayRange() {
  const parts = new Intl.DateTimeFormat("en-CA", {
    timeZone: "Asia/Shanghai",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  })
    .format(new Date())
    .split("-")
    .map(Number);
  const [year, month, day] = parts;
  const startUtc = Date.UTC(year, month - 1, day) - 8 * 60 * 60 * 1000;
  const endUtc = startUtc + 24 * 60 * 60 * 1000;

  return {
    start: new Date(startUtc).toISOString(),
    end: new Date(endUtc).toISOString(),
  };
}

export default async function handler(req, res) {
  if (!methodAllowed(req, res, ["GET"])) return;

  if (!hasDatabase()) {
    send(res, 200, { logs: [], configured: false });
    return;
  }

  try {
    const user = await getSessionUser(req);
    if (!user) {
      send(res, 401, { error: "请先登录小猪通行证" });
      return;
    }

    const { start, end } = getChinaDayRange();
    const logs = await supabase(
      `question_logs?user_id=eq.${encodeFilter(user.id)}&created_at=gte.${encodeFilter(
        start,
      )}&created_at=lt.${encodeFilter(end)}&select=id,question,answer_text,mood,created_at&order=created_at.asc&limit=80`,
    );

    send(res, 200, { logs, configured: true });
  } catch (error) {
    send(res, 500, { error: error.message || "读取今日聊天失败" });
  }
}
