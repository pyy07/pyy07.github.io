"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function SaasBlockchainPage() {
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
            className="inline-flex items-center text-green-600 hover:text-green-700 mb-8 transition-colors"
          >
            ← 返回首页
          </Link>

          <div className="bg-white rounded-lg shadow-xl p-8 border border-slate-200">
            <div className="mb-6">
              <span className="inline-block px-4 py-2 rounded-full text-sm font-semibold text-white bg-gradient-to-r from-green-500 to-emerald-500 mb-4">
                2018-2020
              </span>
              <h1 className="text-4xl font-bold text-slate-900 mb-4">
                SaaS电商
              </h1>
              <p className="text-xl text-slate-600 mb-2">
                独立开发者
              </p>
              <p className="text-lg text-slate-500">
                独立开发者
              </p>
            </div>

            <div className="prose prose-slate max-w-none">
              <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">
                工作内容
              </h2>
              <p className="text-slate-700 leading-relaxed">
                作为独立开发者，开发了SaaS商城系统和区块链相关项目。
                从产品设计、技术开发到运营维护，全程独立完成多个项目。
              </p>

              <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">
                技术领域
              </h2>
              <ul className="list-disc list-inside text-slate-700 space-y-2">
                <li>SaaS 平台开发</li>
                <li>电商系统开发</li>
                <li>区块链技术</li>
                <li>全栈开发</li>
                <li>产品设计和运营</li>
              </ul>

              <div className="mt-12 p-4 bg-green-50 rounded-lg border border-green-200">
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
