"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function Header() {
  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200 shadow-sm"
    >
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="text-2xl font-bold text-slate-900 hover:text-purple-600 transition-colors">
            LukePan
          </Link>
          <div className="flex gap-6">
            <Link
              href="/"
              className="text-slate-700 hover:text-purple-600 transition-colors"
            >
              首页
            </Link>
            <Link
              href="/articles"
              className="text-slate-700 hover:text-purple-600 transition-colors"
            >
              文章
            </Link>
            <Link
              href="/projects"
              className="text-slate-700 hover:text-purple-600 transition-colors"
            >
              项目
            </Link>
            <Link
              href="/ai"
              className="text-slate-700 hover:text-purple-600 transition-colors"
            >
              AI
            </Link>
            <Link
              href="/leisure"
              className="text-slate-700 hover:text-purple-600 transition-colors"
            >
              休闲
            </Link>
          </div>
        </div>
      </nav>
    </motion.header>
  );
}
