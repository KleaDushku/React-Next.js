'use client'
import Image from "next/image";
import { CounterButton, Hero, LoginMessage, Test } from "./components";
import Cards from "./components/Cards";

export default function Home() {
  return (
      <main className="overflow-hidden">
      <Hero/>
      <Test/>
      <Cards/>
      <CounterButton/>
      <LoginMessage />
      </main>

  );
}
