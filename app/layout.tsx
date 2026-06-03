import type { Metadata } from "next";
import { Inter, Roboto_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const robotoMono = Roboto_Mono({
  variable: "--font-roboto-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "YUVANESH PORTFOLIO",
  description: "Portfolio of Yuvanesh P - Software Developer & AI Enthusiast",
  appleWebApp: {
    capable: true,
    statusBarStyle: 'default',
    title: 'Yuvanesh Portfolio',
  },
};

export const viewport = {
  themeColor: '#121212',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${robotoMono.variable} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full flex flex-col no-scrollbar font-sans">{children}</body>
    </html>
  );
}
