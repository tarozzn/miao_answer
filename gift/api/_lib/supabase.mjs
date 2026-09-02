const url = process.env.SUPABASE_URL || process.env.NEXT_PUBLIC_SUPABASE_URL;
const serviceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

export function hasDatabase() {
  return Boolean(url && serviceKey);
}

export async function supabase(path, options = {}) {
  if (!hasDatabase()) {
    throw new Error("Supabase is not configured");
  }

  const response = await fetch(`${url}/rest/v1/${path}`, {
    ...options,
    headers: {
      apikey: serviceKey,
      authorization: `Bearer ${serviceKey}`,
      "content-type": "application/json",
      prefer: "return=representation",
      ...(options.headers || {}),
    },
  });

  const text = await response.text();
  const data = text ? JSON.parse(text) : null;

  if (!response.ok) {
    const message = data?.message || data?.error || "数据库请求失败";
    throw new Error(message);
  }

  return data;
}

export function encodeFilter(value) {
  return encodeURIComponent(value);
}
