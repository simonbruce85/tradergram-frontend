import React from "react";
import Backimage from "../assets/bg.png";
import Navbar from "./Navbar";
import fullpageApi from "@fullpage/react-fullpage";

const Contact = ({ fullpageApi }) => {
  return (
    <>
      <Navbar fullpageApi={fullpageApi} />
      <div
        className="min-h-screen w-full bg-cover"
        style={{ backgroundImage: `url(${Backimage})` }}
      >
        <div className="min-h-screen h-screen w-full flex justify-center items-center bg-black bg-opacity-30 bg-cover">
          <div className="w-[90%] h-[80%] relative flex items-center justify-center py-4">
            <div className="outlinedFont hidden lg:block text-gray-200 -rotate-90  text-6xl absolute left-0 bottom-20 -translate-y-6 -translate-x-20">
              Contact Us
            </div>
            <div className="w-full h-full mt-16 md:mt-4 flex items-center justify-center lg:pt-12 ">
              <div className="flex flex-col p-6 md:p-12 justify-center items-center w-full md:max-w-[60%] lg:max-w-[35%] h-full px-4 bg-black bg-opacity-70 rounded-2xl text-gray-300 ">
                <div className="mb-4 md:mb-8 px-8 md:px-0  lg:pb-6 max-w-[600px] flex flex-col justify-start items-start w-full">
                  <h1 className="font-bold text-xl ">Contact Us</h1>
                  <p className="text-lg">
                    We'll back to you as soon as possible
                  </p>
                </div>
                <form
                  method="POST"
                  data-netlify="true"
                  data-netlify-recaptcha="true"
                  className="flex px-8 md:px-0 flex-col w-full max-w-[600px] "
                >
                  <input type="hidden" name="form-name" value="contact" />
                  <input
                    className="bg-transparent border-b-2 border-[#185818a1] p-2 text-[#ccd6f6]"
                    type="text"
                    placeholder="Name"
                    name="name"
                  />
                  <input
                    className="my-4 bg-transparent border-b-2 border-[#185818a1] p-2 text-[#ccd6f6]"
                    type="email"
                    placeholder="Email"
                    name="email"
                  />
                  <textarea
                    className="bg-transparent border-b-2 border-[#185818a1] p-2 text-[#ccd6f6] resize-none"
                    name="message"
                    rows="6"
                    placeholder="Message"
                  ></textarea>
                  <div className="flex justify-center pt-2">
                    <button
                      type="submit"
                      className=" p-3 my-2 items-center rounded font-medium bg-gradient-to-r from-[#185818a1] to-[#008000A1] hover:bg-gradient-to-l "
                    >
                      Let's Collaborate
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
