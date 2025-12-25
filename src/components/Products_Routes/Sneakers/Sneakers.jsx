import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import SectionTitle from "../../SectionTitle/SectionTitle";
import Sneaker from "./Sneaker";
import { useGSAP } from "@gsap/react";
import gsap from "gsap/all";

const Sneakers = () => {
  const [sneakers, setSneakers] = useState([]);

  const sectionTitleRef = useRef();
  const cardsRef = useRef();

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

  useEffect(() => {
    axios.get("/products_1.json").then((res) => {
      const sneakerItem = res.data.filter(
        (item) => item.category === "Sneakers"
      );
      setSneakers(sneakerItem);
    });
  }, []);

  return (
    <div className="flex items-center justify-between px-56 mt-50">
      <SectionTitle ref={sectionTitleRef} title={"Sneakers"}></SectionTitle>
      <div
        ref={cardsRef}
        className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-2 mx-10"
      >
        {sneakers.map((sneaker) => (
          <Sneaker key={sneaker.id} sneaker={sneaker}></Sneaker>
        ))}
      </div>
    </div>
  );
};

export default Sneakers;
