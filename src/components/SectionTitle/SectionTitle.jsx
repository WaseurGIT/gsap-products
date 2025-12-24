import React from "react";

const SectionTitle = ({ title }) => {
  return (
    <div className="flex justify-center my-12">
      <h1 className="text-4xl text-orange-400 font-pacifico relative after:content-[''] after:block after:w-24 after:h-1 after:bg-orange-400 after:rounded-full after:mt-4">
        {title}
      </h1>
    </div>
  );
};

export default SectionTitle;
