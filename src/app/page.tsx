"use client";
import Image from "next/image";
import Link from "next/link";
import { integrantes } from "@/utils/mocks";

export default function Home() {
  return (
    <main className="w-full h-full flex flex-col items-center text-slate-300 bg-slate-200">
      <div className="page flex p-5 h-[600px] w-full xl:px-44 justify-between max-md:flex-col">
        <div className="flex flex-col w-11/12 md:w-1/2 h-full justify-center items-start">
          <span className="font-extrabold text-4xl md:text-6xl mb-2 text-slate-200">PreviTech</span>
          <span className="text-xl text-slate-300">Utilizamos tecnologias de Machine Learning para desenvolver um modelo capaz prever a evasão de clientes.</span>
        </div>
        <div className="object-cover max-w-[700px]">
          <Image src="/pcnew.png" alt="software" width={"950"} height={24} className="h-full rounded-xl"></Image>
        </div>
      </div>
      <div className="flex">
        <h1 className="text-4xl pt-6 mr-3 ml-3 font-bold text-zinc-800 text-center">Integrantes da Equipe</h1>
      </div>
      <div className="w-full flex justify-center items-center px-44 mt-24">
        <div className="flex justify-center flex-wrap gap-10">
          {integrantes.map((card, index) => (
            <div key={index} className="card flex flex-col rounded-lg pt-16 px-8 pb-8 relative w-[360px] bg-slate-100 text-zinc-800 mb-14 hover:bg-slate-200">
              <div className="rounded-full w-24 h-24 absolute -top-12 border-4 border-blue-950">
                <Image src={card.imagem} alt="logolinkedin" layout="fill" className="rounded-full object-cover"></Image>
              </div>
              <div className="flex flex-col mb-8">
                <span className="text-2xl font-bold">{card.nome}</span>
                <span className="text-sm font-medium">{card.funcao}</span>
              </div>
              <span className="text-justify">{card.sobre}</span>
              <div className="flex gap-4 w-full justify-center mt-8">
                <a href={card.linkedin} target="_blank" className="cursor-pointer">
                  <Image src="/linkedin-branco.png" alt="logolinkedin" width={30} height={24} className="invert hover:w-8"></Image>
                </a>
                <a href={card.github} target="_blank" className="cursor-pointer">
                  <Image src="/github2.png" alt="logogithub" width={30} height={24} className="invert cursor-pointer hover:w-8"></Image>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="footer w-full  bottom-0 bg-zinc-900 p-3">
        <h2 className="flex justify-center text-white">2024 © Todos os Direitos Reservados</h2>
      </div>
    </main>
  );
}