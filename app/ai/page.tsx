"use client";

import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function AIPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Header />
      <div className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-6xl mx-auto"
        >
          <h1 className="text-5xl font-bold mb-8 bg-gradient-to-r from-purple-400 via-pink-400 to-orange-400 bg-clip-text text-transparent">
            AI
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <h2 className="text-2xl font-bold text-white mb-4">AI资讯</h2>
              <p className="text-slate-300">最新的AI技术资讯和趋势</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <h2 className="text-2xl font-bold text-white mb-4">AI工具</h2>
              <p className="text-slate-300">实用的AI工具推荐</p>
            </div>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8">
            <p className="text-slate-300 text-lg">
              AI相关内容展示区域，可以添加AI资讯、工具、教程等。
            </p>
          </div>
        </motion.div>
      </div>
      <Footer />
    </main>
  );
}

