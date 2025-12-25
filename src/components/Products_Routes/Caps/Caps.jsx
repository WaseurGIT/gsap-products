import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import SectionTitle from "../../SectionTitle/SectionTitle";
import Cap from "./Cap";
import { useGSAP } from "@gsap/react";
import gsap from "gsap/all";

const Caps = () => {
  const [caps, setCaps] = useState([]);

  const cardsRef = useRef();
  const sectionTitleRef = useRef();

  useGSAP(() => {
    gsap.from(cardsRef.current, {
      x: 200,
      opacity: 0,
      duration: 1,
      scrollTrigger: {
        trigger: cardsRef.current,
        start: "top 80%",
      },
    });

    gsap.from(sectionTitleRef.current, {
      x: -200,
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
      const capItem = res.data.filter(
        (item) => item.category === "Winter Caps"
      );
      setCaps(capItem);
    });
  }, []);

  return (
    <div className="flex items-center justify-between px-56 mt-50">
      <SectionTitle ref={sectionTitleRef} title={"Winter Caps"}></SectionTitle>
      <div
        ref={cardsRef}
        className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-2 mx-10"
      >
        {caps.map((cap) => (
          <Cap key={cap.id} cap={cap}></Cap>
        ))}
      </div>
    </div>
  );
};

export default Caps;
