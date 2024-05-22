"use client";
import { motion } from "framer-motion";
import React from "react";
import Link from "next/link";

interface HeroSectionProps {
  heroSection: {
    heroText: string;
    buttonText: string;
    buttonLink: string;
  };
}

export default function ImagesSliderClientComponent({
  heroSection,
}: HeroSectionProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: -80 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="z-50 flex flex-col justify-center items-center"
    >
      <motion.p
        className="font-bold text-xl md:text-6xl text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 py-4"
        dangerouslySetInnerHTML={{ __html: heroSection.heroText }}
      />
      <Link href={heroSection.buttonLink}>
        <button className="px-4 py-2 backdrop-blur-sm border bg-emerald-300/10 border-emerald-500/20 text-white mx-auto text-center rounded-full relative mt-4">
          <span>{heroSection.buttonText}</span>
          <div className="absolute inset-x-0 h-px -bottom-px bg-gradient-to-r w-3/4 mx-auto from-transparent via-emerald-500 to-transparent" />
        </button>
      </Link>
    </motion.div>
  );
}