"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function GamingPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-50 dark:from-slate-900 dark:to-slate-800">
      <Header />
      <div className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto"
        >
          <Link
            href="/"
            className="inline-flex items-center text-purple-600 dark:text-purple-400 hover:underline mb-8"
          >
            ← 返回首页
          </Link>

          <div className="bg-white dark:bg-slate-800 rounded-lg shadow-xl p-8">
            <div className="mb-6">
              <span className="inline-block px-4 py-2 rounded-full text-sm font-semibold text-white bg-gradient-to-r from-purple-500 to-pink-500 mb-4">
                2012-2018
              </span>
              <h1 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">
                游戏开发
              </h1>
              <p className="text-xl text-slate-600 dark:text-slate-300 mb-2">
                魔龙网络科技有限公司
              </p>
              <p className="text-lg text-slate-500 dark:text-slate-400">
                合伙人
              </p>
            </div>

            <div className="prose prose-slate dark:prose-invert max-w-none">
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mt-8 mb-4">
                工作内容
              </h2>
              <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
                作为魔龙网络科技有限公司的合伙人，主要从事游戏研发工作，包括网络游戏和手机游戏的开发。
                负责游戏项目的整体规划、技术架构设计和团队管理。
              </p>

              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mt-8 mb-4">
                技术领域
              </h2>
              <ul className="list-disc list-inside text-slate-700 dark:text-slate-300 space-y-2">
                <li>网络游戏开发</li>
                <li>手机游戏开发</li>
                <li>游戏引擎技术</li>
                <li>游戏服务器架构</li>
                <li>团队管理和项目管理</li>
              </ul>

              <div className="mt-12 p-4 bg-purple-50 dark:bg-purple-900/20 rounded-lg border border-purple-200 dark:border-purple-800">
                <p className="text-sm text-slate-600 dark:text-slate-400">
                  💡 此页面结构支持未来扩展，可以添加更多详细内容、项目案例、技术细节等。
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
      <Footer />
    </main>
  );
}

