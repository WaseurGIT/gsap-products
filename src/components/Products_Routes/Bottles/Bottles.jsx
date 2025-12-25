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
    <div className="flex items-center justify-center px-56 mt-50">
      <div
        ref={cardsRef}
        className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-2 mx-10"
      >
        {bottles.map((bottle) => (
          <Bottle key={bottle.id} bottle={bottle}></Bottle>
        ))}
      </div>
      <SectionTitle ref={sectionTitleRef} title={"Water Bottle"}></SectionTitle>
    </div>
  );
};

export default Bottles;
