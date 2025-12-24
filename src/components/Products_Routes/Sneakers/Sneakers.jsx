import axios from "axios";
import React, { useEffect, useState } from "react";
import SectionTitle from "../../SectionTitle/SectionTitle";
import Sneaker from "./Sneaker";

const Sneakers = () => {
  const [sneakers, setSneakers] = useState([]);

  useEffect(() => {
    axios.get("/products.json").then((res) => {
      const sneakerItem = res.data.filter((item) => item.category === "Sneakers");
      setSneakers(sneakerItem);
    });
  }, []);

  return (
    <div>
      <SectionTitle title={"Sneakers"}></SectionTitle>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-2 mx-10">
        {sneakers.map((sneaker) => (
          <Sneaker key={sneaker.id} sneaker={sneaker}></Sneaker>
        ))}
      </div>
    </div>
  );
};

export default Sneakers;
