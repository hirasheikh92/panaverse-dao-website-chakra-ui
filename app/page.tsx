import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "./page.module.css";
import Hero from "./components/hero/Hero";
import Features from "./components/hero/Features";
import Cards from "./components/hero/cards";
import Testimonial from "./components/hero/Testimonial";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Hero />
      <Features />
      <Cards />
      <Testimonial />
    </>
  );
}
