import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { ReactComponent as Linkedin } from "../assets/linkedin.svg";
import { ReactComponent as Github } from "../assets/github.svg";
import fullpageApi from "@fullpage/react-fullpage";
import { Link } from "react-scroll";
import Logo from "../assets/logo.png";

const Navbar = ({ fullpageApi }) => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  return (
    <div className="fixed w-full  h-[80px] flex justify-center z-50">
      <div className=" w-[90%] flex justify-between items-center px-4  text-white z-10 border-b-2  ">
        <div>
          <Link to="home" smooth={true} duration={500}>
            <img
              src={Logo}
              alt="Logo Image"
              style={{ width: "50px" }}
              className="cursor-pointer"
            />
          </Link>
        </div>

        <ul className="hidden md:flex w-1/6 justify-between">
          <li className="cursor-pointer" onClick={() => fullpageApi.moveTo(1)}>
            Home
          </li>
          <li className="cursor-pointer" onClick={() => fullpageApi.moveTo(2)}>
            Contact
          </li>
          <li className="cursor-pointer" onClick={() => fullpageApi.moveTo(3)}>
            Team
          </li>
        </ul>

        {/* Hamburger */}
        <div onClick={handleClick} className="md:hidden z-10">
          {!nav ? (
            <FaBars data-aos="flip-left" />
          ) : (
            <FaTimes data-aos="flip-left" />
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
