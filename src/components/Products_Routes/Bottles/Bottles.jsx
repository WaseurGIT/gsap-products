import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import SectionTitle from "../../SectionTitle/SectionTitle";
import Bottle from "./Bottle";
import { useGSAP } from "@gsap/react";
import gsap from "gsap/all";

const Bottles = () => {
  const [bottles, setBottles] = useState([]);

  const cardsRef = useRef();
  const sectionTitleRef = useRef();

  useGSAP(() => {
    gsap.from(cardsRef.current, {
      x: -200,
      opacity: 0,
      duration: 1,
      scrollTrigger: {
        trigger: cardsRef.current,
        start: "top 80%",
      },
    });
    gsap.from(sectionTitleRef.current, {
      x: 200,
      opacity: 0,
      duration: 1,
      scrollTrigger: {
        trigger: sectionTitleRef.current,
        start: "top 80%",
      },
    });
  }, []);

  useEffect(() => {
    axios.get("/products_1.json").then((res) => {
      const bottleItem = res.data.filter(
        (item) => item.category === "Water Bottles"
      );
      setBottles(bottleItem);
    });
  }, []);

  return (
    <div className="flex flex-col lg:flex-row items-center justify-center px-4 sm:px-8 md:px-20 lg:px-56 mt-8 sm:mt-12 md:mt-30 lg:mt-50">
      <div
        ref={cardsRef}
        className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 sm:gap-3 md:gap-2 mx-4 sm:mx-6 md:mx-8 lg:mx-10 w-full lg:w-auto"
      >
        {bottles.map((bottle) => (
          <Bottle key={bottle.id} bottle={bottle}></Bottle>
        ))}
      </div>
      
      {/* Single SectionTitle component with responsive positioning */}
      <div 
        ref={sectionTitleRef}
        className="order-first lg:order-none mb-6 sm:mb-8 md:mb-10 lg:mb-0 lg:ml-8"
      >
        <SectionTitle title={"Water Bottle"}></SectionTitle>
      </div>
    </div>
  );
};

export default Bottles;