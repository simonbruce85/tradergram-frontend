import React from "react";
import Phone from "../assets/iphone.png";

const Home = () => {
  return (
    <div className="min-h-screen w-full h-full  flex justify-center items-center bg-black bg-opacity-40 '">
      <div className="w-[90%] mt-32 md:mt-0 md:flex items-center justify-center border-black border-2">
        <div className="flex-col h-full justify-center w-full  text-white border-4 border-yellow-50">
          <p className="text-5xl">It is time to...</p>
          <p className="text-7xl">TRACK YOUR TRADES</p>
          <button className="">JOIN NOW</button>
        </div>
        <div className="h-full  text-white border-4 border-yellow-50">
          <img src={Phone} style={{ width: "1000px" }}/>
        </div>
      </div>
    </div>
  );
};

export default Home;
