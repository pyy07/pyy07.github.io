"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useEffect, useState } from "react";

interface Article {
  slug: string;
  title: string;
  date?: string;
  description?: string;
}

export default function ArticlesPage() {
  const [articles, setArticles] = useState<Article[]>([]);

  useEffect(() => {
    // 这里可以从API或文件系统获取文章列表
    // 暂时使用示例数据
    setArticles([
      {
        slug: "example-article",
        title: "示例文章",
        date: "2024-01-01",
        description: "这是一篇示例文章"
      }
    ]);
  }, []);

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Header />
      <div className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <h1 className="text-5xl font-bold mb-8 bg-gradient-to-r from-purple-400 via-pink-400 to-orange-400 bg-clip-text text-transparent">
            文章
          </h1>

          <div className="space-y-4">
            {articles.length === 0 ? (
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 text-center">
                <p className="text-slate-300">暂无文章，请添加 markdown 文件到 articles/ 目录</p>
              </div>
            ) : (
              articles.map((article, index) => (
                <motion.div
                  key={article.slug}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link href={`/articles/${article.slug}`}>
                    <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 hover:bg-white/20 transition-all cursor-pointer group">
                      <h2 className="text-2xl font-bold text-white mb-2 group-hover:text-purple-300 transition-colors">
                        {article.title}
                      </h2>
                      {article.date && (
                        <p className="text-sm text-slate-400 mb-2">{article.date}</p>
                      )}
                      {article.description && (
                        <p className="text-slate-300">{article.description}</p>
                      )}
                    </div>
                  </Link>
                </motion.div>
              ))
            )}
          </div>
        </motion.div>
      </div>
      <Footer />
    </main>
  );
}

