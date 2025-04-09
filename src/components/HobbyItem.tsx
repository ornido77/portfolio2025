import React from "react";

interface HobbyItemProps {
  title: string;
  logo: string;
  left: string;
  top: string;
}

const HobbyItem: React.FC<HobbyItemProps> = ({ title, logo, left, top }) => {
  return (
    <div
      className="inline-flex items-center gap-2 px-6 bg-gradient-to-r from-emerald-300 to-sky-400 rounded-full py-2 absolute animate-pulse"
      style={{ left, top }}
    >
      <span className="font-medium text-gray-900">{title}</span>
      <span className="text-2xl">{logo}</span>
    </div>
  );
};

export default HobbyItem;
