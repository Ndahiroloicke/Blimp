"use client";

import Image from "next/image";
import { PT_Sans } from "next/font/google";

import machine from "./assets/machine.jpg";
import cloud from "./assets/cloud.jpg";
import scalable from "./assets/scalable.jpg";
import trends from "./assets/mobiletrends.jpg";
import { useState } from "react";
import Navbar from "./Components/navbar";

const ptSans = PT_Sans({
  subsets: ["latin"],
  weight: ["400", "700"], // Adjust weights as needed
});

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
      setIsMenuOpen(!isMenuOpen);
    };
  
    const [isDark, setisDark]  = useState(false);
  
    const toggleDark = () => {
      setisDark(!isDark)
    }
  return (
    <div className={isDark ? "px-6 dark dark:bg-white " : "px-6 bg-black"}>
      <div className={ptSans.className}>
        <Navbar isDark={isDark} isMenuOpen={isMenuOpen} toggleDark={toggleDark} toggleMenu={toggleMenu}/>
        <div className="h-[0.5px] w-full dark:bg-black bg-white mt-10"></div>
        <div className="w-full">
          <h1 className="font-extrabold text-white dark:text-black w-fit text-[40px] sm:text-[90px] md:text-[250px] mx-auto">
            LOIC WRITES
          </h1>
        </div>
        <div className="h-[0.5px] w-full dark:bg-black bg-white"></div>
        <div className="w-full dark:text-white">
          <div className="flex w-fit mx-auto flex-col items-center md:flex-row md:space-x-20 mt-10 md:pl-10">
            <div>
              <Image
                src={trends}
                alt="Mobile Trends"
                className="w-[300px] h-[168px] sm:h-[380px] sm:w-[700px] rounded-md"
              />
              <div className="ml-10">
                <p className="text-[#5e5e5e] font-bold mt-4">
                  January 10, 2025
                </p>
                <h1 className="font-semibold dark:text-black text-white text-xl w-96 sm:text-2xl mt-5">
                  The Evolution of Mobile App Development: Trends to Watch
                </h1>
                <p className="font-extralight dark:text-black text-white w-96 sm:w-[680px] line-clamp-2 sm:line-clamp-3 mt-6 text-lg">
                  Mobile app development is constantly evolving. In this post,
                  we’ll dive into the latest trends shaping the industry, from
                  AI integration to cross-platform frameworks, and discuss what
                  developers should keep an eye on for the future.
                </p>
              </div>
            </div>
            <div className="h-[0.5px] w-full dark:bg-black text-white bg-white mt-10"></div>
            <div className="space-y-10">
              <div className="flex mt-10 flex-col sm:flex-row space-x-6">
                <Image
                  src={cloud}
                  alt="Cloud Computing"
                  className="rounded-md"
                />
                <div>
                  <p className="text-[#5e5e5e] font-bold mt-2">
                    January 10, 2025
                  </p>
                  <h1 className="font-semibold dark:text-black text-white text-xl w-96 mt3">
                    Exploring the Power of Cloud Computing in Modern Software
                  </h1>
                  <p className="w-96 line-clamp-2 dark:text-black text-white mt-3">
                    Cloud computing has become a cornerstone of modern software
                    development. This article explores how cloud infrastructure,
                    services like AWS and Azure, and containerization
                    technologies are transforming the way we build and deploy
                    applications.
                  </p>
                </div>
              </div>
              <div className="h-[0.5px] w-full dark:bg-black text-white bg-white"></div>
              <div className="flex flex-col sm:flex-row space-x-6">
                <Image
                  src={scalable}
                  alt="Scalable Application"
                  className="w-[300px] h-[168px] rounded-md"
                />
                <div>
                  <p className="text-[#5e5e5e] font-bold mt-2">
                    January 10, 2025
                  </p>
                  <h1 className="font-semibold dark:text-black text-white text-xl w-96 mt-3">
                    Best Practices for Building Scalable Web Applications
                  </h1>
                  <p className="w-96 line-clamp-2 dark:text-black text-white mt-3">
                    Scalability is crucial for the success of web applications.
                    In this post, we’ll outline essential best practices for
                    designing applications that can handle increasing user loads
                    and data, from architecture to optimization strategies.
                  </p>
                </div>
              </div>
              <div className="h-[0.5px] w-full dark:bg-black bg-white "></div>
              <div className="flex flex-col sm:flex-row space-x-6">
                <Image
                  src={machine}
                  alt="Machine Learning"
                  className="w-[300px] h-[168px] rounded-md"
                />
                <div>
                  <p className="text-[#5e5e5e] font-bold mt-2">
                    January 10, 2025
                  </p>
                  <h1 className="font-semibold dark:text-black text-white text-xl w-96 mt-3">
                    An Introduction to Machine Learning: What Every Developer
                    Should Know
                  </h1>
                  <p className="w-96 line-clamp-2 dark:text-black text-white mt-3">
                    Machine learning is rapidly becoming an integral part of
                    software development. This post introduces key machine
                    learning concepts and how developers can start integrating
                    ML into their applications, even without a deep data science
                    background.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="h-[0.5px] w-full dark:bg-black bg-white mt-6 mb-10"></div>
        <div className="w-full flex flex-row justify-between text-lg font-thin text-[#222222] px-10 sm:px-28 pb-6">
          <div className="flex flex-col md:flex-row space-x-10">
            <p>&copy; 2025 LOIC WRITES</p>
            <p>Terms</p>
            <p>Privacy</p>
            <p>Cookies</p>
          </div>
          <div className="flex flex-col md:flex-row space-x-10">
            <p>Typescript</p>
            <p>Javascript</p>
            <p>AWS</p>
            <p>Coding</p>
            <p>Programming</p>
          </div>
        </div>
      </div>
    </div>
  );
}
