"use client";
import Image from "next/image";
import { integrantes } from "@/utils/mocks";

export default function Home() {
  return (
    <main className="w-full h-full flex flex-col items-center text-slate-300 bg-cyan-950">
      <div className="flex p-5 w-full h-[600px] bg-cyan-800 xl:px-44 justify-between max-md:flex-col">
        <div className="flex flex-col w-1/2 h-full justify-center items-start">
          <span className="font-extrabold text-4xl md:text-6xl">PreviTech</span>
          <span className="text-xl">Utilizamos tecnologias de Machine Learning para desenvolver</span>
          <span className="text-xl">um modelo preditivo capaz prever a evasão de clientes.</span>
        </div>
        <div className="object-cover max-w-[700px]">
          <Image src="/pcnew.png" alt="software" width={"700"} height={24} className="h-full rounded-xl"></Image>
        </div>
      </div>
      <div className="flex">
        <h1 className="text-4xl pt-6 font-bold">Integrantes da Equipe</h1>
      </div>
      <div className="w-full flex justify-center items-center px-44 mt-24">
        <div className="flex justify-center flex-wrap gap-10">
          {integrantes.map((card, index) => (
            <div key={index} className="flex flex-col border-2 border-sky-700 rounded-lg pt-16 px-8 pb-8 relative w-[360px] bg-slate-100 text-zinc-700 mb-14 hover:bg-slate-200">
              <div className="rounded-full w-24 h-24 absolute -top-12 border-4 border-sky-950">
                <Image src={card.imagem} alt="logolinkedin" layout="fill" className="rounded-full object-cover"></Image>
              </div>
              <div className="flex flex-col mb-8">
                <span className="text-2xl font-bold">{card.nome}</span>
                <span className="text-sm font-medium">{card.funcao}</span>
              </div>
              <span className="text-justify">{card.sobre}</span>
              <div className="flex gap-4 w-full justify-center mt-8">
                <a href={card.linkedin} target="_blank" className="cursor-pointer">
                  <Image src="/linkedin-branco.png" alt="logolinkedin" width={30} height={24} className="invert"></Image>
                </a>
                <a href={card.github} target="_blank" className="cursor-pointer">
                  <Image src="/github2.png" alt="logogithub" width={30} height={24} className="invert cursor-pointer"></Image>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
