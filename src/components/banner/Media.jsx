// imports of media icons
import React from 'react';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaReact, FaGithub } from "react-icons/fa";
import { SiTailwindcss, SiFigma, SiNextdotjs, SiJavascript, SiMongodb, SiNodedotjs } from "react-icons/si";
const Media = () => {
  // This component displays social media icons and best skill icons
  return (
    <div className="flex flex-col xl:flex-row gap-6 lgl:gap-0 justify-between">
      <div>
        <h2 className="text-base uppercase font-titleFont mb-4">Find me in</h2>
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
      {/* This section displays the best skills of the developer */}
      {/* The icons are displayed using react-icons library */}
      <div>
        <h2 className="text-base uppercase font-titleFont mb-4">
          BEST SKILL ON
        </h2>
        <div className="flex gap-4">
          <span className="bannerIcon">
            <FaReact />
          </span>
          <span className="bannerIcon">
            <SiNextdotjs />
          </span>
          <span className="bannerIcon">
            <SiTailwindcss />
          </span>
          <span className="bannerIcon">
            <SiFigma />
          </span>
          <span className="bannerIcon">
            <SiJavascript />
          </span>
          <span className="bannerIcon">
            <SiMongodb />
          </span>
          <span className="bannerIcon">
            <SiNodedotjs />
          </span>
        </div>
      </div>
    </div>
  );
}

export default Media