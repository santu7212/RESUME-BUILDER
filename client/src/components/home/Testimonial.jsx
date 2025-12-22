import React from "react";
import Title from "./Title";
import { BookUserIcon } from "lucide-react";

const Testimonial = () => {
  return (
    <div
      id="testimonials"
      className="flex flex-col items-center my-10 scroll-mt-12"
    >
      <div className="flex items-center gap-2 text-sm text-blue-800 bg-blue-400/10 border border-indigo-200 rounded-full px-6 py-1.5">
        <BookUserIcon  className="size-4.5 stroke-blue-500"/>
        <span>Testimonials</span>
      </div>
      <Title
        title="Don't just take our word"
        description="Hear what ouur users say about us. we're always lookin for ways to improve. If you have a positive experience with us, leave a review"
      />
    </div>
  );
};

export default Testimonial;
