import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";


export const metadata: Metadata = {
  title: "CodeFlix",
  description: "Watch TV Shows Online, Watch Movies Online",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className='scrollbar-hide bg-black text-white'>{children}</body>
    </html>
  );
}
