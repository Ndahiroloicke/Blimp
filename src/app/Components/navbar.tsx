import React from "react";
import Link from "next/link";
import { AppProps } from "next/app";
import {
  FaLinkedin,
  FaGithub,
  FaTwitter,
  FaInstagram,
  FaBars,
  FaMoon,
  FaSun,
} from "react-icons/fa";
import Image from "next/image";
import { useState } from "react";
import logo from "../assets/loicw.jpg";

type navbarProps = {
  toggleDark: () => void;
  toggleMenu: () => void;
  isMenuOpen: boolean;
  isDark: boolean;
};

const Navbar: React.FC<navbarProps> = ({
  isMenuOpen,
  isDark,
  toggleMenu,
  toggleDark,
}) => {
  return (
    <div>
      <nav className="w-full dark:text-white text-black py-3 sm:hidden justify-between flex flex-row items-center">
        <Image
          src={logo}
          alt="Loic Writes"
          className="w-16 h-16 rounded-full"
        />
        <div className="lg:hidden">
          <button
            onClick={toggleMenu}
            aria-label="Toggle Menu"
            className=" text-black dark:text-white hover:text-gray focus:outline-none"
          >
            <FaBars size={35} />
          </button>
        </div>
        <div
          className={`${
            isMenuOpen ? "flex" : "hidden"
          } lg:flex flex-col lg:flex-row lg:space-x-12 items-end px-6 space-y-4 lg:space-y-0 font-light text-lg hover:cursor-pointer absolute lg:relative top-16 lg:top-auto left-0 lg:left-auto dark:bg-white bg-black dark:text-black text-white lg:bg-transparent w-full lg:w-auto py-4 lg:py-0 shadow-md lg:shadow-none`}
        >
          <Link href="/">
            <p>All Blogs</p>
          </Link>
          <div className="h-[0.5px] w-full dark:bg-black bg-white mt-10"></div>
          <Link href="/about">
            <p>About</p>
          </Link>
          <div className="h-[0.5px] w-full dark:bg-black bg-white mt-10"></div>
          <Link href="/categories">
            <p>Categories</p>
          </Link>
          <div className="h-[0.5px] w-full dark:bg-black bg-white mt-10"></div>
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

            {isDark ? (
              <button
                className="text-white dark:text-black"
                onClick={toggleDark}
              >
                <FaMoon size={24} />
              </button>
            ) : (
              <button
                className="text-white dark:text-black"
                onClick={toggleDark}
              >
                <FaSun size={24} />
              </button>
            )}
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
          {isDark ? (
            <button className="text-black" onClick={toggleDark}>
              <FaMoon size={24} />
            </button>
          ) : (
            <button className="text-white" onClick={toggleDark}>
              <FaSun size={24} />
            </button>
          )}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
