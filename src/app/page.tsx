"use client"
import Image from "next/image";
import Link from 'next/link'

export default function Home() {
  return (
    <main>
      <ul>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/about">Sobre o projeto</Link>
        </li>
        <li>
          <Link href="/profiles">Sobre nós</Link>
        </li>
      </ul>
    </main>
  );
}
