import { randomBytes, scryptSync, timingSafeEqual, createHash } from "node:crypto";
import { parseCookies } from "./http.mjs";
import { encodeFilter, hasDatabase, supabase } from "./supabase.mjs";

export function normalizePhone(phone) {
  return String(phone || "").replace(/[^\d+]/g, "").trim();
}

export function hashPassword(password) {
  const salt = randomBytes(16).toString("hex");
  const hash = scryptSync(String(password), salt, 64).toString("hex");
  return `${salt}:${hash}`;
}

export function verifyPassword(password, stored) {
  const [salt, hash] = String(stored || "").split(":");
  if (!salt || !hash) {
    return false;
  }

  const candidate = scryptSync(String(password), salt, 64);
  const expected = Buffer.from(hash, "hex");
  return expected.length === candidate.length && timingSafeEqual(expected, candidate);
}

export function hashToken(token) {
  return createHash("sha256").update(token).digest("hex");
}

export function isAdminPhone(phone) {
  return (process.env.ADMIN_PHONES || "")
    .split(",")
    .map((item) => normalizePhone(item))
    .filter(Boolean)
    .includes(normalizePhone(phone));
}

export async function findUserByPhone(phone) {
  const rows = await supabase(
    `app_users?phone=eq.${encodeFilter(phone)}&select=id,phone,password_hash,nickname,avatar,is_admin,created_at&limit=1`,
  );
  return rows[0] || null;
}

export async function findUserById(id) {
  const rows = await supabase(
    `app_users?id=eq.${encodeFilter(id)}&select=id,phone,nickname,avatar,is_admin,created_at&limit=1`,
  );
  return rows[0] || null;
}

export async function createSession(res, userId) {
  const token = randomBytes(32).toString("hex");
  const tokenHash = hashToken(token);
  const expiresAt = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toISOString();
  await supabase("sessions", {
    method: "POST",
    body: JSON.stringify({ user_id: userId, token_hash: tokenHash, expires_at: expiresAt }),
  });
  return token;
}

export async function getSessionUser(req) {
  if (!hasDatabase()) {
    return null;
  }

  const token = parseCookies(req).oracle_session;
  if (!token) {
    return null;
  }

  const rows = await supabase(
    `sessions?token_hash=eq.${encodeFilter(hashToken(token))}&expires_at=gte.${encodeFilter(
      new Date().toISOString(),
    )}&select=id,user_id`,
  );

  const session = rows[0];
  if (!session) {
    return null;
  }

  return findUserById(session.user_id);
}

export async function deleteSession(req) {
  const token = parseCookies(req).oracle_session;
  if (!token || !hasDatabase()) {
    return;
  }

  await supabase(`sessions?token_hash=eq.${encodeFilter(hashToken(token))}`, {
    method: "DELETE",
  });
}

export function publicUser(user) {
  if (!user) {
    return null;
  }

  return {
    id: user.id,
    phone: user.phone,
    nickname: user.nickname,
    avatar: user.avatar,
    isAdmin: Boolean(user.is_admin || isAdminPhone(user.phone)),
  };
}

export async function requireAdmin(req) {
  const user = await getSessionUser(req);
  if (!user || (!user.is_admin && !isAdminPhone(user.phone))) {
    return null;
  }
  return user;
}
