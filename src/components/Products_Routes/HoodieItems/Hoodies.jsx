import axios from "axios";
import React, { useEffect, useState } from "react";
import Hoodie from "./Hoodie";
import SectionTitle from "../../SectionTitle/SectionTitle";

const Hoodies = () => {
  const [hoodies, setHoodies] = useState([]);

  useEffect(() => {
    axios.get("/products.json").then((res) => {
      const hoodieItem = res.data.filter((item) => item.category === "Hoodies");
      setHoodies(hoodieItem);
    });
  }, []);

  return (
    <div>
      <SectionTitle title={"Hoodies"}></SectionTitle>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2 mx-10">
        {hoodies.map((hoodie) => (
          <Hoodie key={hoodie.id} hoodie={hoodie}></Hoodie>
        ))}
      </div>
    </div>
  );
};

export default Hoodies;
