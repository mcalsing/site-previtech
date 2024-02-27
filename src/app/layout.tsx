import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Image from "next/image";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Modelo Preditivo",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <header>
          <nav className="flex justify-evenly items-center bg-zinc-800 p-2">
            <div className="">
              <Image src="/logo3.png" alt="logo" width={250} height={24}></Image>
            </div>
            <div className="">
              <div className="">
                <a href="/" className="sm:text-lg md:text-xl lg:text-2xl xl:text-1xl text-slate-300 mr-4 text-sm">
                  | Home |
                </a>
                <a href="/about" className="sm:text-lg md:text-xl lg:text-2xl xl:text-1xl text-slate-300 mr-4 text-sm">
                  Projeto |
                </a>
                <a href="//lnmaximos.github.io/previtech-web/" target="_blank" className="sm:text-lg md:text-xl lg:text-2xl xl:text-1xl text-slate-300 mr-4 text-sm">
                  Modelo online |
                </a>
              </div>
            </div>
          </nav>
        </header>
      {children}</body>
    </html>
  );
}