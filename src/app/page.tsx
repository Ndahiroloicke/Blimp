"use client";
import logo from "./assets/loicw.jpg";
import Image from "next/image";
import { PT_Sans } from "next/font/google";
import {
  FaLinkedin,
  FaGithub,
  FaTwitter,
  FaInstagram,
  FaBars,
} from "react-icons/fa";
import machine from "./assets/machine.jpg";
import cloud from "./assets/cloud.jpg";
import scalable from "./assets/scalable.jpg";
import trends from "./assets/mobiletrends.jpg";
import { useState } from "react";

const ptSans = PT_Sans({
  subsets: ["latin"],
  weight: ["400", "700"], // Adjust weights as needed
});

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="px-6 dark dark:bg-[#0a0a0a]">
      <div className={ptSans.className}>
        <nav className="w-full dark:text-white text-black py-3 sm:hidden justify-between flex flex-row items-center">
          <Image
            src={logo}
            alt="Loic Writes"
            className="w-16 h-16 rounded-full"
          />
          <div className="lg:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle Menu"
              className="text-white hover:text-gray focus:outline-none"
            >
              <FaBars size={35} />
            </button>
          </div>
          <div
    className={`${
      isMenuOpen ? "flex" : "hidden"
    } lg:flex flex-col lg:flex-row lg:space-x-12 items-end px-6 space-y-4 lg:space-y-0 font-light text-lg hover:cursor-pointer absolute lg:relative top-16 lg:top-auto left-0 lg:left-auto bg-black text-white lg:bg-transparent w-full lg:w-auto py-4 lg:py-0 shadow-md lg:shadow-none`}
  >
    <p>All Blogs</p>
    <div className="h-[0.5px] w-full bg-white mt-10"></div>
    <p>About</p>
    <div className="h-[0.5px] w-full bg-white mt-10"></div>
    <p>Categories</p>
    <div className="h-[0.5px] w-full bg-white mt-10"></div>
    <div
    className={`${
      isMenuOpen ? "flex" : "hidden"
    } lg:flex flex-row space-x-20 mt-4 lg:mt-0`}
  >
    <a
      href="https://www.linkedin.com/in/your-profile"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="LinkedIn"
      className="text-blue-700 hover:text-blue-900"
    >
      <FaLinkedin size={30} />
    </a>
    <a
      href="https://github.com/your-profile"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="GitHub"
      className="text-gray-800 hover:text-black"
    >
      <FaGithub size={30} />
    </a>
    <a
      href="https://twitter.com/your-profile"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Twitter"
      className="text-blue-500 hover:text-blue-700"
    >
      <FaTwitter size={30} />
    </a>
    <a
      href="https://instagram.com/your-profile"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Instagram"
      className="text-pink-600 hover:text-pink-800"
    >
      <FaInstagram size={30} />
    </a>
  </div>
  </div>
        </nav>
        <nav className="w-full py-3 hidden sm:flex flex-row justify-between items-center">
          <Image
            src={logo}
            alt="Loic Writes"
            className="w-16 h-16 rounded-full"
          />
          <div className="flex flex-row space-x-12 font-light text-lg hover:cursor-pointer">
            <p>All Blogs</p>
            <p>About</p>
            <p>Categories</p>
          </div>
          <div className="flex flex-row space-x-6">
            <a
              href="https://www.linkedin.com/in/your-profile"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="text-blue-700 hover:text-blue-900"
            >
              <FaLinkedin size={24} />
            </a>
            <a
              href="https://github.com/your-profile"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="text-gray-800 hover:text-black"
            >
              <FaGithub size={24} />
            </a>
            <a
              href="https://twitter.com/your-profile"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter"
              className="text-blue-500 hover:text-blue-700"
            >
              <FaTwitter size={24} />
            </a>
            <a
              href="https://instagram.com/your-profile"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="text-pink-600 hover:text-pink-800"
            >
              <FaInstagram size={24} />
            </a>
          </div>
        </nav>
        <div className="h-[0.5px] w-full dark:bg-white bg-black mt-10"></div>
        <div className="w-full">
          <h1 className="font-extrabold dark:text-white w-fit text-[40px] sm:text-[90px] md:text-[250px] mx-auto">
            LOIC WRITES
          </h1>
        </div>
        <div className="h-[0.5px] w-full dark:bg-white bg-black"></div>
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
                <h1 className="font-semibold text-xl w-96 sm:text-2xl mt-5">
                  The Evolution of Mobile App Development: Trends to Watch
                </h1>
                <p className="font-extralight w-96 sm:w-[680px] line-clamp-2 sm:line-clamp-3 mt-6 text-lg">
                  Mobile app development is constantly evolving. In this post,
                  we’ll dive into the latest trends shaping the industry, from
                  AI integration to cross-platform frameworks, and discuss what
                  developers should keep an eye on for the future.
                </p>
              </div>
            </div>
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
                  <h1 className="font-semibold text-xl w-96 mt3">
                    Exploring the Power of Cloud Computing in Modern Software
                  </h1>
                  <p className="w-96 line-clamp-2 mt-3">
                    Cloud computing has become a cornerstone of modern software
                    development. This article explores how cloud infrastructure,
                    services like AWS and Azure, and containerization
                    technologies are transforming the way we build and deploy
                    applications.
                  </p>
                </div>
              </div>
              <div className="h-[0.5px] w-full dark:bg-white bg-black"></div>
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
                  <h1 className="font-semibold text-xl w-96 mt-3">
                    Best Practices for Building Scalable Web Applications
                  </h1>
                  <p className="w-96 line-clamp-2 mt-3">
                    Scalability is crucial for the success of web applications.
                    In this post, we’ll outline essential best practices for
                    designing applications that can handle increasing user loads
                    and data, from architecture to optimization strategies.
                  </p>
                </div>
              </div>
              <div className="h-[0.5px] w-full dark:bg-white bg-black"></div>
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
                  <h1 className="font-semibold text-xl w-96 mt-3">
                    An Introduction to Machine Learning: What Every Developer
                    Should Know
                  </h1>
                  <p className="w-96 line-clamp-2 mt-3">
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
        <div className="h-[0.5px] w-full dark:bg-white bg-black mt-6 mb-10"></div>
        <div className="w-full flex flex-row justify-between text-lg font-thin text-[#222222] px-10 sm:px-28 mb-6">
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
