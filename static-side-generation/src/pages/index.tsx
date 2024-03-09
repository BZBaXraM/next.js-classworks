import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <h1>Home Page</h1>

      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odio, itaque
        natus nemo asperiores facere nam a velit possimus optio. Obcaecati aut
        nulla harum blanditiis tempore omnis necessitatibus, perspiciatis odit
        quod. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Incidunt
        nemo ipsum repellendus quia fuga, nulla praesentium iste, voluptatem
        officia a dignissimos. Praesentium, voluptatibus aperiam illo tempore
        vel architecto ad quaerat.
      </p>
    </>
  );
}
