"use client";
import React from "react";
import Navbar from "../Components/navbar";
import { useState } from "react";
import { PT_Sans } from "next/font/google";
import Image from "next/image";
import logo from "../assets/loicw.jpg";

const ptSans = PT_Sans({
  subsets: ["latin"],
  weight: ["400", "700"],
});

const About = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const [isDark, setisDark] = useState(false);

  const toggleDark = () => {
    setisDark(!isDark);
  };
  return (
    <div className={`${ptSans.className} px-6`}>
      <Navbar
        isDark={isDark}
        isMenuOpen={isMenuOpen}
        toggleDark={toggleDark}
        toggleMenu={toggleMenu}
      />
      <div className="flex flex-col">
        <div className="w-full mt-12">
          <div className="w-fit mx-auto">
            <Image
              src={logo}
              alt="Loic Writes"
              className="w-48 rounded-full shadow-[#989797] shadow-lg"
            />
          </div>
        </div>
        <div className="w-full mt-5 hover:shadow-lg hover:shadow-[#495b7c] hover:translate-y-7 hover:transition-all bg-slate-200 rounded-lg px-8 py-10">
          <div>
            <p className="text-xl">
              Hi, I’m Loic! 👋 Welcome to Loic Writes—a space where I share my
              thoughts, experiences, and ideas about life, technology, and
              everything in between. I’m a software developer with a passion for
              creating, learning, and exploring new perspectives. Whether it’s
              diving deep into a tech stack, reflecting on personal growth, or
              sharing my latest adventures, this blog is my canvas for
              expression. When I’m not coding, you’ll find me exploring the
              world of cybersecurity, tinkering with new tools, or enjoying a
              good cup of coffee while brainstorming my next big idea. Thanks
              for stopping by! Feel free to explore, comment, and connect. Let’s
              build a community of curious minds together. 😊
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
