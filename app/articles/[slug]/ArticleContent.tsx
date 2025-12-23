"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useEffect, useState } from "react";
import Markdown from "react-markdown";

interface ArticleData {
  slug: string;
  title: string;
  date?: string;
  description?: string;
  content?: string;
}

async function fetchArticleContent(slug: string): Promise<ArticleData | null> {
  try {
    const response = await fetch(`/api/articles/${slug}`);
    if (!response.ok) {
      return null;
    }
    return response.json();
  } catch (error) {
    console.error("Error fetching article:", error);
    return null;
  }
}

export default function ArticleContent({ slug }: { slug: string }) {
  const [article, setArticle] = useState<ArticleData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadArticle = async () => {
      try {
        const data = await fetchArticleContent(slug);
        setArticle(data);
      } catch (error) {
        console.error("Error loading article:", error);
      } finally {
        setLoading(false);
      }
    };

    loadArticle();
  }, [slug]);

  if (loading) {
    return (
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <p className="text-center text-slate-600">加载中...</p>
        </div>
      </div>
    );
  }

  if (!article) {
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
            className="inline-flex items-center text-purple-600 hover:text-purple-700 mb-8 transition-colors"
          >
            ← 返回文章列表
          </Link>

          <article className="bg-white rounded-lg shadow-md p-8 border border-slate-200 text-center">
            <h1 className="text-4xl font-bold text-slate-900 mb-4">文章未找到</h1>
            <p className="text-slate-600">抱歉，该文章不存在。</p>
          </article>
        </motion.div>
      </div>
    );
  }

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
          className="inline-flex items-center text-purple-600 hover:text-purple-700 mb-8 transition-colors"
        >
          ← 返回文章列表
        </Link>

        <article className="bg-white rounded-lg shadow-md p-8 border border-slate-200">
          <h1 className="text-4xl font-bold text-slate-900 mb-4">{article.title}</h1>
          {article.date && (
            <p className="text-sm text-slate-500 mb-6">{article.date}</p>
          )}
          {article.description && (
            <p className="text-lg text-slate-600 mb-8">{article.description}</p>
          )}

          {article.content && (
            <div className="prose prose-slate max-w-none">
              <Markdown
                components={{
                  h1: ({ node, ...props }: any) => (
                    <h1 className="text-3xl font-bold mt-8 mb-4 text-slate-900" {...props} />
                  ),
                  h2: ({ node, ...props }: any) => (
                    <h2 className="text-2xl font-bold mt-6 mb-3 text-slate-900" {...props} />
                  ),
                  h3: ({ node, ...props }: any) => (
                    <h3 className="text-xl font-bold mt-4 mb-2 text-slate-900" {...props} />
                  ),
                  p: ({ node, ...props }: any) => (
                    <p className="mb-4 text-slate-700 leading-relaxed" {...props} />
                  ),
                  ul: ({ node, ...props }: any) => (
                    <ul className="list-disc list-inside mb-4 text-slate-700" {...props} />
                  ),
                  ol: ({ node, ...props }: any) => (
                    <ol className="list-decimal list-inside mb-4 text-slate-700" {...props} />
                  ),
                  li: ({ node, ...props }: any) => (
                    <li className="mb-2" {...props} />
                  ),
                  code: ({ node, inline, ...props }: any) =>
                    inline ? (
                      <code className="bg-slate-100 px-2 py-1 rounded text-sm font-mono text-slate-900" {...props} />
                    ) : (
                      <code className="block bg-slate-100 p-4 rounded my-4 overflow-x-auto text-slate-900 font-mono text-sm" {...props} />
                    ),
                  pre: ({ node, ...props }: any) => (
                    <pre className="bg-slate-900 text-slate-100 p-4 rounded-lg overflow-x-auto my-4 font-mono text-sm" {...props} />
                  ),
                  blockquote: ({ node, ...props }: any) => (
                    <blockquote className="border-l-4 border-purple-600 pl-4 italic my-4 text-slate-600" {...props} />
                  ),
                  a: ({ node, ...props }: any) => (
                    <a className="text-purple-600 hover:text-purple-700 underline" {...props} />
                  ),
                  table: ({ node, ...props }: any) => (
                    <table className="min-w-full border-collapse border border-slate-300 my-4" {...props} />
                  ),
                  th: ({ node, ...props }: any) => (
                    <th className="border border-slate-300 bg-slate-100 p-2" {...props} />
                  ),
                  td: ({ node, ...props }: any) => (
                    <td className="border border-slate-300 p-2" {...props} />
                  ),
                }}
              >
                {article.content}
              </Markdown>
            </div>
          )}
        </article>
      </motion.div>
    </div>
  );
}
