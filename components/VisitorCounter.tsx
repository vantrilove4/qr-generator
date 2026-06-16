"use client";

import { useEffect, useState } from "react";
import { supabase } from "../lib/supabaseClient";

export default function VisitorCounter() {
  const [views, setViews] = useState(0);

  useEffect(() => {
    async function load() {
      const viewed = sessionStorage.getItem("home-view");

      if (!viewed) {
        const { data } = await supabase
          .from("qr_downloads") // đổi thành tên bảng của bạn
          .select("downloads")
          .eq("qr_text", "home")
          .single();

        if (data) {
          await supabase
            .from("qr_downloads")
            .update({
              downloads: data.downloads + 1,
            })
            .eq("qr_text", "home");

          setViews(data.downloads + 1);
        }

        sessionStorage.setItem("home-view", "true");
      } else {
        const { data } = await supabase
          .from("qr_downloads")
          .select("downloads")
          .eq("qr_text", "home")
          .single();

        if (data) {
          setViews(data.downloads);
        }
      }
    }

    load();
  }, []);

  return (
    <p className="mt-2">
      👥 Đã phục vụ{" "}
      <span className="font-semibold text-cyan-400">
        {views.toLocaleString("vi-VN")}
      </span>{" "}
      lượt truy cập
    </p>
  );
}