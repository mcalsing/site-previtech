"use client"
import Image from "next/image";

export default function Home() {

  const testee = () => {
    alert("Testeee")
  }

  return (
    <main className="flex flex-col items-center">
      <h1 className="text-3xl">Modelo Preditivo de Evasao de Clientes</h1>
      <div className="grid justify-items-end p-10 space-y-9">
        <div className="border-4 border-sky-700 w-full p-5 rounded-xl">
          <h1 className="flex justify-center text-2xl">Dyogo</h1>
          <div className="flex justify-between border-4 border-sky-300 p-5">
            <p className="word-break: break-all text-2xl">aasdsdfsasdfasdfsdfdfdsafsdfasdfasdfasdfasdfasdfasdfasdfasdffsdfsdfsdfsdfsdfssdfsdfsdfsdfsdfsdfsdfsdfsdffsdfsdfdfsdffsfsdfsdfsdsfsdfsdflkdfjalkdjflk</p>
            <button className="w-auto" onClick={() => testee()}>
              <Image src="/Dyogo.jpeg" alt="dyogo" width={100} height={24} className="hover:animate-bounce"></Image>
            </button>
          </div>
        </div>




        <div className="border-4 border-sky-700 w-72 h-72">
          <Image src="/Joao.jfif" alt="dyogo" width={100} height={24}></Image>
        </div>
        <div className="border-4 border-sky-700 w-72 h-72">
          <Image src="/Leon.jpeg" alt="dyogo" width={100} height={24}></Image>
        </div>
        <div className="border-4 border-sky-700 w-72 h-72">
          <Image src="/Marcelo.png" alt="dyogo" width={100} height={24}></Image>
        </div>
        <div className="border-4 border-sky-700 w-72 h-72">
          <Image src="/Sirlon.jpeg" alt="dyogo" width={100} height={24}></Image>
        </div>
        <div className="border-4 border-sky-700 w-72 h-72">
          <Image src="/Yean.jpeg" alt="dyogo" width={100} height={24}></Image>
        </div>
      </div>
    </main>
  );
}
