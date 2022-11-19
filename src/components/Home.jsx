import React from "react";
import Phone from "../assets/iphone2.png";
import Backimage from "../assets/bg.png";
import Navbar from "./Navbar";

const Home = ({fullpageApi}) => {
  return (
    <>
      <Navbar fullpageApi={fullpageApi}/>
    <div className="min-h-screen w-full h-full  flex justify-center items-center bg-cover" style={{ backgroundImage: `url(${Backimage})` }}>
      <div className="min-h-screen w-full flex justify-center items-center bg-black bg-opacity-30 bg-cover">
      <div className="w-[90%] mt-32 md:mt-0 md:flex items-center justify-center ">
        <div className="flex-col h-full justify-center w-full  text-white">
          <p className="text-6xl font-sans outlinedFont" >It is time to ...</p>
          <p className="text-7xl font-sans	font-bold curso">TRACK YOUR TRADES</p>
          <button className="px-4 py-2 rounded-lg bg-gradient-to-r from-[#185818a1] to-[#008000A1] hover:bg-gradient-to-l my-12">JOIN NOW</button>
        </div>
        <div className="hidden md:block h-full  text-white ">
          <img src={Phone} style={{ width: "1000px" }}/>
        </div>
      </div>
    </div>
    </div>
    </>
  );
};

export default Home;
