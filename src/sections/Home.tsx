import memojiImage from "@/assets/images/memoji-computer.png";
import ArrowDown from "@/assets/icons/arrow-down.svg";
import earthImage from "@/assets/images/earth.png";
import marsImage from "@/assets/images/mars.png";
import jupiterImage from "@/assets/images/jupiter.png";
import StarIcon from "@/assets/icons/star.svg";
import SparkleIcon from "@/assets/icons/sparkle.svg";
import Image from "next/image";
import { HomeOrbit } from "@/components/HomeOrbit";

export const HomeSection = () => {
  return (
    <div className="py-60 md:py-80 relative z-0 overflow-x-clip">
      <div className="absolute inset-0 [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_70%,transparent)]">
        <div className="size-[620px] hero-ring"></div>
        <div className="size-[820px] hero-ring"></div>
        <div className="size-[1020px] hero-ring"></div>
        <div className="size-[1220px] hero-ring"></div>
        <HomeOrbit size={430} rotation={-15} shouldOrbit spinDuration="30s">
          <SparkleIcon className="size-8 text-blue-300/200" />
        </HomeOrbit>
        <HomeOrbit size={440} rotation={90} shouldOrbit spinDuration="32s">
          <SparkleIcon className="size-5 text-blue-300/20" />
        </HomeOrbit>
        <HomeOrbit size={530} rotation={180} shouldOrbit spinDuration="36s">
          <SparkleIcon className="size-10 text-blue-300/20" />
        </HomeOrbit>
        <HomeOrbit size={550} rotation={20} shouldOrbit spinDuration="36s">
          <StarIcon className="size-12 text-blue-300" />
        </HomeOrbit>
        <HomeOrbit size={590} rotation={100} shouldOrbit spinDuration="38s">
          <StarIcon className="size-8 text-blue-300" />
        </HomeOrbit>
        <HomeOrbit size={600} rotation={88} shouldOrbit spinDuration="38s">
          <Image src={marsImage} alt="Coder" className="size-[100px]" />
        </HomeOrbit>
        <HomeOrbit size={720} rotation={85} shouldOrbit spinDuration="40s">
          <div className="size-3 rounded-full bg-emerald-300/20" />
        </HomeOrbit>
        <HomeOrbit size={800} rotation={-32} shouldOrbit spinDuration="42s">
          <Image src={earthImage} alt="Coder" className="size-[100px]" />
        </HomeOrbit>
        <HomeOrbit size={800} rotation={-72} shouldOrbit spinDuration="42s">
          <StarIcon className="size-28 text-white-300" />
        </HomeOrbit>
        <HomeOrbit size={900} rotation={200} shouldOrbit spinDuration="44s">
          <StarIcon className="size-8 text-blue-300" />
        </HomeOrbit>
        <HomeOrbit size={920} rotation={240} shouldOrbit spinDuration="44s">
          <StarIcon className="size-8 text-blue-300" />
        </HomeOrbit>
        <HomeOrbit size={1000} rotation={172} shouldOrbit spinDuration="44s">
          <Image src={jupiterImage} alt="Coder" className="size-[140px]" />
        </HomeOrbit>
      </div>
      <div className="container">
        <div className="max-w-5xl mx-auto">
          <h1 className="font-serif text-6xl text-center mt-8 tracking-wide">
            Hello! I&apos;m Sonny Ornido
          </h1>
          <h1 className="font-serif text-5xl text-center mt-8 tracking-wide">
            Software Developer
          </h1>
          <p className="mt-4 text-center text-white/60 md:text-lg">
            I design and develop software solutions for desktop, mobile, and web
            applications.
          </p>
        </div>
        <div className="flex justify-center items-center mt-8 gap-4">
          <button className="inline-flex items-center gap-2 border border-white bg-white text-gray-900 h-12 px-6 rounded-xl">
            <span>↓</span>
            <span className="font-semibold">Download Resume</span>
          </button>
        </div>
      </div>
    </div>
  );
};
