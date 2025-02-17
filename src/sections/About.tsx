import { Card } from "@/components/Card";
import { SectionHeader } from "@/components/SectionHeader";
import StarIcon from "@/assets/icons/star.svg";
import bookImage from "@/assets/images/book-cover.png";
import Image from "next/image";
import JavaScriptIcon from "@/assets/icons/square-js.svg";
import ReactIcon from "@/assets/icons/react.svg";
import GitHubIcon from "@/assets/icons/github.svg";
import CSSIcon from "@/assets/icons/css3.svg";
import { TechIcon } from "@/components/TechIcon";
import { ToolboxItem } from "@/components/ToolboxItem";

const tools = [
  { title: "React", icon: ReactIcon },
  { title: "JavaScript", icon: JavaScriptIcon },
  { title: "Dart", icon: GitHubIcon },
  { title: "Flutter", icon: CSSIcon },
];

const hobbies = [
  { title: "Photography", logo: "📸", left: "5%", top: "5%" },
  { title: "Hiking", logo: "🥾", left: "10%", top: "35%" },
  { title: "Music", logo: "🎧", left: "35%", top: "40%" },
  { title: "Fitness", logo: "🏋🏽‍♀️", left: "70%", top: "45%" },
];

export const AboutSection = () => {
  return (
    <div className="py-20">
      <div className="container">
        <SectionHeader title="About Me" />
        <div className="mt-20 flex flex-col gap-8 md:grid md:grid-cols-2">
          <Card className="h-[320px] p-0">
            <div className="px-6 pt-6 md:py-8 md:px-10">
              <h3 className="font-serif text-3xl">Technologies</h3>
            </div>
            <ToolboxItem items={tools} className="mt-6" />
            <ToolboxItem
              items={tools}
              className="mt-6 -translate-x-1/2"
              itemsWrapperClassName="-translate-x-1/2"
            />
          </Card>
          <Card className="h-[320px] p-0 flex flex-col">
            <div className="px-6 py-6 md:py-8 md:px-10">
              <h3 className="font-serif text-3xl">Beyond the Code</h3>
            </div>
            <div className="relative flex-1">
              {hobbies.map((item) => (
                <div
                  key={item.title}
                  className="inline-flex items-center gap-2 px-6 bg-gradient-to-r from-emerald-300 to-sky-400 rounded-full py-1.5 absolute"
                  style={{ left: item.left, top: item.top }}
                >
                  <span className="font-medium text-gray-900">
                    {item.title}
                  </span>
                  <span>{item.logo}</span>
                </div>
              ))} 
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};
