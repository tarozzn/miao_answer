import { deleteSession } from "./_lib/auth.mjs";
import { clearSessionCookie, methodAllowed, send } from "./_lib/http.mjs";

export default async function handler(req, res) {
  if (!methodAllowed(req, res, ["POST"])) return;

  try {
    await deleteSession(req);
    clearSessionCookie(res);
    send(res, 200, { ok: true });
  } catch (error) {
    clearSessionCookie(res);
    send(res, 200, { ok: true });
  }
}
