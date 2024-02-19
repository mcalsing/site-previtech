"use client"
import Image from "next/image";
import Link from 'next/link'

export default function About() {
  return (
    <main className="">
      <ul>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          Escrever sobre o modelo preditivo
        </li>
      </ul>
    </main>
  );
}
