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
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadArticles = async () => {
      try {
        const response = await fetch('/api/articles');
        if (response.ok) {
          const data = await response.json();
          setArticles(data);
        }
      } catch (error) {
        console.error('Error loading articles:', error);
      } finally {
        setLoading(false);
      }
    };

    loadArticles();
  }, []);

  return (
    <main className="min-h-screen relative pb-20">
      <Header />
      <div className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <h1 className="text-5xl font-bold mb-8 bg-gradient-to-r from-purple-600 via-pink-600 to-orange-600 bg-clip-text text-transparent">
            文章
          </h1>

          <div className="space-y-4">
            {articles.length === 0 ? (
              <div className="bg-white rounded-lg shadow-md p-8 text-center border border-slate-200">
                <p className="text-slate-600">暂无文章，请添加 markdown 文件到 articles/ 目录</p>
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
                    <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-all cursor-pointer group border border-slate-200">
                      <h2 className="text-2xl font-bold text-slate-900 mb-2 group-hover:text-purple-600 transition-colors">
                        {article.title}
                      </h2>
                      {article.date && (
                        <p className="text-sm text-slate-500 mb-2">{article.date}</p>
                      )}
                      {article.description && (
                        <p className="text-slate-600">{article.description}</p>
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
