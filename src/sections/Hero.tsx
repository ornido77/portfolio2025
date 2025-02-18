import memojiImage from "@/assets/images/memoji-computer.png";
import ArrowDown from "@/assets/icons/arrow-down.svg";
import earthImage from "@/assets/images/earth.png";
import marsImage from "@/assets/images/mars.png";
import jupiterImage from "@/assets/images/jupiter.png";
import StarIcon from "@/assets/icons/star.svg";
import SparkleIcon from "@/assets/icons/sparkle.svg";
import Image from "next/image";
import { HeroOrbit } from "@/components/HeroOrbit";

export const HeroSection = () => {
  return (
    <div className="py-60 md:py-80 relative z-0 overflow-x-clip">
      <div className="absolute inset-0 [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_70%,transparent)]">
        <div className="size-[620px] hero-ring"></div>
        <div className="size-[820px] hero-ring"></div>
        <div className="size-[1020px] hero-ring"></div>
        <div className="size-[1220px] hero-ring"></div>
        <HeroOrbit size={430} rotation={-15} shouldOrbit spinDuration="30s">
          <SparkleIcon className="size-8 text-blue-300/200" />
        </HeroOrbit>
        <HeroOrbit size={440} rotation={90} shouldOrbit spinDuration="32s">
          <SparkleIcon className="size-5 text-blue-300/20" />
        </HeroOrbit>
        <HeroOrbit size={530} rotation={180} shouldOrbit spinDuration="36s">
          <SparkleIcon className="size-10 text-blue-300/20" />
        </HeroOrbit>
        <HeroOrbit size={550} rotation={20} shouldOrbit spinDuration="36s">
          <StarIcon className="size-12 text-blue-300" />
        </HeroOrbit>
        <HeroOrbit size={590} rotation={100} shouldOrbit spinDuration="38s">
          <StarIcon className="size-8 text-blue-300" />
        </HeroOrbit>
        <HeroOrbit size={600} rotation={88} shouldOrbit spinDuration="38s">
          <Image src={marsImage} alt="Coder" className="size-[100px]" />
        </HeroOrbit>
        <HeroOrbit size={720} rotation={85} shouldOrbit spinDuration="40s">
          <div className="size-3 rounded-full bg-emerald-300/20" />
        </HeroOrbit>
        <HeroOrbit size={800} rotation={-32} shouldOrbit spinDuration="42s">
          <Image src={earthImage} alt="Coder" className="size-[100px]" />
        </HeroOrbit>
        <HeroOrbit size={800} rotation={-72} shouldOrbit spinDuration="42s">
          <StarIcon className="size-28 text-white-300" />
        </HeroOrbit>
        <HeroOrbit size={1000} rotation={172} shouldOrbit spinDuration="48s">
          <Image src={jupiterImage} alt="Coder" className="size-[140px]" />
        </HeroOrbit>
      </div>
      <div className="container">
        <div className="max-w-lg mx-auto">
          <h1 className="font-serif text-5xl text-center mt-8 tracking-wide">
            Sonny Ornido
          </h1>
          <p className="mt-4 text-center text-white/60 md:text-lg">
            I specialize in creating user-centric, responsive websites. I
            specialize in creating user-centric, responsive websites. I
            specialize in creating user-centric, responsive websites.
          </p>
        </div>
        <div className="flex flex-col md:flex-row justify-center items-center mt-8 gap-4">
          <button className="inline-flex items-center gap-2 border border-white/15 px-6 h-12 rounded-xl">
            <span className="font-semibold">Explore my work</span>
            <ArrowDown className="size-4" />
          </button>
          <button className="inline-flex items-center gap-2 border border-white bg-white text-gray-900 h-12 px-6 rounded-xl">
            <span>Hi</span>
            <span className="font-semibold">Let/s Connect</span>
          </button>
        </div>
      </div>
    </div>
  );
};
