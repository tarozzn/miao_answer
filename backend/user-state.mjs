import { getSessionUser } from "./_lib/auth.mjs";
import { methodAllowed, readJson, send } from "./_lib/http.mjs";
import { encodeFilter, hasDatabase, supabase } from "./_lib/supabase.mjs";

const DEFAULT_STATE = {
  visitState: {},
  energyState: {},
  wishes: [],
};

function normalizeState(row) {
  if (!row) {
    return DEFAULT_STATE;
  }

  return {
    visitState: row.visit_state || {},
    energyState: row.energy_state || {},
    wishes: Array.isArray(row.wishes) ? row.wishes : [],
  };
}

function cleanWishes(value) {
  return Array.isArray(value)
    ? value
        .filter((wish) => wish?.text)
        .slice(0, 30)
        .map((wish) => ({
          id: String(wish.id || `${Date.now()}-${Math.random().toString(16).slice(2)}`),
          text: String(wish.text || "").trim().slice(0, 120),
          createdAt: wish.createdAt || new Date().toISOString(),
        }))
    : [];
}

export default async function handler(req, res) {
  if (!methodAllowed(req, res, ["GET", "PATCH"])) return;

  if (!hasDatabase()) {
    send(res, 200, { ...DEFAULT_STATE, configured: false });
    return;
  }

  try {
    const user = await getSessionUser(req);
    if (!user) {
      send(res, 401, { error: "请先登录小猪通行证" });
      return;
    }

    if (req.method === "GET") {
      const rows = await supabase(
        `user_states?user_id=eq.${encodeFilter(user.id)}&select=visit_state,energy_state,wishes&limit=1`,
      );
      send(res, 200, { ...normalizeState(rows[0]), configured: true });
      return;
    }

    const body = await readJson(req);
    const payload = {
      user_id: user.id,
      updated_at: new Date().toISOString(),
    };

    if (body.visitState && typeof body.visitState === "object") {
      payload.visit_state = body.visitState;
    }
    if (body.energyState && typeof body.energyState === "object") {
      payload.energy_state = body.energyState;
    }
    if (Array.isArray(body.wishes)) {
      payload.wishes = cleanWishes(body.wishes);
    }

    const rows = await supabase("user_states?on_conflict=user_id", {
      method: "POST",
      headers: { prefer: "resolution=merge-duplicates,return=representation" },
      body: JSON.stringify(payload),
    });

    send(res, 200, { ...normalizeState(rows[0]), configured: true });
  } catch (error) {
    send(res, 500, { error: error.message || "保存小猪状态失败" });
  }
}
