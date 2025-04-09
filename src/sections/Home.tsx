"use client";
import { motion } from "framer-motion";
import earthImage from "@/assets/images/earth.png";
import marsImage from "@/assets/images/mars.png";
import jupiterImage from "@/assets/images/jupiter.png";
import StarIcon from "@/assets/icons/star.svg";
import SparkleIcon from "@/assets/icons/sparkle.svg";
import Image from "next/image";
import { HomeOrbit } from "@/components/HomeOrbit";
import { useIsMobile } from "@/hooks/useIsMobile";

export const HomeSection = () => {
  const isMobile = useIsMobile();
  return (
    <div className="py-60 md:py-80 relative z-0 overflow-x-clip">
      <div className="absolute inset-0 [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_70%,transparent)]">
        <div className="size-[620px] hero-ring"></div>
        <div className="size-[820px] hero-ring"></div>
        <div className="size-[1020px] hero-ring"></div>
        <div className="size-[1220px] hero-ring"></div>
        <HomeOrbit
          size={isMobile ? 215 : 430}
          rotation={-15}
          shouldOrbit
          spinDuration="30s"
        >
          <SparkleIcon className="size-8 text-blue-300/200" />
        </HomeOrbit>
        <HomeOrbit
          size={isMobile ? 220 : 440}
          rotation={90}
          shouldOrbit
          spinDuration="32s"
        >
          <SparkleIcon className="size-5 text-blue-300/20" />
        </HomeOrbit>
        <HomeOrbit
          size={isMobile ? 265 : 530}
          rotation={180}
          shouldOrbit
          spinDuration="62s"
        >
          <SparkleIcon className="size-10 text-blue-300/20" />
        </HomeOrbit>
        <HomeOrbit
          size={isMobile ? 275 : 550}
          rotation={20}
          shouldOrbit
          spinDuration="56s"
        >
          <StarIcon className="size-12 text-blue-300" />
        </HomeOrbit>
        <HomeOrbit
          size={isMobile ? 295 : 590}
          rotation={100}
          shouldOrbit
          spinDuration="68s"
        >
          <StarIcon className="size-8 text-blue-300" />
        </HomeOrbit>
        <HomeOrbit
          size={isMobile ? 220 : 600}
          rotation={88}
          shouldOrbit
          spinDuration="38s"
        >
          <Image src={marsImage} alt="Coder" className="size-[100px]" />
        </HomeOrbit>
        <HomeOrbit
          size={isMobile ? 340 : 720}
          rotation={85}
          shouldOrbit
          spinDuration="57s"
        >
          <div className="size-3 rounded-full bg-emerald-300/20" />
        </HomeOrbit>
        <HomeOrbit
          size={isMobile ? 340 : 800}
          rotation={-32}
          shouldOrbit
          spinDuration="42s"
        >
          <Image src={earthImage} alt="Coder" className="size-[100px]" />
        </HomeOrbit>
        <HomeOrbit
          size={isMobile ? 400 : 800}
          rotation={-72}
          shouldOrbit
          spinDuration="62s"
        >
          <StarIcon className="size-28 text-white-300" />
        </HomeOrbit>
        <HomeOrbit
          size={isMobile ? 450 : 900}
          rotation={200}
          shouldOrbit
          spinDuration="64s"
        >
          <StarIcon className="size-8 text-blue-300" />
        </HomeOrbit>
        <HomeOrbit
          size={isMobile ? 460 : 920}
          rotation={240}
          shouldOrbit
          spinDuration="70s"
        >
          <StarIcon className="size-8 text-blue-300" />
        </HomeOrbit>
        <HomeOrbit
          size={isMobile ? 600 : 1000}
          rotation={172}
          shouldOrbit
          spinDuration="60s"
        >
          <Image src={jupiterImage} alt="Coder" className="size-[140px]" />
        </HomeOrbit>
      </div>
      <div className="container relative z-10">
        <div className="max-w-5xl mx-auto">
          <motion.h1
            className="font-sans text-2xl md:text-6xl text-center mt-8 tracking-wide"
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            Hello! I&apos;m Sonny Ornido
          </motion.h1>

          <motion.h1
            className="font-serif text-3xl md:text-5xl text-center mt-4 md:mt-8 tracking-wide"
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
          >
            Full Stack Software Engineer
          </motion.h1>

          <motion.p
            className="mt-4 text-center text-white/60 md:text-lg"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.4, ease: "easeOut" }}
          >
            Passionate about solving real-world problems through clean and
            efficient code — one commit at a time.
          </motion.p>
        </div>

        <div className="flex justify-center items-center mt-8 gap-4">
          <motion.a
            href="./sonnyornidoresume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 border border-white bg-white text-gray-900 h-12 px-6 rounded-xl z-20"
            initial={{ opacity: 0, x: "-100%" }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.4, ease: "easeOut" }}
          >
            <span>↓</span>
            <span className="font-semibold">Download Resume</span>
          </motion.a>
        </div>
      </div>
    </div>
  );
};
