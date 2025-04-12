"use client";
import { motion } from "framer-motion";
import businessware from "@/assets/images/bw.png";
import mobileBarcode from "@/assets/images/mb.png";
import businesstime from "@/assets/images/bt.png";
import itemChecker from "@/assets/images/ic.png";
import poolCalculator from "@/assets/images/pc.png";
import Image from "next/image";
import CheckIcon from "@/assets/icons/check-circle.svg";
import { SectionHeader } from "@/components/SectionHeader";
import { Card } from "@/components/Card";
import flutterIcon from "@/assets/icons/flutter.png";
import dartIcon from "@/assets/icons/dart.png";
import flaskIcon from "@/assets/icons/flask.png";
import pythonIcon from "@/assets/icons/python.png";
import MySQLIcon from "@/assets/icons/mysql.png";

const portfolioProjects = [
  {
    company: "Amici Mercantile Inc.",
    year: "2024",
    title: "Businessware",
    results: [
      {
        title:
          "Developed and deployed a full-featured ERP system with modules for Inventory, POS, CRM, and Customer Service.",
      },
      {
        title:
          "Ensured cross-platform compatibility across mobile, iOS, and web using Flutter and web technologies.",
      },
      {
        title:
          "Integrated CI/CD pipelines for streamlined development and deployment.",
      },
      {
        title:
          "Implemented scalable web services using Flask and MySQL for smooth backend operations.",
      },
    ],
    link: "https://play.google.com/store/apps/details?id=com.ximera.businessware&hl=en",
    image: businessware,
    tools: [
      { name: "Flutter", icon: flutterIcon },
      { name: "Dart", icon: dartIcon },
      { name: "Flask", icon: flaskIcon },
      { name: "Python", icon: pythonIcon },
      { name: "MySQL", icon: MySQLIcon },
    ],
  },
  {
    company: "Amici Mercantile Inc.",
    year: "2023",
    title: "Businesstime",
    results: [
      {
        title:
          "Developed a time tracking and attendance app tailored for field technicians and employees.",
      },
      {
        title:
          "Captured time-in/out logs with GPS tagging for accurate reporting.",
      },
      {
        title:
          "Introduced a simple, user-friendly UI optimized for both android and ios platforms.",
      },
    ],
    link: "https://play.google.com/store/apps/details?id=ph.com.amici.businesstime&hl=en",
    image: businesstime,
    tools: [
      { name: "Flutter", icon: flutterIcon },
      { name: "Dart", icon: dartIcon },
      { name: "Flask", icon: flaskIcon },
      { name: "Python", icon: pythonIcon },
      { name: "MySQL", icon: MySQLIcon },
    ],
  },
  {
    company: "Amici Mercantile Inc.",
    year: "2023",
    title: "Item Checker",
    results: [
      {
        title:
          "Built with Flutter for seamless deployment on both Android and iOS devices.",
      },
      {
        title:
          "Designed for quality control and inventory verification during audits and stocktakes.",
      },
      {
        title: "Provided discrepancy reports to support warehouse operations.",
      },
    ],
    link: "https://play.google.com/store/apps/details?id=com.ximera.itemchecker2023&hl=en",
    image: itemChecker,
    tools: [
      { name: "Flutter", icon: flutterIcon },
      { name: "Dart", icon: dartIcon },
      { name: "Flask", icon: flaskIcon },
      { name: "Python", icon: pythonIcon },
      { name: "MySQL", icon: MySQLIcon },
    ],
  },
  {
    company: "Ximera Business Solutions",
    year: "2022",
    title: "Mobile Barcode",
    results: [
      {
        title:
          "Created a Flutter-based app for scanning and syncing serialized inventory data.",
      },
      {
        title:
          "Enhanced FIFO (First In, First Out) operations for inventory management.",
      },
      {
        title:
          "Integrated with the company ERP system to support real-time stock management.",
      },
      {
        title:
          "Enabled offline barcode scanning and data caching for field operatives.",
      },
      {
        title: "Enhanced workflow efficiency and accuracy of asset tracking.",
      },
    ],
    link: "https://play.google.com/store/apps/details?id=com.ximera.mobilebarcode",
    image: mobileBarcode,
    tools: [
      { name: "Flutter", icon: flutterIcon },
      { name: "Dart", icon: dartIcon },
      { name: "Flask", icon: flaskIcon },
      { name: "Python", icon: pythonIcon },
      { name: "MySQL", icon: MySQLIcon },
    ],
  },

  {
    company: "Ximera Business Solutions",
    year: "2021",
    title: "Pool Calculator",
    results: [
      {
        title:
          "Created a utility app for calculating chemical requirements and water volume for pools.",
      },
      {
        title:
          "Offered offline functionality, ideal for pool technicians in the field.",
      },
      {
        title:
          "Built with Flutter for fast, lightweight performance on android and ios devices.",
      },
    ],
    link: "https://play.google.com/store/apps/details?id=ph.com.ximera.amici_pool_calculator&hl=en",
    image: poolCalculator,
    tools: [
      { name: "Flutter", icon: flutterIcon },
      { name: "Dart", icon: dartIcon },
      { name: "Flask", icon: flaskIcon },
      { name: "Python", icon: pythonIcon },
      { name: "MySQL", icon: MySQLIcon },
    ],
  },
];

