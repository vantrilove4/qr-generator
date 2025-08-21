import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { format } = await req.json();

  const res = await fetch(`${process.env.SUPABASE_URL}/rest/v1/qr_downloads`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      apikey: process.env.SUPABASE_ANON_KEY!,
      Authorization: `Bearer ${process.env.SUPABASE_ANON_KEY!}`,
    },
    body: JSON.stringify({ format }),
  });

  if (!res.ok) {
    return NextResponse.json({ error: "Insert failed" }, { status: 500 });
  }

  return NextResponse.json({ success: true });
}
