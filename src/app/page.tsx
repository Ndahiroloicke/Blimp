import logo from "./assets/loicw.jpg";
import Image from "next/image";
import { PT_Sans } from "next/font/google";
import { FaLinkedin, FaGithub, FaTwitter, FaInstagram } from "react-icons/fa";
import machine from './assets/machine.jpg';
import cloud from './assets/cloud.jpg';
import scalable from './assets/scalable.jpg';
import trends from './assets/mobiletrends.jpg';

const ptSans = PT_Sans({
  subsets: ["latin"],
  weight: ["400", "700"], // Adjust weights as needed
});

export default function Home() {
  return (
    <div className="px-6">
    <div className={ptSans.className} >
      <nav className="w-full py-3 flex flex-row justify-between items-center">

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
      <div className="h-[0.5px] w-full bg-white mt-10"></div>
      <div className="w-full">
        <h1 className="font-extrabold text-[250px] -mt-10">LOIC WRITES</h1>
      </div>
      <div className="h-[0.5px] w-full bg-white"></div>
      <div>
        <div className="flex flex-row space-x-20 mt-10 w-full">
          <div>
            <Image src={trends} alt="Mobile Trends" className="h-[400px] w-[700px]"/>
            <p>January 10, 2025</p>
            <h1>The Evolution of Mobile App Development: Trends to Watch</h1>
            <p></p>
          </div>
          <div className="space-y-10">
            <div className="flex flex-row">
              <Image src={cloud} alt="Cloud Computing" />
              <div>
              <p className="text-[#5e5e5e] font-bold">January 10, 2025</p>
              <h1 className="font-semibold text-xl w-96">Exploring the Power of Cloud Computing in Modern Software</h1>
              <p></p>
              </div>
            </div>
            <div className="flex flex-row">
              <Image src={scalable} alt="Scalable Application" className="w-[300px] h-[168px]"/>
              <div>
              <p className="text-[#5e5e5e] font-bold">January 10, 2025</p>
              <h1 className="font-semibold text-xl w-96">Best Practices for Building Scalable Web Applications</h1>
              <p></p>
              </div>
            </div>
            <div className="flex flex-row">
              <Image src={machine} alt="Machine Learning" className="w-[300px] h-[168px]"/>
              <div>
              <p className="text-[#5e5e5e] font-bold">January 10, 2025</p>
              <h1 className="font-semibold text-xl w-96">An Introduction to Machine Learning: What Every Developer Should Know</h1>
              <p></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}
