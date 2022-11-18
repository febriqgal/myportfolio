/* eslint-disable @next/next/no-img-element */
import Head from "next/head";
import Link from "next/link";
import { useEffect, useState } from "react";
import styles from "../styles/Home.module.css";
import Clap from "../public/Clap.png";
import HandShake from "../public/Hand Shake.png";
import Walk from "../public/Walk.png";
import Write from "../public/Write.png";
import Pasisidev from "../public/pasisiadev.png";
import Febri from "../public/febri.png";
import { motion, useScroll, useSpring } from "framer-motion";
import Image from "next/image";

export default function Home() {
  const [clientWindowHeight, setClientWindowHeight] = useState("");
  const [backgroundTransparacy, setBackgroundTransparacy] = useState(0);
  const [padding, setPadding] = useState(10);
  const [boxShadow, setBoxShadow] = useState(0);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  });

  const handleScroll = () => {
    setClientWindowHeight(window.scrollY);
  };

  useEffect(() => {
    let backgroundTransparacyVar = clientWindowHeight / 600;
    if (backgroundTransparacyVar < 1) {
      let paddingVar = 20 + backgroundTransparacyVar * 5;
      let boxShadowVar = backgroundTransparacyVar * 0.1;
      setBackgroundTransparacy(backgroundTransparacyVar);
      setPadding(paddingVar);
      setBoxShadow(boxShadowVar);
    }
  }, [clientWindowHeight]);

  return (
    <div className={`bg-gradient-to-r from-red-500 via-blue-500 to-yellow-500`}>
      <motion.div
        className="progress-bar fixed rounded-xl bg-slate-50 bottom-0 left-0 right-0 h-1 z-[999] origin-top"
        style={{ scaleX }}
      />
      <Head>
        <title>Febriqgal Purnama</title>
        <meta name="description" content="Febriqgal" />
        <link rel="icon" href="/icon.png" />
      </Head>

      <nav
        className="backdrop-blur-sm w-screen hidden lg:fixed lg:block z-50"
        style={{
          padding: `${padding}px 0px`,
          boxShadow: `rgb(0 0 0 / ${boxShadow}) 0px 0px 20px 6px`,
        }}
      >
        <div className={`flex justify-between place-items-center px-24`}>
          <div className="flex place-items-center">
            <Image src={Pasisidev} className="w-[150px] mr-2" alt={"dasdas"} />
          </div>

          <div className={`flex ${`text-slate-50 font-semibold`}`}>
            <a
              href={"#home"}
              className="mr-8 hover:underline hover:underline-offset-8"
            >
              Home
            </a>
            <a
              href={"#project"}
              className="mr-8 hover:underline hover:underline-offset-8"
            >
              Project
            </a>
            <a
              href={"#team"}
              className="mr-8 hover:underline hover:underline-offset-8"
            >
              Team
            </a>
            <a
              href={"#contact"}
              className="mr-8 hover:underline hover:underline-offset-8"
            >
              Contact
            </a>
          </div>
        </div>
      </nav>
      <nav
        className="fixed backdrop-blur-sm place-items-center lg:hidden flex"
        style={{
          padding: `${padding}px 0px`,
          boxShadow: `rgb(0 0 0 / ${boxShadow}) 0px 0px 20px 6px`,
        }}
      >
        <div className="h-5 bg-red-500 w-5 absolute left-5">dd</div>
        <div className={`w-screen mx-auto bg-center flex justify-center`}>
          <Image src={Pasisidev} className="w-[150px] mr-2" alt={"dasdas"} />
        </div>
      </nav>
      <div>
        <section id="home" className={styles.main}>
          <Image width={350} src={Clap} alt={"Clap"}></Image>
          <h1>Home</h1>
        </section>
        <section id="project" className={styles.main}>
          <Image width={350} src={HandShake} alt={"Clap"}></Image>
          <h1>Project</h1>
        </section>
        <section id="team" className={styles.main}>
          <div className="w-[200px] rounded-full bg-red-600">
            <Image
              className="rounded-b-full hover:rounded-b-none hover:scale-125 hover:-translate-y-3 duration-1000"
              src={Febri}
              alt={"Clap"}
            />
          </div>
          <h1 className={`mt-4 text-lg font-bold ${styles.jarak}`}>
            Febriqgal Purnama
          </h1>
          <h1 className="text-sm text-slate-200">Software Engineer</h1>
        </section>
        <section id="contact" className={styles.main}>
          <Image width={350} src={Write} alt={"Clap"}></Image>
          <h1>Contact</h1>
        </section>
      </div>
    </div>
  );
}
