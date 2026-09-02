import { getSessionUser } from "./_lib/auth.mjs";
import { methodAllowed, readJson, send } from "./_lib/http.mjs";
import { getFallbackAnswer, getMood, pick } from "./_lib/oracle.mjs";
import { hasDatabase, supabase } from "./_lib/supabase.mjs";

export default async function handler(req, res) {
  if (!methodAllowed(req, res, ["POST"])) return;

  try {
    const body = await readJson(req);
    const question = String(body.question || "").trim().slice(0, 120);
    const rawMood = String(body.mood || getMood(question)).trim();
    const mood = ["general", "action", "wait", "comfort", "love", "playful", "book"].includes(rawMood)
      ? rawMood
      : "general";

    let answer = getFallbackAnswer(mood);
    let user = null;

    if (hasDatabase()) {
      user = await getSessionUser(req);
      const answers = await supabase(
        `answers?active=eq.true&mood=in.(${mood},general,book)&select=id,text,mood`,
      ).catch(() => []);
      const cleanAnswers = Array.isArray(answers) ? answers : [];
      if (cleanAnswers.length) {
        answer = pick(cleanAnswers);
      }

      if (user && question) {
        await supabase("question_logs", {
          method: "POST",
          body: JSON.stringify({
            user_id: user.id,
            question,
            answer_text: answer.text,
            answer_id: answer.id || null,
            mood,
          }),
        });
      }
    }

    const signNumber = Math.floor(Math.random() * 412) + 1;
    send(res, 200, { text: `第 ${signNumber} 签：${answer.text}`, mood, signNumber });
  } catch (error) {
    send(res, 500, { error: error.message || "抽签失败" });
  }
}
