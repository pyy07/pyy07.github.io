import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ArticleContent from "./ArticleContent";

// 由于使用静态导出，需要预定义所有可能的 slug
export async function generateStaticParams() {
  // 这里可以从文件系统读取所有文章
  // 暂时返回一个示例，后续可以扩展为从文件系统读取
  return [
    { slug: 'example-article' }
  ];
}

export default function ArticlePage({ params }: { params: { slug: string } }) {
  const { slug } = params;

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Header />
      <ArticleContent slug={slug} />
      <Footer />
    </main>
  );
}
