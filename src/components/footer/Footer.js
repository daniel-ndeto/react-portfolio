import React from 'react'
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaGithub } from "react-icons/fa";
import {logo} from "../../assets/index"

// renders the footer of the website
const Footer = () => {
  return (
    <div className="w-full py-20 h-auto border-b-[1px] border-b-black grid grid-cols-1 md:grid-cols-2 lgl:grid-cols-4 gap-8">
      <div className="w-full h-full flex flex-col gap-8">
        <img className="w-32" src={logo} alt="logo" />
        <div className="flex gap-4">
          <span className="bannerIcon">
            <FaFacebookF url="https://www.facebook.com/profile.php?id=100075378249781" />
          </span>
          <span className="bannerIcon">
            <FaTwitter url="https://x.com/musyoki_017" />
          </span>
          <span className="bannerIcon">
            <FaLinkedinIn url="www.linkedin.com/in/daniel-ndeto-187a8b292" />
          </span>
          <span className="bannerIcon">
            <FaGithub url="https://github.com/daniel-ndeto" />
          </span>
        </div>
      </div>
      <div className="w-full h-full">
        <h3 className="text-xl uppercase text-designColor tracking-wider">
          Quick Link
        </h3>
        <ul className="flex flex-col gap-4 font-titleFont font-medium py-6 overflow-hidden">
          <li>
            <span className="w-full text-lg relative hover:text-designColor duration-300 group cursor-pointer">
            <a href="https://daniel-ndeto.github.io/daniel-ndeto-website-portifolio-page/index.html" target="_blank" rel="noopener noreferrer">About Me</a>
              <span className="w-full h-[1px] bg-designColor inline-flex absolute left-0 -bottom-1 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300"></span>
            </span>
          </li>
          <li>
            <span className="w-full text-lg relative hover:text-designColor duration-300 group cursor-pointer">
            <a href="https://daniel-ndeto.github.io/daniel-ndeto-website-portifolio-page/service.html" target="_blank" rel="noopener noreferrer">Services</a>
              <span className="w-full h-[1px] bg-designColor inline-flex absolute left-0 -bottom-1 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300"></span>
            </span>
          </li>
          <li>
            <span className="w-full text-lg relative hover:text-designColor duration-300 group cursor-pointer">
            <a href="https://daniel-ndeto.github.io/daniel-ndeto-website-portifolio-page/portfolio.html" target="_blank" rel="noopener noreferrer">Portfolio</a>
              <span className="w-full h-[1px] bg-designColor inline-flex absolute left-0 -bottom-1 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300"></span>
            </span>
          </li>
          <li>
            <span className="w-full text-lg relative hover:text-designColor duration-300 group cursor-pointer">
            <a href="https://daniel-ndeto.github.io/daniel-ndeto-website-portifolio-page/contact.html" target="_blank" rel="noopener noreferrer">Contact</a>
              <span className="w-full h-[1px] bg-designColor inline-flex absolute left-0 -bottom-1 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300"></span>
            </span>
          </li>
          <li>
            <span className="w-full text-lg relative hover:text-designColor duration-300 group cursor-pointer">
              BLOG
              <span className="w-full h-[1px] bg-designColor inline-flex absolute left-0 -bottom-1 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300"></span>
            </span>
          </li>
        </ul>
      </div>
      <div className="w-full h-full">
        <h3 className="text-xl uppercase text-designColor tracking-wider">
          RESOURCES
        </h3>
        <ul className="flex flex-col gap-4 font-titleFont font-medium py-6 overflow-hidden">
          <li>
            <span className="w-full text-lg relative hover:text-designColor duration-300 group cursor-pointer">
              Authentication
              <span className="w-full h-[1px] bg-designColor inline-flex absolute left-0 -bottom-1 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300"></span>
            </span>
          </li>
          <li>
            <span className="w-full text-lg relative hover:text-designColor duration-300 group cursor-pointer">
              System Status
              <span className="w-full h-[1px] bg-designColor inline-flex absolute left-0 -bottom-1 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300"></span>
            </span>
          </li>
          <li>
            <span className="w-full text-lg relative hover:text-designColor duration-300 group cursor-pointer">
              Terms of Service
              <span className="w-full h-[1px] bg-designColor inline-flex absolute left-0 -bottom-1 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300"></span>
            </span>
          </li>
          <li>
            <span className="w-full text-lg relative hover:text-designColor duration-300 group cursor-pointer">
              Pricing
              <span className="w-full h-[1px] bg-designColor inline-flex absolute left-0 -bottom-1 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300"></span>
            </span>
          </li>
          <li>
            <span className="w-full text-lg relative hover:text-designColor duration-300 group cursor-pointer">
              Over Right
              <span className="w-full h-[1px] bg-designColor inline-flex absolute left-0 -bottom-1 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300"></span>
            </span>
          </li>
        </ul>
      </div>
      <div className="w-full h-full">
        <h3 className="text-xl uppercase text-designColor tracking-wider">
          DEVELOPERS
        </h3>
        <ul className="flex flex-col gap-4 font-titleFont font-medium overflow-hidden py-6">
          <li>
            <span className="w-full text-lg relative hover:text-designColor duration-300 group cursor-pointer">
              Documentation
              <span className="w-full h-[1px] bg-designColor inline-flex absolute left-0 -bottom-1 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300"></span>
            </span>
          </li>
          <li>
            <span className="w-full text-lg relative hover:text-designColor duration-300 group cursor-pointer">
              Authentication
              <span className="w-full h-[1px] bg-designColor inline-flex absolute left-0 -bottom-1 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300"></span>
            </span>
          </li>
          <li>
            <span className="w-full text-lg relative hover:text-designColor duration-300 group cursor-pointer">
              API Reference
              <span className="w-full h-[1px] bg-designColor inline-flex absolute left-0 -bottom-1 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300"></span>
            </span>
          </li>
          <li>
            <span className="w-full text-lg relative hover:text-designColor duration-300 group cursor-pointer">
              Support
              <span className="w-full h-[1px] bg-designColor inline-flex absolute left-0 -bottom-1 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300"></span>
            </span>
          </li>
          <li>
            <span className="w-full text-lg relative hover:text-designColor duration-300 group cursor-pointer">
              Open Source
              <span className="w-full h-[1px] bg-designColor inline-flex absolute left-0 -bottom-1 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300"></span>
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Footer