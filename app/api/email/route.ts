export const runtime = "nodejs";

type EmailBody = {
  email?: string;
  locationName?: string;
  crops?: string[];
};

export async function POST(request: Request) {
  let body: EmailBody = {};
  try {
    body = (await request.json()) as EmailBody;
  } catch {
    body = {};
  }

  const email = body.email?.trim().toLowerCase();
  if (!email || !email.includes("@")) {
    return Response.json({ ok: true });
  }

  const entry = JSON.stringify({
    email,
    locationName: body.locationName ?? null,
    crops: body.crops ?? [],
    ts: new Date().toISOString(),
  });

  const hasKv =
    Boolean(process.env.KV_REST_API_URL) &&
    Boolean(process.env.KV_REST_API_TOKEN);

  if (!hasKv) {
    console.log("[plantify] email capture (KV not configured):", entry);
    return Response.json({ ok: true });
  }

  try {
    const { kv } = await import("@vercel/kv");
    await kv.lpush("plantify:emails", entry);
  } catch (err) {
    console.log("[plantify] email capture fallback:", entry, err);
  }

  return Response.json({ ok: true });
}
