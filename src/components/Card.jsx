import React from "react";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";

const Card = ({ review }) => {
  return (
    <>
      <div className="relative flex flex-col">
        <div className="absolute top-[-7rem] z-10 mx-auto">
          <img
            className="rounded-full aspect-square h-[140px] w-[140px] z-50"
            src={review.image}
          />
          <div className="h-[140px] w-[140px] bg-violet-500 rounded-full absolute top-[-6px] left-[10px] z-[-10] "></div>
        </div>
        <div className="text-2xl font-semibold tracking-wider text-center mt-7 capitalised ">
          <p>{review.name}</p> 
        </div>
        <div className="text-sm text-center uppercase text-violet-300">
          <p>{review.job}</p>
        </div>
        <div className="mx-auto mt-5 text-violet-400">
          <FaQuoteLeft />
        </div>
        <div className="mt-4 text-center text-slate-500">
          <p>{review.text}</p>
        </div>
        <div className="mx-auto mt-5 text-violet-400">
          <FaQuoteRight />
        </div>
      </div>
    </>
  );
};

export default Card;
