"use client";
import { motion } from "framer-motion";

export const ContactSection = () => {
  return (
    <div className="py-16 pt-14 lg:py-24 lg:pt-20">
      <div className="container">
        <motion.div
          className="bg-gradient-to-r from-emerald-300 to-sky-400 text-gray-900 py-8 px-10 rounded-3xl text-center md:text-left"
          initial={{ opacity: 0, x: "-100%" }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.4, ease: "easeOut" }}
        >
          <div className="flex flex-col md:flex-row gap-8 md:gap-16 items-center">
            <div>
              <h2 className="font-serif text-2xl md:text-3xl">
                Let&apos;s create something amazing together
              </h2>
              <p className="text-sm md:text-base mt-2">
              Ready to turn your ideas into reality? Let&apos;s connect and explore how I can help you bring your vision to life and achieve your goals
              </p>
            </div>
            <div>
              <a
                href="https://www.linkedin.com/in/sonny-ornido-44632a1b3/"
                target="_blank"
              >
                <button className="text-white bg-gray-900 inline-flex items-center px-6 h-12 rounded-xl gap-2 w-max border border-black">
                  <span className="font-semibold"> Contact Me</span>
                </button>
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};
