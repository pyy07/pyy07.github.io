"use client";

import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function AIPage() {
  return (
    <main className="min-h-screen relative">
      <Header />
      <div className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-6xl mx-auto"
        >
          <h1 className="text-5xl font-bold mb-8 bg-gradient-to-r from-purple-600 via-pink-600 to-orange-600 bg-clip-text text-transparent">
            AI
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="bg-white rounded-lg shadow-md p-6 border border-slate-200 hover:shadow-lg transition-shadow">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">AI资讯</h2>
              <p className="text-slate-600">最新的AI技术资讯和趋势</p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6 border border-slate-200 hover:shadow-lg transition-shadow">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">AI工具</h2>
              <p className="text-slate-600">实用的AI工具推荐</p>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md p-8 border border-slate-200">
            <p className="text-slate-600 text-lg">
              AI相关内容展示区域，可以添加AI资讯、工具、教程等。
            </p>
          </div>
        </motion.div>
      </div>
      <Footer />
    </main>
  );
}
