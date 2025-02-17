import { PropsWithChildren } from "react";

export const SectionHeader = ({ title }: { title: string }) => {
  return (
    <div>
      <div className="flex justify-center">
        <h2 className="uppercase text-3xl md:text-5xl font-semibold tracking-widest bg-gradient-to-r from-emerald-300 to-sky-400 text-transparent bg-clip-text text-center">
          {title}
        </h2>
      </div>
    </div>
  );
};
