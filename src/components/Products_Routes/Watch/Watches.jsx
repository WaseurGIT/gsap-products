import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import SectionTitle from "../../SectionTitle/SectionTitle";
import Watch from "./Watch";
import { useGSAP } from "@gsap/react";
import gsap, { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger)

const Watches = () => {
  const [watches, setWatches] = useState([]);
  const sectionTitleRef = useRef();
  const cardsRef = useRef();

  useEffect(() => {
    axios.get("/products_1.json").then((res) => {
      const watchItem = res.data.filter(
        (item) => item.category === "Analog Hand Watch"
      );
      setWatches(watchItem);
    });
  }, []);

  useGSAP(() => {
    gsap.from(sectionTitleRef.current, {
      opacity: 0,
      x: 200,
      duration: 1,
      scrollTrigger: {
        trigger: sectionTitleRef.current,
        start: "top 80%",
        end: "",
      },
    });

    gsap.from(cardsRef.current, {
      opacity: 0,
      x: -200,
      duration: 1,
      scrollTrigger: {
        trigger: cardsRef.current,
        start: "top 80%",
        end: "",
      },
    });
  }, []);

  return (
    <div className="flex flex-col lg:flex-row items-center justify-center px-4 sm:px-8 md:px-20 lg:px-56 mt-8 sm:mt-12 md:mt-30 lg:mt-50">
      <div
        ref={cardsRef}
        className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 sm:gap-3 md:gap-2 mx-4 sm:mx-6 md:mx-8 lg:mx-10 w-full lg:w-auto"
      >
        {watches.map((watch) => (
          <Watch key={watch.id} watch={watch}></Watch>
        ))}
      </div>
      
      {/* Title at top for small/medium devices, right for large */}
      <div className="order-first lg:order-none mb-6 sm:mb-8 md:mb-10 lg:mb-0 lg:ml-8" ref={sectionTitleRef}>
        <SectionTitle title={"Watches"}></SectionTitle>
      </div>
    </div>
  );
};

export default Watches;