export const ProjectsSection = () => {
  return (
    <section className="pb-16 lg:py-24">
      <div className="container ">
        <motion.div
          className="sticky top-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: false }}
          transition={{ duration: 2, ease: "easeOut" }}
        >
          <SectionHeader title="Projects" />
        </motion.div>

        <div className="mt-10 md:mt-20 flex flex-col gap-20">
          {portfolioProjects.map((project, index) => (
            <Card
              key={project.title}
              className="py-4 px-6 md:py-12 md:px-10 lg:py-16 lg:px-20 sticky"
              style={{ top: `calc(124px + ${index * 40}px)` }}
            >
              <div className="flex flex-col md:flex-row gap-4 md:gap-16 md:justify-between">
                <div className="w-full md:w-[500px] lg:pb-16">
                  <div className="lg:flex lg:flex-col lg:justify-between">
                    <div className="bg-gradient-to-r from-emerald-300 to-sky-400 inline-flex gap-2 font-bold uppercase tracking-widest text-xs md:text-sm text-transparent bg-clip-text">
                      <span>{project.company}</span>
                      <span>&bull;</span>
                      <span>{project.year}</span>
                    </div>
                    <h3 className="font-serif text-2xl mt-2 md:text-4xl md:mt-5">
                      {project.title}
                    </h3>
                    <hr className="border-t-2 border-white/5 mt-4 md:mt-5" />
                    <ul className="flex flex-col gap-1 md:gap-4 mt-4 md:mt-5">
                      {project.results.map((result) => (
                        <li
                          key={result.title}
                          className="flex gap-2 text-xs text-white/50"
                        >
                          <CheckIcon className="size-5 md:size-6" />
                          <span>{result.title}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="flex flex-wrap gap-3 mt-4 md:mt-6">
                      {project.tools.map((tool) => (
                        <div
                          key={tool.name}
                          className="flex items-center gap-1 text-xs text-white/50 bg-white/10 px-3 py-1 rounded-full"
                        >
                          <Image
                            src={tool.icon}
                            alt={tool.name}
                            width={16}
                            height={16}
                          />
                          <span>{tool.name}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div>
                    <a href={project.link} target="_blank">
                      <button className="bg-white text-gray-900 text-xs md:text-base sm:h-8 md:h-12 md:w-auto px-8 rounded-xl font-semibold mt-2 md:mt-8">
                        View App
                      </button>
                    </a>
                  </div>
                </div>
                <div className="w-full h-auto md:w-64 rounded-xl bg-red">
                  <Image
                    src={project.image}
                    alt={project.title}
                    className="my-auto h-auto w-full md:flex-shrink-0"
                  />
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
