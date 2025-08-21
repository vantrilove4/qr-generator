import { NextResponse } from "next/server";

export async function GET() {
  const res = await fetch(
    `${process.env.SUPABASE_URL}/rest/v1/qr_downloads?select=format`,
    {
      headers: {
        apikey: process.env.SUPABASE_ANON_KEY!,
        Authorization: `Bearer ${process.env.SUPABASE_ANON_KEY!}`,
      },
    }
  );

  if (!res.ok) {
    return NextResponse.json({ error: "Fetch failed" }, { status: 500 });
  }

  const data = await res.json();

  // Gom nhóm theo format
  const stats: Record<string, number> = {};
  data.forEach((row: any) => {
    stats[row.format] = (stats[row.format] || 0) + 1;
  });

  return NextResponse.json(stats);
}
