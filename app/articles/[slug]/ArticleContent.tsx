"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function ArticleContent({ slug }: { slug: string }) {
  return (
    <div className="container mx-auto px-4 py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl mx-auto"
      >
        <Link
          href="/articles"
          className="inline-flex items-center text-purple-300 hover:text-white mb-8 transition-colors"
        >
          ← 返回文章列表
        </Link>

        <article className="bg-white/10 backdrop-blur-sm rounded-lg p-8">
          <h1 className="text-4xl font-bold text-white mb-4">文章标题</h1>
          <div className="prose prose-invert max-w-none text-slate-300">
            <p>文章内容将在这里显示...</p>
            <p>当前文章 slug: {slug}</p>
          </div>
        </article>
      </motion.div>
    </div>
  );
}

