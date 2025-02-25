import type { Metadata } from "next";

import "./globals.css";
import { Fira_Mono,Fira_Sans_Condensed } from "next/font/google";
import Navbar from "@/components/Navbar";

const firaMono = Fira_Mono({
  variable: "--font-fira-mono",
  subsets: ["latin"],
  weight: "400"
});
const firaSansCondensed = Fira_Sans_Condensed({
  variable: "--font-fira-sans-condensed",
  subsets: ["latin"],
  weight: ["400", "700"],
});
export const metadata: Metadata = {
  title: "Jake Bajenting",
  description: "Jake's portfolio website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      
      <body
        className={`  ${firaMono.variable} ${firaSansCondensed.variable} antialiased  text-white`}
      >
        <div className="min-h-screen">
          <Navbar />
        {children}
        </div>
        
      </body>
    </html>
  );
}
