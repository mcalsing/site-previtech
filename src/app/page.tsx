"use client"
import Image from "next/image";
import Link from 'next/link'

export default function Home() {
  return (
    <main className="w-full h-full flex flex-col items-center">
      <div className="p-5 w-4/5">
        <div className="relative w-full bg-slate-100">
          <Image src="/software.png" alt="software" width={1000} height={24} className="w-1/2 h-full rounded-lg"></Image>
          <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-l from-gray-950 from-30% rounded-lg"></div>
          <div className="absolute top-0 right-0 text-slate-300 w-1/3 bg">
            <h1 className="text-2xl pt-1 lg:text-5xl lg:pt-14 xl:text-7xl xl:pt-16 ">PreviTech</h1>
            <h1 className="word-break: break-all xl:text-2xl">Sasdfasdfasdfadfsdkfjaldkfjf</h1>
            <h1 className="word-break: break-all xl:text-2xl">Sasdfasdfasdfadfsdkfjaldkfjf</h1>
            <h1 className="word-break: break-all xl:text-2xl">Sasdfasdfasdfadfsdkfjaldkfjf</h1>
          </div>
        </div>
      </div>
    </main>
  );
}
