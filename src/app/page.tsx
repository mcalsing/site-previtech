"use client"
import Image from "next/image";
import Link from 'next/link'
import { integrantes } from "@/utils/mocks";

export default function Home() {
  return (
    <main className="w-full h-full flex flex-col items-center text-slate-300 bg-cyan-950">
      <div className="p-5 w-4/5">
        <div className="relative w-full bg-slate-100 rounded-lg">
          <Image src="/software.png" alt="software" width={1000} height={24} className="w-1/2 h-full rounded-lg"></Image>
          <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-l from-cyan-800 from-40% rounded-lg"></div>
          <div className="absolute top-0 right-0 w-1/3 bg">
            <h1 className="text-2xl pt-1 lg:text-5xl lg:pt-14 xl:text-7xl xl:pt-16 ">PreviTech</h1>
            <h1 className="word-break: break-all xl:text-2xl">Sasdfasdfasdfadfsdkfjaldkfjf</h1>
            <h1 className="word-break: break-all xl:text-2xl">Sasdfasdfasdfadfsdkfjaldkfjf</h1>
            <h1 className="word-break: break-all xl:text-2xl">Sasdfasdfasdfadfsdkfjaldkfjf</h1>
          </div>
        </div>
      </div>
      <div className="flex">
        <h1 className="text-4xl pt-6 font-bold">Integrantes da Equipe</h1>
      </div>
      <div className="w-full flex justify-center md:px-44 px-10 flex-wrap">
        <div className="grid justify-items-center p-5 xs:grid-cols-1 lg:grid-cols-3 gap-10 md:grid-cols-2 w-full mt-16">
        {
          integrantes.map((card, index) => (
            <div key={index} className="flex flex-col border-2 border-sky-400 rounded-lg pt-16 px-8 pb-8 relative w-[350px] bg-slate-100 text-zinc-700 mb-14">
              <div className="rounded-full w-24 h-24 absolute object-cover -top-12 border-4 border-sky-950">
                <Image src={card.imagem} alt="logolinkedin" layout="fill" className="rounded-full"></Image>
              </div>
              <span className="text-2xl font-bold">{card.nome}</span>
              <span>{card.funcao}</span>
              <span>{card.sobre}</span>
              <div className="flex gap-4 w-full justify-center">
                <Image src="/linkedin-branco.png" alt="logolinkedin" width={30} height={24} className="invert"></Image>
                <Image src="/github2.png" alt="logogithub" width={30} height={24} className="invert"></Image>
              </div>
            </div>
          ))
        }
        </div>
        

        

      </div>
    </main>
  );
}
