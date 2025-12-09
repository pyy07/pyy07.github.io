import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import BackgroundCarousel from "@/components/BackgroundCarousel";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "LukePan - 个人网站",
  description: "LukePan的个人网站",
  keywords: ["LukePan", "个人网站"],
  authors: [{ name: "LukePan" }],
  openGraph: {
    title: "LukePan - 职业生涯",
    description: "LukePan的个人网站",
    url: "https://pyy07.github.io",
    siteName: "LukePan",
    images: [
      {
        url: "https://pyy07.github.io/og-image.jpg", // Replace with actual image
        width: 1200,
        height: 630,
        alt: "LukePan - 职业生涯",
      },
    ],
    locale: "zh_CN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "LukePan",
    description: "LukePan的个人网站",
    creator: "@LukePan", // Replace with actual Twitter handle
    images: ["https://pyy07.github.io/og-image.jpg"], // Replace with actual image
  },
  metadataBase: new URL("https://pyy07.github.io"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <body className={inter.className}>
        <BackgroundCarousel />
        {children}
      </body>
    </html>
  );
}

