import React from "react";
import { IconContext } from "react-icons";
import { RiGithubFill, RiLinkedinBoxFill } from "react-icons/ri";

function Footer() {
  return (
    <footer className="footer w-full bg-gray-900 text-white grid grid-cols-2 py-3 px-3 md:px-10 justify-items-end md:justify-items-center items-center">
      <p>
        Created by: &nbsp;
        <a href="https://christian-escobar.netlify.app/">
          Christian Escobar F.
        </a>
      </p>
      <div className="flex  gap-2">
        <IconContext.Provider value={{ color: "white", size: "2em" }}>
          <a href="https://www.github.com/chescobarf">
            <RiGithubFill />
          </a>
          <a href="https://www.linkedin.com/in/ch-escobarf/">
            <RiLinkedinBoxFill />
          </a>
        </IconContext.Provider>
      </div>
    </footer>
  );
}

export default Footer;
