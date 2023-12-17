"use client";
import React from "react";
import Countdown from "react-countdown";

const Completionist = () => (
  <span className="text-lg text-green-500">The countdown is complete!</span>
);

const CountdownComponent = (props) => {
  // Set the target countdown date
  const targetDate = new Date("2024-02-14");

  // Renderer function
  const renderer = ({ days, hours, minutes, seconds, completed }) => {
    if (completed) {
      // Render a completed state
      return <Completionist />;
    } else {
      // Render a countdown
      return (
        <div
          className={` justify-centre space-x-[36px]  py-4 px-2 md:px-6 rounded font-sans w-fit ${props.style} `}>
          <div className="text-4xl text-center text-amber-600 font-bold ">
            {days}
            <div className=" text-black text-lg font-thin">days</div>
          </div>
          <div className="text-4xl text-center text-amber-600 font-bold">
            {hours}
            <div className="text-black  text-lg font-thin font-medium">hours</div>
          </div>
          <div className="text-4xl text-center text-amber-600 font-bold">
            {minutes}
            <div className="text-black  text-lg font-thin"> minutes </div>
          </div>
          <div className="text-4xl text-center text-amber-600 font-bold ">
            {seconds}
            <div className="text-black  text-lg font-thin"> seconds </div>
          </div>
        </div>
      );
    }
  };

  return <Countdown date={targetDate} renderer={renderer} />;;
};

export default CountdownComponent;
