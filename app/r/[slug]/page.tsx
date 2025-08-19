import { redirect } from "next/navigation";

type QRPageProps = {
  params: {
    slug: string;
  };
};

export default async function QRPage({ params }: { params: { slug: string } }){
  const res = await fetch(
    `${process.env.SUPABASE_URL}/rest/v1/qr_links?slug=eq.${params.slug}`,
    {
      headers: {
        apikey: process.env.SUPABASE_ANON_KEY!,
      },
      cache: "no-store", // 👈 nên thêm để Vercel không cache API động
    }
  );

  const data = await res.json();

  if (data.length > 0) {
    redirect(data[0].url);
  }

  return <div className="p-10 text-center">QR không tồn tại</div>;
}