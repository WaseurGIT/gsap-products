import React, { forwardRef } from "react";
import "./SectionTitle.css";

const SectionTitle = forwardRef(({ title }, ref) => {
  return (
    <div className="flex justify-center my-12">
      <h1
        ref={ref}
        className="text-5xl text-orange-400 pacifico-regular relative
        after:content-[''] after:block after:w-24 after:h-1
        after:bg-orange-400 after:rounded-full after:mt-4"
      >
        {title}
      </h1>
    </div>
  );
});

export default SectionTitle;
