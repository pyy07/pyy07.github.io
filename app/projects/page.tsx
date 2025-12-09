"use client";

import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function ProjectsPage() {
  return (
    <main className="min-h-screen relative pb-20">
      <Header />
      <div className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-6xl mx-auto"
        >
          <h1 className="text-5xl font-bold mb-8 bg-gradient-to-r from-purple-600 via-pink-600 to-orange-600 bg-clip-text text-transparent">
            项目
          </h1>

          <div className="bg-white rounded-lg shadow-md p-8 border border-slate-200">
            <p className="text-slate-600 text-lg">
              项目展示页面，后续可以添加项目列表和详情。
            </p>
          </div>
        </motion.div>
      </div>
      <Footer />
    </main>
  );
}
