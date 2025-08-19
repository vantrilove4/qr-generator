import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { slug, url } = await req.json();

  const res = await fetch(`${process.env.SUPABASE_URL}/rest/v1/qr_links`, {
    method: "POST",
    headers: {
      apikey: process.env.SUPABASE_ANON_KEY!,
      "Content-Type": "application/json",
      Prefer: "resolution=merge-duplicates", // nếu trùng slug thì update
    },
    body: JSON.stringify({ slug, url }),
  });

  return NextResponse.json(await res.json());
}
