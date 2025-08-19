import { redirect } from "next/navigation";

export default async function QRPage({ params }: { params: { slug: string } }) {
  const res = await fetch(
    `${process.env.SUPABASE_URL}/rest/v1/qr_links?slug=eq.${params.slug}`,
    { headers: { apikey: process.env.SUPABASE_ANON_KEY! } }
  );
  const data = await res.json();

  if (data.length > 0) {
    redirect(data[0].url);
  }

  return <div className="p-10 text-center">QR không tồn tại</div>;
}
