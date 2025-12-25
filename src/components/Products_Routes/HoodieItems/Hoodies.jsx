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
    <div className="flex items-center justify-between px-56">
      <SectionTitle ref={sectionTitleRef} title={"Hoodies"}></SectionTitle>
      <div
        ref={cardsRef}
        className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-2 mx-10"
      >
        {hoodies.map((hoodie) => (
          <Hoodie key={hoodie.id} hoodie={hoodie}></Hoodie>
        ))}
      </div>
    </div>
  );
};

export default Hoodies;
