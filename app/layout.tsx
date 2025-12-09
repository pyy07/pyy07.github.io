import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "LukePan",
  description: "LukePan的个人网站",
  keywords: ["LukePan", "个人网站"],
  authors: [{ name: "LukePan" }],
  openGraph: {
    title: "LukePan",
    description: "LukePan的个人网站",
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

