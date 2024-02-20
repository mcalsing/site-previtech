"use client"
import Image from "next/image";
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUsersLine } from '@fortawesome/free-solid-svg-icons';
import { faHouse } from '@fortawesome/free-solid-svg-icons';
import { faCircleInfo } from '@fortawesome/free-solid-svg-icons';

export default function About() {
  return (
    <main className="flex flex-col items-center bg-blue-950 text-sky-400">
      <h1 className="text-3xl pt-6">Modelo Preditivo de Evasão de Clientes</h1>
    </main>
/*     <div className="fixed flex flex-col top-10 left-2 w-14 hover:w-64 md:w-64 h-full">
      <div className="flex flex-col justify-between">
        <ul className="flex flex-col py-4 space-y-1">
          <li>
            <a href="#" className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-cyan-500 text-gray-600 hover:text-gray-800 border-l-2">
              <FontAwesomeIcon icon={faHouse}/>
              <span className="inline-flex justify-center items-center ml-4">
              </span>
              <span className="ml-2 text-sm tracking-wide truncate">Início</span>
            </a>
          </li>
        </ul>
      </div>
    </div> */
  );
}
