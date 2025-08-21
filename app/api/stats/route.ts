import { NextResponse } from "next/server";

type QRDownloadRow = {
  format: string;
};

export async function GET() {
  try {
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

    // Type dữ liệu trả về
    const data: QRDownloadRow[] = await res.json();

    // Gom nhóm theo format
    const stats: Record<string, number> = {};
    data.forEach((row) => {
      stats[row.format] = (stats[row.format] || 0) + 1;
    });

    return NextResponse.json(stats);
  } catch (error) {
    console.error("GET /api/stats error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
