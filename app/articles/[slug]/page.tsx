import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ArticleContent from "./ArticleContent";

// 预生成静态页面（可选，Vercel 会自动处理）
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
    <main className="min-h-screen relative pb-20">
      <Header />
      <ArticleContent slug={slug} />
      <Footer />
    </main>
  );
}
