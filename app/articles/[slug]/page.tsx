import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ArticleContent from "./ArticleContent";
import { getArticles } from "@/lib/articles";

// 预生成静态页面
export async function generateStaticParams() {
  const articles = await getArticles();
  return articles.map((article) => ({
    slug: article.slug,
  }));
}

export default function ArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  return (
    <main className="min-h-screen relative pb-20">
      <Header />
      <ArticleContentWrapper params={params} />
      <Footer />
    </main>
  );
}

async function ArticleContentWrapper({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  return <ArticleContent slug={slug} />;
}
