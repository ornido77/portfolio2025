"use client";
import { motion } from "framer-motion";
import { Card } from "@/components/Card";
import { SectionHeader } from "@/components/SectionHeader";
import JavaScriptIcon from "@/assets/icons/javascript.png";
import PythonIcon from "@/assets/icons/python.png";
import DartIcon from "@/assets/icons/dart.png";
import FlutterIcon from "@/assets/icons/flutter.png";
import FlaskIcon from "@/assets/icons/flask.png";
import ReactIcon from "@/assets/icons/react.png";
import NextIcon from "@/assets/icons/nextjs.png";
import GitlabIcon from "@/assets/icons/gitlab.png";
import VSCodeIcon from "@/assets/icons/vscode.png";
import MySQLIcon from "@/assets/icons/mysql.png";
import Image from "next/image";

const tools = [
  { title: "Dart", icon: DartIcon },
  { title: "Flutter", icon: FlutterIcon },
  { title: "Python", icon: PythonIcon },
  { title: "Flask", icon: FlaskIcon },
  { title: "JavaScript", icon: JavaScriptIcon },
  { title: "ReactJS", icon: ReactIcon },
  { title: "NextJS", icon: NextIcon },
  { title: "Gitlab", icon: GitlabIcon },
  { title: "VSCode", icon: VSCodeIcon },
  { title: "MySQL", icon: MySQLIcon },
];
const hobbies = [
  { title: "Photography", logo: "📸" },
  { title: "Hiking", logo: "🌄" },
  { title: "Music", logo: "🎧" },
  { title: "Fitness", logo: "🏋🏽‍♀️" },
  { title: "Traveling", logo: "🏖" },
  { title: "Riding", logo: "🛵" },
];

export const AboutSection = () => {
  return (
    <div className="py-20">
      <div className="container">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 2, ease: "easeOut" }}
        >
          <SectionHeader title="About Me" />
        </motion.div>
        <div className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div
            className="flex-grow p-0"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <Card className="h-[320px] p-0">
              <div className="px-6 pt-6 md:py-8 md:px-10">
                <h3 className="font-serif text-3xl mb-4">Technologies</h3>
                <p className="text-xs md:text-base text-white/50">
                  Languages, Frameworks, Databases and Tools that I use.
                </p>
                <div className="flex flex-wrap justify-start items-center gap-4 md:gap-6">
                  {/* Tools */}
                  {tools.map((tool, index) => (
                    <div
                      key={tool.title}
                      className="flex flex-col items-center gap-2 text-base"
                    >
                      <motion.div
                        key={tool.title}
                        className="flex flex-col items-center gap-2 text-base"
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{
                          opacity: 1,
                          scale: 1,
                          x: [0, 10, -10, 10, -10, 0], // Shake effect
                        }}
                        viewport={{ once: false }}
                        transition={{
                          duration: 0.5,
                          delay: 0.2 * index,
                          ease: "easeOut",
                          times: [0, 0.25, 0.5, 0.75, 1],
                        }}
                      >
                        <Image
                          src={tool.icon}
                          alt={tool.title}
                          className="w-10 h-10 object-contain"
                        />
                      </motion.div>
                      <span className="text-xs md:text-sm">{tool.title}</span>
                    </div>
                  ))}
                </div>
              </div>
            </Card>
          </motion.div>
          <motion.div
            className="flex-grow p-0"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <Card className="h-[320px] p-0 flex flex-col gap-2 md:gap-0">
              <div className="px-6 pt-6 md:py-8 md:px-10">
                <h3 className="font-serif text-3xl  mb-4">Beyond the Code</h3>
                <p className="text-xs md:text-base text-white/50">
                  When I&apos;m not coding, I enjoy exploring my hobbies that
                  keep me balanced and energized.
                </p>
              </div>
              <div className="flex flex-wrap justify-start gap-6 px-6">
                {hobbies.map((item, index) => (
                  <motion.div
                    key={item.title}
                    className="flex flex-col items-center gap-2 text-base"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{
                      opacity: 1,
                      scale: 1,
                      x: [0, 10, -10, 10, -10, 0], // Shake effect
                    }}
                    viewport={{ once: false }}
                    transition={{
                      duration: 0.5,
                      delay: 0.2 * index,
                      ease: "easeOut",
                      times: [0, 0.25, 0.5, 0.75, 1],
                    }}
                  >
                    <div
                      key={item.title}
                      className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-emerald-300 to-sky-400 rounded-full text-sm md:text-base text-gray-900"
                    >
                      <span>{item.logo}</span>
                      <span>{item.title}</span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </Card>
          </motion.div>
        </div>
      </div>
    </div>
  );
};
