"use client";

import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useEffect, useState } from "react";

export default function AIPage() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(false);
  }, []);

  return (
    <main className="min-h-screen relative pb-20">
      <Header />
      <div className="container mx-auto px-4 py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-7xl mx-auto"
        >
          <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-purple-600 via-pink-600 to-orange-600 bg-clip-text text-transparent">
            AI
          </h1>

          <div className="bg-white rounded-lg shadow-lg border border-slate-200 overflow-hidden mb-6">
            <div className="p-4 border-b border-slate-200">
              <h2 className="text-2xl font-bold text-slate-900 mb-2">SVG Generator Gallery</h2>
              <p className="text-slate-600 text-sm">浏览所有用户生成的精美 SVG 动画作品</p>
            </div>
            <div className="w-full" style={{ height: "calc(100vh - 280px)", minHeight: "600px" }}>
              {isLoading ? (
                <div className="flex items-center justify-center h-full">
                  <div className="text-slate-600">加载中...</div>
                </div>
              ) : (
                <iframe
                  src="https://svg-generator.227studio.cn/gallery"
                  className="w-full h-full border-0"
                  title="SVG Generator Gallery"
                  allow="fullscreen"
                  loading="lazy"
                  sandbox="allow-same-origin allow-scripts allow-popups allow-forms allow-top-navigation"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              )}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white rounded-lg shadow-md p-6 border border-slate-200 hover:shadow-lg transition-shadow">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">AI资讯</h2>
              <p className="text-slate-600">最新的AI技术资讯和趋势</p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6 border border-slate-200 hover:shadow-lg transition-shadow">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">AI工具</h2>
              <p className="text-slate-600">实用的AI工具推荐</p>
            </div>
          </div>
        </motion.div>
      </div>
      <Footer />
    </main>
  );
}
