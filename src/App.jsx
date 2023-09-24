import { useState } from "react";
import Testimonial from "./components/Testimonial";
import reviews from "./Data";

function App() {
  return (
    <>
      <div className="flex flex-col items-center justify-center bg-gray-200 h-[100vh] w-[100vw] ">
        <div className="text-center">
          <h1 className="text-4xl font-bold">Our Testimonials</h1>
          <div className="bg-violet-400 h-[4px] w-1/5 mt-1 mx-auto"></div>
          <Testimonial reviews={reviews} />
        </div>
      </div>
    </>
  );
}

export default App;
