"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useEffect, useState } from "react";

export default function LeisurePage() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(false);
  }, []);

  return (
    <main className="min-h-screen relative">
      <Header />
      <div className="w-full" style={{ height: 'calc(100vh - 80px)' }}>
        {isLoading ? (
          <div className="flex items-center justify-center h-full">
            <div className="text-slate-600">加载中...</div>
          </div>
        ) : (
          <iframe
            src="https://games.227studio.cn"
            className="w-full h-full border-0"
            title="休闲游戏"
            allow="fullscreen"
            loading="lazy"
          />
        )}
      </div>
      <Footer />
    </main>
  );
}
