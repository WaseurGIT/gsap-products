import axios from "axios";
import React, { useEffect, useState } from "react";
import SectionTitle from "../../SectionTitle/SectionTitle";
import TravelBag from "./TravelBag";

const TravelBags = () => {
  const [travelBags, setTravelBags] = useState([]);

  useEffect(() => {
    axios.get("/products.json").then((res) => {
      const travelBagsItem = res.data.filter(
        (item) => item.category === "Travel Bags"
      );
      setTravelBags(travelBagsItem);
    });
  }, []);

  return (
    <div>
      <SectionTitle title={"Travel Bags"}></SectionTitle>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-2 mx-10">
        {travelBags.map((travelBag) => (
          <TravelBag key={travelBag.id} travelBag={travelBag}></TravelBag>
        ))}
      </div>
    </div>
  );
};

export default TravelBags;
