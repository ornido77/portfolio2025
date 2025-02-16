import darkSaasLandingPage from "@/assets/images/dark-saas-landing-page.png";
import lightSaasLandingPage from "@/assets/images/light-saas-landing-page.png";
import aiStartupLandingPage from "@/assets/images/ai-startup-landing-page.png";
import Image from "next/image";
import CheckIcon from "@/assets/icons/check-circle.svg";

const portfolioProjects = [
  {
    company: "Amici Mercantile Inc.",
    year: "2024",
    title: "Businessware",
    results: [
      { title: "Developed the app for mobile and web." },
      {
        title:
          "Integrated a Unified Business Suite with CRM and POS functionalities.",
      },
      { title: "Streamlined and automated employee workflows." },
    ],
    link: "https://youtu.be/4k7IdSLxh6w",
    image: darkSaasLandingPage,
  },
  {
    company: "Amici Mercantile Inc.",
    year: "2023",
    title: "Businesstime",
    results: [
      { title: "Enables users to time in and out from any location." },
      {
        title:
          "Helps supervisors track employee attendance with GPS and photo verification.",
      },
      {
        title:
          "Restricts access by registering device IDs, ensuring only authorized users can use the app.",
      },
    ],
    link: "https://youtu.be/7hi5zwO75yc",
    image: lightSaasLandingPage,
  },
  {
    company: "Ximera Business Solutions",
    year: "2022",
    title: "Mobile Barcode",
    results: [
      {
        title:
          "Implemented serial number tracking for better product traceability.",
      },
      {
        title:
          "Enhanced FIFO (First In, First Out) operations for inventory management.",
      },
      { title: "Improved product monitoring through detailed reports." },
    ],
    link: "https://youtu.be/Z7I5uSRHMHg",
    image: aiStartupLandingPage,
  },
];

export const ProjectsSection = () => {
  return (
    <section className="pb-16 lg:py-24">
      <div className="container">
        <div className="flex justify-center">
          <h2 className="uppercase text-3xl md:text-5xl font-semibold tracking-widest bg-gradient-to-r from-emerald-300 to-sky-400 text-transparent bg-clip-text text-center">
            Projects
          </h2>
        </div>

        <div className="mt-10 md:mt-20 flex flex-col gap-20">
          {portfolioProjects.map((project) => (
            <div
              key={project.title}
              className="bg-gray-800 rounded-3xl relative z-0 overflow-hidden after:z-10 after:content-[''] 
                after:absolute after:inset-0 after:outline-2 after:outline after:-outline-offset-2` after:rounded-3xl after:outline-white/20 pt-8 px-8 md:pt-12 md:px-10 lg:pt-16 lg:px-20 after:pointer-events-none"
            >
              <div className="lg:grid lg:grid-cols-2 lg:gap-16">
                <div className="lg:pb-16">
                  <div className="bg-gradient-to-r from-emerald-300 to-sky-400 inline-flex gap-2 font-bold uppercase tracking-widest text-sm text-transparent bg-clip-text">
                    <span>{project.company}</span>
                    <span>&bull;</span>
                    <span>{project.year}</span>
                  </div>
                  <h3 className="font-serif text-2xl mt-2 md:text-4xl md:mt-5">
                    {" "}
                    {project.title}
                  </h3>
                  <hr className="border-t-2 border-white/5 mt-4 md:mt-5" />
                  <ul className="flex flex-col gap-4 mt-4 md:mt-5">
                    {project.results.map((result) => (
                      <li
                        key={result.title}
                        className="flex gap-2 text-sm md:text-base text-white/50"
                      >
                        <CheckIcon className="size-5 md:size-6" />
                        <span>{result.title}</span>
                      </li>
                    ))}
                  </ul>
                  <a href={project.link}>
                    <button className="bg-white text-gray-900 h-12 w-full md:w-auto px-8 rounded-xl font-semibold mt-8">
                      View App
                    </button>
                  </a>
                </div>
                <div className="relative">
                  <Image
                    src={project.image}
                    alt={project.title}
                    className="mt-8 -mb- md:-mb-0 lg:mt-0 lg:absolute lg:h-full lg:w-auto lg:max-w-none"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
