import adminAnswers from "../backend/admin-answers.mjs";
import adminFeedback from "../backend/admin-feedback.mjs";
import adminLogs from "../backend/admin-logs.mjs";
import adminUsers from "../backend/admin-users.mjs";
import authLogin from "../backend/auth-login.mjs";
import authLogout from "../backend/auth-logout.mjs";
import authMe from "../backend/auth-me.mjs";
import authRegister from "../backend/auth-register.mjs";
import authResetPassword from "../backend/auth-reset-password.mjs";
import favorites from "../backend/favorites.mjs";
import feedback from "../backend/feedback.mjs";
import oracleAnswer from "../backend/oracle-answer.mjs";
import todayLogs from "../backend/today-logs.mjs";
import userState from "../backend/user-state.mjs";
import { send } from "../backend/_lib/http.mjs";

const routes = new Map(Object.entries({
  "admin-answers": adminAnswers,
  "admin-feedback": adminFeedback,
  "admin-logs": adminLogs,
  "admin-users": adminUsers,
  "auth-login": authLogin,
  "auth-logout": authLogout,
  "auth-me": authMe,
  "auth-register": authRegister,
  "auth-reset-password": authResetPassword,
  favorites,
  feedback,
  "oracle-answer": oracleAnswer,
  "today-logs": todayLogs,
  "user-state": userState,
}));

export default async function handler(req, res) {
  const pathname = new URL(req.url || "/", "http://localhost").pathname;
  const name = pathname.replace(/^\/api\//, "").replace(/\/$/, "");
  const route = routes.get(name);
  res.setHeader("Cache-Control", "no-store");
  if (!route) return send(res, 404, { error: "接口不存在" });
  return route(req, res);
}
