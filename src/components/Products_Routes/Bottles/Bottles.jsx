import axios from "axios";
import React, { useEffect, useState } from "react";
import SectionTitle from "../../SectionTitle/SectionTitle";
import Bottle from "./Bottle";

const Bottles = () => {
  const [bottles, setBottles] = useState([]);

  useEffect(() => {
    axios.get("/products.json").then((res) => {
      const bottleItem = res.data.filter(
        (item) => item.category === "Water Bottles"
      );
      setBottles(bottleItem);
    });
  }, []);

  return (
    <div>
      <SectionTitle title={"Water Bottle"}></SectionTitle>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-2 mx-10">
        {bottles.map((bottle) => (
          <Bottle key={bottle.id} bottle={bottle}></Bottle>
        ))}
      </div>
    </div>
  );
};

export default Bottles;
