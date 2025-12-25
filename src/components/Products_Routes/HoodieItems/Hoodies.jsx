import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import Hoodie from "./Hoodie";
import SectionTitle from "../../SectionTitle/SectionTitle";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

const Hoodies = () => {
  const [hoodies, setHoodies] = useState([]);
  const sectionTitleRef = useRef();
  const cardsRef = useRef();

  useEffect(() => {
    axios.get("/products_1.json").then((res) => {
      const hoodieItem = res.data.filter((item) => item.category === "Hoodies");
      setHoodies(hoodieItem);
    });
  }, []);

  useGSAP(() => {
    gsap.from(sectionTitleRef.current, {
      x: -200,
      opacity: 0,
      duration: 1,
      scrollTrigger: {
        trigger: sectionTitleRef.current,
        start: "top 80%",
      },
    });

    gsap.from(cardsRef.current, {
      x: 200,
      opacity: 0,
      duration: 1,
      scrollTrigger: {
        trigger: cardsRef.current,
        start: "top 80%",
      },
    });
  }, []);

  return (
    <div className="flex flex-col lg:flex-row items-center justify-between px-4 sm:px-8 md:px-20 lg:px-56 mt-8 sm:mt-12 md:mt-30 lg:mt-50">
      {/* Title at top for small/medium devices, left for large */}
      <div className="order-first lg:order-none mb-6 sm:mb-8 md:mb-10 lg:mb-0" ref={sectionTitleRef}>
        <SectionTitle title={"Hoodies"} />
      </div>
      
      <div
        ref={cardsRef}
        className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 sm:gap-3 md:gap-2 mx-4 sm:mx-6 md:mx-8 lg:mx-10 w-full lg:w-auto"
      >
        {hoodies.map((hoodie) => (
          <Hoodie key={hoodie.id} hoodie={hoodie} />
        ))}
      </div>
    </div>
  );
};

export default Hoodies;