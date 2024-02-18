"use client"
import Image from "next/image";

export default function Home() {

  const testee = () => {
    alert("Testeee")
  }

  return (
    <main className="flex flex-col items-center bg-blue-950 text-sky-400">
      <div className="flex justify-between">
        <Image src="/circular.jpeg" alt="logo" width={100} height={24}></Image>
        <h1 className="text-3xl pt-6">Modelo Preditivo de Evasão de Clientes</h1>
      </div>
      <div className="grid justify-items-end p-10 space-y-9">

        <div className="border-2 border-sky-700 w-full p-5 rounded-xl">
          <h1 className="flex justify-center text-2xl">Dyogo</h1>
          <div className="flex justify-between p-5">
            <p className="word-break: break-all text-xl">aasdsdfsasdfasdfsdfdfdsafsdfasdfasdfasdfasdfasdfasdfasdfasdffsdfsdfsdfsdfsdfssdfsdfsdfsdfsdfsdfsdfsdfsdffsdfsdfdfsdffsfsdfsdfsdsfsdfsdflkdfjalkdjflk</p>
            <Image src="/Dyogo.jpeg" alt="dyogo" width={100} height={24} className="hover:animate-bounce"></Image>
          </div>
          <div className="flex flex-row-reverse space-x-6 space-x-reverse pr-7">
            <a href="//github.com/DyogoMiguel"><Image src="/github2.png" alt="dyogo" width={30} height={24}></Image></a>
            <a href="//linkedin.com/in/dyogo-miguel-5a44a5236/"><Image src="/linkedin-branco.png" alt="dyogo" width={30} height={24}></Image></a>
          </div>
        </div>

        <div className="border-2 border-sky-700 w-full p-5 rounded-xl">
          <h1 className="flex justify-center text-2xl">João</h1>
          <div className="flex justify-between p-5">
            <p className="word-break: break-all text-xl">aasdsdfsasdfasdfsdfdfdsafsdfasdfasdfasdfasdfasdfasdfasdfasdffsdfsdfsdfsdfsdfssdfsdfsdfsdfsdfsdfsdfsdfsdffsdfsdfdfsdffsfsdfsdfsdsfsdfsdflkdfjalkdjflk</p>
            <Image src="/Joao.jfif" alt="joao" width={100} height={24} className="hover:animate-spin"></Image>
          </div>
          <div className="flex flex-row-reverse space-x-6 space-x-reverse pr-7">
            <a href="//github.com/Joao-TeKa"><Image src="/github2.png" alt="dyogo" width={30} height={24}></Image></a>
            <a href="//linkedin.com/in/jo%C3%A3o-guilherme-ropke-b6490725a/"><Image src="/linkedin-branco.png" alt="dyogo" width={30} height={24}></Image></a>
          </div>
        </div>

        <div className="border-2 border-sky-700 w-full p-5 rounded-xl">
          <h1 className="flex justify-center text-2xl">León</h1>
          <div className="flex justify-between p-5">
            <p className="word-break: break-all text-xl">aasdsdfsasdfasdfsdfdfdsafsdfasdfasdfasdfasdfasdfasdfasdfasdffsdfsdfsdfsdfsdfssdfsdfsdfsdfsdfsdfsdfsdfsdffsdfsdfdfsdffsfsdfsdfsdsfsdfsdflkdfjalkdjflk</p>
            <Image src="/Leon.jpeg" alt="leon" width={100} height={24} className="hover:animate-pulse"></Image>
          </div>
          <div className="flex flex-row-reverse space-x-6 space-x-reverse pr-7">
            <a href="//github.com/lnmaximos"><Image src="/github2.png" alt="dyogo" width={30} height={24}></Image></a>
            <a href="//linkedin.com/in/leonmaximos"><Image src="/linkedin-branco.png" alt="dyogo" width={30} height={24}></Image></a>
          </div>
        </div>

        <div className="border-2 border-sky-700 w-full p-5 rounded-xl">
          <h1 className="flex justify-center text-2xl">Marcelo</h1>
          <div className="flex justify-between p-5">
            <p className="word-break: break-all text-xl">aasdsdfsasdfasdfsdfdfdsafsdfasdfasdfasdfasdfasdfasdfasdfasdffsdfsdfsdfsdfsdfssdfsdfsdfsdfsdfsdfsdfsdfsdffsdfsdfdfsdffsfsdfsdfsdsfsdfsdflkdfjalkdjflk</p>
            <Image src="/Marcelo.png" alt="marcelo" width={100} height={24} className="hover:animate-pulse"></Image>
          </div>
          <div className="flex flex-row-reverse space-x-6 space-x-reverse pr-7">
            <a href="//github.com/mcalsing"><Image src="/github2.png" alt="dyogo" width={30} height={24}></Image></a>
            <a href="//linkedin.com/in/marcelocalsing/"><Image src="/linkedin-branco.png" alt="dyogo" width={30} height={24}></Image></a>
          </div>
        </div>

        <div className="border-2 border-sky-700 w-full p-5 rounded-xl">
          <h1 className="flex justify-center text-2xl">Sirlon</h1>
          <div className="flex justify-between p-5">
            <p className="word-break: break-all text-xl">aasdsdfsasdfasdfsdfdfdsafsdfasdfasdfasdfasdfasdfasdfasdfasdffsdfsdfsdfsdfsdfssdfsdfsdfsdfsdfsdfsdfsdfsdffsdfsdfdfsdffsfsdfsdfsdsfsdfsdflkdfjalkdjflk</p>
            <Image src="/Sirlon.jpeg" alt="sirlon" width={100} height={24} className="hover:animate-spin"></Image>
          </div>
          <div className="flex flex-row-reverse space-x-6 space-x-reverse pr-7">
            <a href="//github.com/sirlonjr"><Image src="/github2.png" alt="dyogo" width={30} height={24}></Image></a>
            <a href="//linkedin.com/in/sirlon-brehm-junior-2881b0205/"><Image src="/linkedin-branco.png" alt="dyogo" width={30} height={24}></Image></a>
          </div>
        </div>

        <div className="border-2 border-sky-700 w-full p-5 rounded-xl">
          <h1 className="flex justify-center text-2xl">Yean</h1>
          <div className="flex justify-between p-5">
            <p className="word-break: break-all text-xl">aasdsdfsasdfasdfsdfdfdsafsdfasdfasdfasdfasdfasdfasdfasdfasdffsdfsdfsdfsdfsdfssdfsdfsdfsdfsdfsdfsdfsdfsdffsdfsdfdfsdffsfsdfsdfsdsfsdfsdflkdfjalkdjflk</p>
            <Image src="/Yean.jpeg" alt="yean" width={100} height={24} className="hover:animate-bounce"></Image>
          </div>
          <div className="flex flex-row-reverse space-x-6 space-x-reverse pr-7">
            <a href="//github.com/yeanjy"><Image src="/github2.png" alt="dyogo" width={30} height={24}></Image></a>
            <a href="//linkedin.com/in/yean-jy-chen-960835268/"><Image src="/linkedin-branco.png" alt="dyogo" width={30} height={24}></Image></a>
          </div>
        </div>

      </div>
    </main>
  );
}
