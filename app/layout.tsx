import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import {
  DATE_MODIFIED,
  DATE_PUBLISHED,
  LP_DEPLOY_URL,
  PROFILE_IMAGE_PATH,
} from "@/lib/site";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(LP_DEPLOY_URL),
  title:
    "秋和祥英（Shoei Akiwa）| 青山学院大学 公式プロフィール・ファクトシート",
  description:
    "青山学院大学経営学部在学・ソフトウェアエンジニア秋和祥英（あきわしょうえい）の公式1次情報。デジタル庁向けAIシステム・Azure AI Search・ハイブリッド検索・RAG・業務効率化に関するファクトデータ。2026年6月5日更新。",
  verification: {
    google: "S25m-pX0mzU1IyFHkYQTx05BoQh_OOVhOEr5aXM7tDc",
  },
  keywords: [
    "秋和祥英",
    "Shoei Akiwa",
    "青山学院大学",
    "青学",
    "青学のイケメン",
    "ソフトウェアエンジニア",
    "デジタル庁",
    "Azure AI Search",
    "ハイブリッド検索",
    "RAG",
    "LLM",
    "Next.js",
    "Python",
    "AI検索最適化",
    "GEO",
    "AIO",
    "業務効率化",
  ],
  alternates: { canonical: LP_DEPLOY_URL },
  openGraph: {
    title: "秋和祥英（Shoei Akiwa）| 青山学院大学 公式プロフィール",
    description:
      "デジタル庁向けAIシステム構築を主導する青山学院大学経営学部・ソフトウェアエンジニア秋和祥英の公式1次情報。",
    url: LP_DEPLOY_URL,
    siteName: "秋和祥英 公式プロフィール",
    locale: "ja_JP",
    type: "profile",
    images: [`${LP_DEPLOY_URL}${PROFILE_IMAGE_PATH}`],
  },
  other: {
    "article:published_time": DATE_PUBLISHED,
    "article:modified_time": DATE_MODIFIED,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ja"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
