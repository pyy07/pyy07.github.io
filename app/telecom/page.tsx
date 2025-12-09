"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function TelecomPage() {
  return (
    <main className="min-h-screen relative pb-20">
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
            className="inline-flex items-center text-blue-600 hover:text-blue-700 mb-8 transition-colors"
          >
            ← 返回首页
          </Link>

          <div className="bg-white rounded-lg shadow-xl p-8 border border-slate-200">
            <div className="mb-6">
              <span className="inline-block px-4 py-2 rounded-full text-sm font-semibold text-white bg-gradient-to-r from-blue-500 to-cyan-500 mb-4">
                2007-2012
              </span>
              <h1 className="text-4xl font-bold text-slate-900 mb-4">
                通信
              </h1>
              <p className="text-xl text-slate-600 mb-2">
                北电网络 / 爱立信
              </p>
              <p className="text-lg text-slate-500">
                开发者 / Domain Leader
              </p>
            </div>

            <div className="prose prose-slate max-w-none">
              <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">
                工作内容
              </h2>
              <p className="text-slate-700 leading-relaxed">
                在北电网络和爱立信工作期间，主要从事CDMA2000基站（BTS）的开发工作。
                作为开发者和Domain Leader，负责基站系统的设计、开发和维护工作。
              </p>

              <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">
                技术领域
              </h2>
              <ul className="list-disc list-inside text-slate-700 space-y-2">
                <li>CDMA2000 基站系统开发</li>
                <li>电信设备软件开发</li>
                <li>系统架构设计</li>
                <li>团队管理和技术领导</li>
              </ul>

              <div className="mt-12 p-4 bg-blue-50 rounded-lg border border-blue-200">
                <p className="text-sm text-slate-600">
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
