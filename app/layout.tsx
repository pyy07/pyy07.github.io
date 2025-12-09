import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "LukePan - 职业生涯",
  description: "LukePan的个人职业展示网站，展示从2007年至今的职业发展历程",
  keywords: ["LukePan", "职业生涯", "职业发展", "个人网站"],
  authors: [{ name: "LukePan" }],
  openGraph: {
    title: "LukePan - 职业生涯",
    description: "LukePan的个人职业展示网站",
    type: "website",
    locale: "zh_CN",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}

