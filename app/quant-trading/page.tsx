"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function QuantTradingPage() {
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
            className="inline-flex items-center text-orange-600 hover:text-orange-700 mb-8 transition-colors"
          >
            ← 返回首页
          </Link>

          <div className="bg-white rounded-lg shadow-xl p-8 border border-slate-200">
            <div className="mb-6">
              <span className="inline-block px-4 py-2 rounded-full text-sm font-semibold text-white bg-gradient-to-r from-orange-500 to-red-500 mb-4">
                2020-至今
              </span>
              <h1 className="text-4xl font-bold text-slate-900 mb-4">
                量化交易
              </h1>
              <p className="text-xl text-slate-600 mb-2">
                某证券公司
              </p>
              <p className="text-lg text-slate-500">
                量化交易
              </p>
            </div>

            <div className="prose prose-slate max-w-none">
              <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">
                工作内容
              </h2>
              <p className="text-slate-700 leading-relaxed">
                在某证券公司从事量化交易工作，运用算法和数据分析进行交易策略的开发和执行。
                结合金融知识和编程技术，开发量化交易系统。
              </p>

              <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">
                技术领域
              </h2>
              <ul className="list-disc list-inside text-slate-700 space-y-2">
                <li>量化交易策略开发</li>
                <li>金融数据分析</li>
                <li>算法交易系统</li>
                <li>风险管理</li>
                <li>高频交易技术</li>
              </ul>

              <div className="mt-12 p-4 bg-orange-50 rounded-lg border border-orange-200">
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
