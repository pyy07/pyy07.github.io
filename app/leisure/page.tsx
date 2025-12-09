"use client";

import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useEffect, useState } from "react";

export default function LeisurePage() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(false);
  }, []);

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Header />
      <div className="container mx-auto px-4 py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-7xl mx-auto"
        >
          <div className="mb-4">
            <h1 className="text-3xl font-bold text-white mb-2">休闲</h1>
            <p className="text-slate-300">来自 games.227studio.cn 的内容</p>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-lg overflow-hidden" style={{ height: 'calc(100vh - 200px)' }}>
            {isLoading ? (
              <div className="flex items-center justify-center h-full">
                <div className="text-slate-300">加载中...</div>
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
        </motion.div>
      </div>
      <Footer />
    </main>
  );
}

