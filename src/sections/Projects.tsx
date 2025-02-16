import darkSaasLandingPage from "@/assets/images/dark-saas-landing-page.png";
import lightSaasLandingPage from "@/assets/images/light-saas-landing-page.png";
import aiStartupLandingPage from "@/assets/images/ai-startup-landing-page.png";
import Image from "next/image";

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
    <div>
      <div>
        <div className="container">
          <div className="flex justify-center">
            <h2 className="uppercase text-3xl font-semibold tracking-widest bg-gradient-to-r from-emerald-300 to-sky-400 text-transparent bg-clip-text text-center">
              Projects
            </h2>
          </div>

          <div>
            {portfolioProjects.map((project) => (
              <div
                key={project.title}
                className="bg-gray-800 rounded-3xl relative z-0 overflow-hidden after:z-10 after:content-[''] 
                after:absolute after:inset-0 after:outline-2 after:outline after:-outline-offset-1 after:rounded-3xl after:outline-white/20"
              >
                <div>
                  <span>{project.company}</span>
                  <span>{project.year}</span>
                </div>
                <h3>{project.title}</h3>
                <ul>
                  {project.results.map((result) => (
                    <li key={result.title}>{result.title}</li>
                  ))}
                </ul>
                <a href={project.link}>
                  <button>View App</button>
                </a>
                <Image src={project.image} alt={project.title} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
