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
    <div className="flex items-center justify-center px-56 mt-50">
      <div
        ref={cardsRef}
        className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-2 mx-10"
      >
        {watches.map((watch) => (
          <Watch key={watch.id} watch={watch}></Watch>
        ))}
      </div>
      <SectionTitle ref={sectionTitleRef} title={"Watches"}></SectionTitle>
    </div>
  );
};

export default Watches;
