import { IS_DEV, SITE_DESCRIPTION, SITE_TITLE } from "@/lib/constants";
import { GoogleAnalytics } from "@next/third-parties/google";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: SITE_TITLE,
  description: SITE_DESCRIPTION,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" data-theme="corporate">
      <body className={inter.className}>{children}</body>
      {!IS_DEV && <GoogleAnalytics gaId="G-GEHGH1RSLY" />}
    </html>
  );
}
