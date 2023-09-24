import React from "react";
import { useState } from "react";
import Card from "./Card";
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";

const Testimonial = ({ reviews }) => {
  const [index, setIndex] = useState(0);
  function leftShiftHandler() {
    if (index === 0) {
      setIndex(reviews.length - 1);
    } else setIndex(index - 1);
  }
  function rightShiftHandler() {
    if (index === reviews.length - 1) {
      setIndex(0);
    } else setIndex(index + 1);
  }
  function surpriseHandler() {
    const randomIndex = Math.floor(Math.random() * reviews.length);
    setIndex(randomIndex);
  }
  return (
    <div className=" flex flex-col justify-center  items-center w-[85vw] md:w-[700px] bg-white mt-10 p-10 transition-all duration-700 hover:shadow-xl rounded-md">
      <Card review={reviews[index]} />
      <div className="gap-3 mx-auto mt-5 text-3xl font-bold text-violet-400 ">
        <button
          onClick={leftShiftHandler}
          className="cursor-pointer hover:text-violet-500"
        >
          <FiChevronLeft />
        </button>
        <button
          onClick={rightShiftHandler}
          className="cursor-pointer hover:text-violet-500"
        >
          <FiChevronRight />
        </button>
      </div>
      <div>
        <button
          onClick={surpriseHandler}
          className="px-10 py-2 mt-5 text-lg font-bold text-white transition-all duration-200 rounded-md cursor-pointer bg-violet-400 hover:bg-violet-500 focus:ring focus:ring-violet-900"
        >
          Surprise Me
        </button>
      </div>
    </div>
  );
};

export default Testimonial;
