import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { ReactComponent as Linkedin } from "../assets/linkedin.svg";
import { ReactComponent as Github } from "../assets/github.svg";
import { Link } from "react-scroll";
import Logo from "../assets/logo.png";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  return (
    <div className="fixed w-full  h-[80px] flex justify-center">
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
          <li
            data-aos="fade-down"
            data-aos-easing="linear"
            data-aos-duration="300"
          >
            <Link to="home" smooth={true} duration={500}>
              Home
            </Link>
          </li>
          <li
            data-aos="fade-down"
            data-aos-easing="linear"
            data-aos-duration="300"
            data-aos-delay="50"
          >
            <Link to="about" smooth={true} duration={500}>
              About
            </Link>
          </li>
          <li
            data-aos="fade-down"
            data-aos-easing="linear"
            data-aos-duration="300"
            data-aos-delay="100"
          >
            <Link to="work" smooth={true} duration={500}>
              Login
            </Link>
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
