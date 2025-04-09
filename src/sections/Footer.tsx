import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faFacebook, faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { FooterIcons } from "@/components/FooterIcons";

const icons = [
  { link: "https://www.instagram.com/_sonnyornido/", icon: faInstagram },
  { link: "https://www.facebook.com/sonnyornido35", icon: faFacebook },
  { link: "https://github.com/ornido77", icon: faGithub },
  { link: "https://www.linkedin.com/in/sonny-ornido-44632a1b3/", icon: faLinkedin },
];

export const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-4">
      <div className="container mx-auto flex flex-row justify-between items-center px-6">
        <div className="text-sm">&copy; 2025, All rights reserved.</div>
        <FooterIcons items={icons} />
      </div>
    </footer>
  );
};
