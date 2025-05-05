"use client";

import { TopBar } from "@/components/TopBar";
import { AnimatedTooltip } from "@/components/ui/animated-tooltip";
import { people } from "@/constants/data";
import { motion } from "motion/react";
import Image from "next/image";
import React from "react";

export function Hero() {
  return (
    <div
      style={{
        backgroundImage: "url('/vector.svg')",
        backgroundRepeat: "no-repeat",
      }}
      className="relative mx-auto flex max-w-7xl flex-col items-center justify-center"
    >
      <TopBar />
      <div className="absolute inset-y-0 left-0 h-full w-px bg-neutral-200/80 dark:bg-neutral-800/80">
        <div className="absolute top-0 h-40 w-px bg-gradient-to-b from-transparent via-blue-500 to-transparent" />
      </div>
      <div className="absolute inset-y-0 right-0 h-full w-px bg-neutral-200/80 dark:bg-neutral-800/80">
        <div className="absolute h-40 w-px bg-gradient-to-b from-transparent via-blue-500 to-transparent" />
      </div>
      <div className="absolute inset-x-0 bottom-0 h-px w-full bg-neutral-200/80 dark:bg-neutral-800/80">
        <div className="absolute mx-auto h-px w-40 bg-gradient-to-r from-transparent via-blue-500 to-transparent" />
      </div>

      <div className="px-4 py-10 md:py-20">
        <div className="flex flex-row items-center justify-center mb-10 w-full">
          <AnimatedTooltip items={people} />
        </div>
        <h1 className="relative z-10 mx-auto max-w-4xl text-center text-2xl font-bold md:text-4xl lg:text-5xl dark:text-slate-300">
          {"Your Vision, Our Expertise - Creating Quality IT Solutions Together"
            .split(" ")
            .map((word, index) => {
              const specialWords = ["Quality", "IT", "Solutions"];
              const isSpecial = specialWords.includes(word);
              const isQuality = word === "Quality";

              return (
                <React.Fragment key={index}>
                  {isQuality && <br />}
                  <motion.span
                    initial={{ opacity: 0, filter: "blur(4px)", y: 10 }}
                    animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
                    transition={{
                      duration: 0.3,
                      delay: index * 0.1,
                      ease: "easeInOut",
                    }}
                    className={`mr-2 inline-block font-newsreader ${
                      isSpecial
                        ? "font-readnewspaper italic text-[#222F5A]"
                        : ""
                    }`}
                  >
                    {word}
                  </motion.span>
                </React.Fragment>
              );
            })}
        </h1>
        <motion.p
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          transition={{
            duration: 0.3,
            delay: 0.8,
          }}
          className="relative z-10 mx-auto max-w-xl py-4 text-center text-sm font-normal text-neutral-600 dark:text-neutral-400"
        >
          Your strategic vision is our blueprint. We apply our expert IT
          knowledge to architect and build tailored solutions that deliver
          exceptional quality and a significant competitive advantage.
        </motion.p>
        <motion.div
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          transition={{
            duration: 0.3,
            delay: 1,
          }}
          className="relative z-10 mt-8 flex flex-wrap items-center justify-center gap-4"
        >
          <button className="w-60 transform rounded-lg bg-[#222F5A] px-6 py-2 font-medium text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-gray-800 dark:bg-white dark:text-black dark:hover:bg-gray-200 font-poppins">
            Let's Talk Business
          </button>
        </motion.div>
        <motion.div
          initial={{
            opacity: 0,
            y: 10,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.3,
            delay: 1.2,
          }}
          className="relative z-10 mt-20 rounded-3xl border border-neutral-200 bg-neutral-100 p-4 shadow-md dark:border-neutral-800 dark:bg-neutral-900"
        >
          <div className="w-full overflow-hidden rounded-xl border border-gray-300 dark:border-gray-700">
            <img
              src="https://assets.aceternity.com/pro/aceternity-landing.webp"
              alt="Landing page preview"
              className="aspect-[16/9] h-auto w-full object-cover"
              height={1000}
              width={1000}
            />
          </div>
        </motion.div>
      </div>
    </div>
  );
}
