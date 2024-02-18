"use client"
import Image from "next/image";

export default function Home() {

  const testee = () => {
    alert("Testeee")
  }

  return (
    <main className="flex flex-col items-center bg-blue-950 text-sky-400">
      <h1 className="text-3xl">Modelo Preditivo de Evasão de Clientes</h1>
      <div className="grid justify-items-end p-10 space-y-9">
        <div className="border-4 border-sky-700 w-full p-5 rounded-xl">
          <h1 className="flex justify-center text-2xl">Dyogo</h1>
          <div className="flex justify-between p-5">
            <p className="word-break: break-all text-2xl">aasdsdfsasdfasdfsdfdfdsafsdfasdfasdfasdfasdfasdfasdfasdfasdffsdfsdfsdfsdfsdfssdfsdfsdfsdfsdfsdfsdfsdfsdffsdfsdfdfsdffsfsdfsdfsdsfsdfsdflkdfjalkdjflk</p>
            <Image src="/Dyogo.jpeg" alt="dyogo" width={100} height={24} className="hover:animate-bounce"></Image>
          </div>
        </div>
        <div className="border-4 border-sky-700 w-full p-5 rounded-xl">
          <h1 className="flex justify-center text-2xl">João</h1>
          <div className="flex justify-between p-5">
            <p className="word-break: break-all text-2xl">aasdsdfsasdfasdfsdfdfdsafsdfasdfasdfasdfasdfasdfasdfasdfasdffsdfsdfsdfsdfsdfssdfsdfsdfsdfsdfsdfsdfsdfsdffsdfsdfdfsdffsfsdfsdfsdsfsdfsdflkdfjalkdjflk</p>
            <Image src="/Joao.jfif" alt="dyogo" width={100} height={24} className="hover:animate-spin"></Image>
          </div>
        </div>
        <div className="border-4 border-sky-700 w-full p-5 rounded-xl">
          <h1 className="flex justify-center text-2xl">León</h1>
          <div className="flex justify-between p-5">
            <p className="word-break: break-all text-2xl">aasdsdfsasdfasdfsdfdfdsafsdfasdfasdfasdfasdfasdfasdfasdfasdffsdfsdfsdfsdfsdfssdfsdfsdfsdfsdfsdfsdfsdfsdffsdfsdfdfsdffsfsdfsdfsdsfsdfsdflkdfjalkdjflk</p>
            <Image src="/Leon.jpeg" alt="dyogo" width={100} height={24} className="hover:animate-pulse"></Image>
          </div>
        </div>

        <div className="border-4 border-sky-700 w-full p-5 rounded-xl">
          <h1 className="flex justify-center text-2xl">Marcelo</h1>
          <div className="flex justify-between p-5">
            <p className="word-break: break-all text-2xl">aasdsdfsasdfasdfsdfdfdsafsdfasdfasdfasdfasdfasdfasdfasdfasdffsdfsdfsdfsdfsdfssdfsdfsdfsdfsdfsdfsdfsdfsdffsdfsdfdfsdffsfsdfsdfsdsfsdfsdflkdfjalkdjflk</p>
            <Image src="/Marcelo.png" alt="dyogo" width={100} height={24} className="hover:animate-pulse"></Image>
          </div>
        </div>

        <div className="border-4 border-sky-700 w-full p-5 rounded-xl">
          <h1 className="flex justify-center text-2xl">Sirlon</h1>
          <div className="flex justify-between p-5">
            <p className="word-break: break-all text-2xl">aasdsdfsasdfasdfsdfdfdsafsdfasdfasdfasdfasdfasdfasdfasdfasdffsdfsdfsdfsdfsdfssdfsdfsdfsdfsdfsdfsdfsdfsdffsdfsdfdfsdffsfsdfsdfsdsfsdfsdflkdfjalkdjflk</p>
            <Image src="/Sirlon.jpeg" alt="dyogo" width={100} height={24} className="hover:animate-spin"></Image>
          </div>
        </div>

        <div className="border-4 border-sky-700 w-full p-5 rounded-xl">
          <h1 className="flex justify-center text-2xl">Yean</h1>
          <div className="flex justify-between p-5">
            <p className="word-break: break-all text-2xl">aasdsdfsasdfasdfsdfdfdsafsdfasdfasdfasdfasdfasdfasdfasdfasdffsdfsdfsdfsdfsdfssdfsdfsdfsdfsdfsdfsdfsdfsdffsdfsdfdfsdffsfsdfsdfsdsfsdfsdflkdfjalkdjflk</p>
            <Image src="/Yean.jpeg" alt="dyogo" width={100} height={24} className="hover:animate-bounce"></Image>
          </div>
        </div>
      </div>
    </main>
  );
}
