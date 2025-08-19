"use client";
import { useState } from "react";
import QRCode from "qrcode";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function Home() {
  const [text, setText] = useState("");
  const [qrUrl, setQrUrl] = useState("");

  const generateQR = async () => {

    if (!text) return;
    const url = await QRCode.toDataURL(text);
    setQrUrl(url);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-6">
      <Card className="w-full max-w-md p-8 shadow-md rounded-2xl bg-white">
        <CardContent className="space-y-6">
          <h1 className="text-xl font-semibold text-center text-gray-800">
            Trình Tạo QR Code Miễn Phí
          </h1>

          <Input
            type="text"
            placeholder="Nhập thông tin cần tạo QR"
            value={text}
            onChange={(e) => setText(e.target.value)}
            className="rounded-lg"
          />

          <Button
            onClick={generateQR}
            className="w-full rounded-lg bg-black text-white font-medium hover:bg-gray-800"
          >
            Tạo QR
          </Button>

          {qrUrl && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="flex flex-col items-center gap-4 mt-6"
            >
              <img src={qrUrl} alt="QR Code" className="rounded-lg shadow" />
              <a
                href={qrUrl}
                download="qrcode.png"
                className="text-sm text-gray-600 hover:text-black"
              >
                📥 Tải QR Code
              </a>
            </motion.div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
