import React from "react";
import { FaArrowUpLong } from "react-icons/fa6";

function LandingPage() {
  return (
    <div className="w-full h-screen bg-zinc-900 pt-1">
      <div className="textstructure mt-40 px-20">
        {["We create", "eye-opening", "presentations"].map((item, index) => {
          return (
            <div className="masker">
              <h1 className="text-8xl uppercase leading-none tracking-tighter font-semibold element-founders leading-[5.6vw]">
                {item}
              </h1>
            </div>
          );
        })}
      </div>
      <div className="border-t-[1px] border-zinc-700 mt-32 flex justify-between items-center py-5 px-20">
        {[
          "For public and private companies",
          "From the first pitch to IPO",
        ].map((item, index) => (
          <p className="text-md font-light tracking-tighter leading-none">
            {item}
          </p>
        ))}
        <div className="start flex items-center gap-1">
          <div className="px-5 py-2 border-[1px] border-zinc-500 rounded-full font-medium uppercase">
            Start the Project
          </div>
          <div className="w-10 h-10 border-[1px] rounded-full border-zinc-500 flex items-center justify-center">
            <span className=" rotate-[45deg]">
              <FaArrowUpLong />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
