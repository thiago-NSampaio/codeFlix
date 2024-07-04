import type { Metadata } from "next";
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
    <html className='scrollbar-hide' lang="en">
      <body className='bg-[#141414] text-white'>{children}</body>
    </html>
  );
}
