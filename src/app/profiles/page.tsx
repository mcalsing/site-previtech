"use client"
import Image from "next/image";
import Link from 'next/link'

export default function Profiles() {
  return (
    <main className="flex flex-col items-center bg-gradient-to-b from-sky-950 from-20% to-sky-900 text-slate-300 h-full">
      <div className="flex">
        <h1 className="text-3xl pt-6">Integrantes da Equipe</h1>
      </div>
      <div className="grid justify-items-end p-5">

        <div className="flex gap-3 p-3">
          <div className="border-2 border-sky-700 w-full p-2 rounded-xl">
            <h1 className="flex justify-center text-2xl">Dyogo</h1>
            <div className="flex p-5">
              <Image src="/dyogo2.jpeg" alt="dyogo" width={100} height={24} className="rounded-2xl"></Image>
              <p className="word-break: break-all text-xl pl-5">aasdsdfsasdfasdfsdfdfdsafsdfasdfasdfasdfasdfasdfasdfasdfasdffsdfsdfsdfsdfsdfssdfsdfsdfsdfsdfsdfsdfsdfsdffsdfsdfdfsdffsfsdfsdfsdsfsdfsdflkdfjalkdjflk</p>
            </div>
            <div className="flex space-x-6 pl-7">
              <a href="//github.com/DyogoMiguel"><Image src="/github2.png" alt="dyogo" width={30} height={24}></Image></a>
              <a href="//linkedin.com/in/dyogo-miguel/"><Image src="/linkedin-branco.png" alt="dyogo" width={30} height={24}></Image></a>
            </div>
          </div>
          <div className="border-2 border-sky-700 w-full p-2 rounded-xl">
            <h1 className="flex justify-center text-2xl">Marcelo</h1>
            <div className="flex p-5">
              <p className="word-break: break-all text-xl pr-5">aasdsdfsasdfasdfsdfdfdsafsdfasdfasdfasdfasdfasdfasdfasdfasdffsdfsdfsdfsdfsdfssdfsdfsdfsdfsdfsdfsdfsdfsdffsdfsdfdfsdffsfsdfsdfsdsfsdfsdflkdfjalkdjflk</p>
              <Image src="/marcelo2.jpeg" alt="marcelo" width={100} height={24} className="rounded-2xl"></Image>
            </div>
            <div className="flex flex-row-reverse space-x-6 space-x-reverse pr-7">
              <a href="//github.com/mcalsing"><Image src="/github2.png" alt="dyogo" width={30} height={24}></Image></a>
              <a href="//linkedin.com/in/marcelocalsing/"><Image src="/linkedin-branco.png" alt="marcelo" width={30} height={24}></Image></a>
            </div>
          </div>
        </div>

        <div className="flex gap-3 p-3">
          <div className="border-2 border-sky-700 w-full p-2 rounded-xl">
            <h1 className="flex justify-center text-2xl">León</h1>
            <div className="flex p-5">
              <Image src="/leon2.jpeg" alt="leon" width={100} height={24} className="rounded-2xl"></Image>
              <p className="word-break: break-all text-xl pl-5">aasdsdfsasdfasdfsdfdfdsafsdfasdfasdfasdfasdfasdfasdfasdfasdffsdfsdfsdfsdfsdfssdfsdfsdfsdfsdfsdfsdfsdfsdffsdfsdfdfsdffsfsdfsdfsdsfsdfsdflkdfjalkdjflk</p>
            </div>
            <div className="flex space-x-6 pl-7">
              <a href="//github.com/lnmaximos"><Image src="/github2.png" alt="dyogo" width={30} height={24}></Image></a>
              <a href="//linkedin.com/in/leonmaximos"><Image src="/linkedin-branco.png" alt="leon" width={30} height={24}></Image></a>
            </div>
          </div>
          <div className="border-2 border-sky-700 w-full p-2 rounded-xl">
            <h1 className="flex justify-center text-2xl">João</h1>
            <div className="flex p-5">
              <p className="word-break: break-all text-xl pr-5">aasdsdfsasdfasdfsdfdfdsafsdfasdfasdfasdfasdfasdfasdfasdfasdffsdfsdfsdfsdfsdfssdfsdfsdfsdfsdfsdfsdfsdfsdffsdfsdfdfsdffsfsdfsdfsdsfsdfsdflkdfjalkdjflk</p>
              <Image src="/joao2.png" alt="joao" width={100} height={24} className="rounded-2xl"></Image>
            </div>
            <div className="flex flex-row-reverse space-x-6 space-x-reverse pr-7">
              <a href="//github.com/Joao-TeKa"><Image src="/github2.png" alt="dyogo" width={30} height={24}></Image></a>
              <a href="//linkedin.com/in/guilhermeropke/"><Image src="/linkedin-branco.png" alt="joao" width={30} height={24}></Image></a>
            </div>
          </div>
        </div>

        <div className="flex gap-3 p-3">
          <div className="border-2 border-sky-700 w-full p-2 rounded-xl">
            <h1 className="flex justify-center text-2xl">Sirlon</h1>
            <div className="flex p-5">
              <Image src="/sirlon2.jpeg" alt="sirlon" width={100} height={24} className="rounded-2xl"></Image>
              <p className="word-break: break-all text-xl pl-5">aasdsdfsasdfasdfsdfdfdsafsdfasdfasdfasdfasdfasdfasdfasdfasdffsdfsdfsdfsdfsdfssdfsdfsdfsdfsdfsdfsdfsdfsdffsdfsdfdfsdffsfsdfsdfsdsfsdfsdflkdfjalkdjflk</p>
            </div>
            <div className="flex space-x-6 pl-7">
              <a href="//github.com/sirlonjr"><Image src="/github2.png" alt="dyogo" width={30} height={24}></Image></a>
              <a href="//linkedin.com/in/sirlonbrehm/"><Image src="/linkedin-branco.png" alt="sirlon" width={30} height={24}></Image></a>
            </div>
          </div>
          <div className="border-2 border-sky-700 w-full p-2 rounded-xl">
            <h1 className="flex justify-center text-2xl">Yean</h1>
            <div className="flex p-5">
              <p className="word-break: break-all text-xl pr-5">aasdsdfsasdfasdfsdfdfdsafsdfasdfasdfasdfasdfasdfasdfasdfasdffsdfsdfsdfsdfsdfssdfsdfsdfsdfsdfsdfsdfsdfsdffsdfsdfdfsdffsfsdfsdfsdsfsdfsdflkdfjalkdjflk</p>
              <Image src="/yean2.jpeg" alt="yean" width={100} height={24} className="rounded-2xl"></Image>
            </div>
            <div className="flex flex-row-reverse space-x-6 space-x-reverse pr-7">
              <a href="//github.com/yeanjy"><Image src="/github2.png" alt="dyogo" width={30} height={24}></Image></a>
              <a href="//linkedin.com/in/yeanjychen/"><Image src="/linkedin-branco.png" alt="yean" width={30} height={24}></Image></a>
            </div>
          </div>
        </div>

      </div>
    </main>
  );
}