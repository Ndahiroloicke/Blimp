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
    <div className={`${ptSans.className} px-6 bg-white h-screen dark:bg-black`}>
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
              className="w-48 rounded-full dark:shadow-[#cacaca] shadow-[#989797] animate-bounce transition-shadow shadow-sm duration-[6000ms]"
            />
          </div>
        </div>
        <div className="w-full mt-5 hover:shadow-sm hover:shadow-[#495b7c] hover:translate-y-7 duration-500 hover:transition-all dark:bg-black bg-slate-200 rounded-lg px-8 py-10">
          <div>
            <p className="text-xl dark:text-white text-black">
              Hi, I’m Loic! 👋 Welcome to Loic Writes—a digital space where I
              share my thoughts, experiences, and ideas on everything that
              sparks my curiosity, from life and technology to personal growth
              and creativity. This blog is a reflection of my journey as a
              software developer, constantly evolving and learning in the
              ever-changing world of tech. I’m deeply passionate about creating
              meaningful solutions, whether it’s through building innovative
              applications, exploring new tech stacks, or experimenting with
              cutting-edge tools. Cybersecurity is another area that fascinates
              me, as I believe understanding and protecting digital spaces is
              more important than ever. When I’m not writing code or solving
              problems, you’ll likely find me diving into new learning
              opportunities, reading thought-provoking articles, or simply
              enjoying a quiet moment with a good cup of coffee. I also love
              brainstorming fresh ideas and thinking about ways to make a
              positive impact through technology. Through Loic Writes, I aim to
              share not only my technical knowledge but also my reflections on
              personal growth, challenges, and successes. My hope is that this
              blog becomes a space where curious minds can come together to
              exchange ideas, inspire one another, and grow as a community.
              Thank you for stopping by! Feel free to explore, share your
              thoughts in the comments, and connect with me. Let’s build
              something amazing together! 😊
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
