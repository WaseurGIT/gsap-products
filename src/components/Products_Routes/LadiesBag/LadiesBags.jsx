import axios from "axios";
import React, { useEffect, useState } from "react";
import SectionTitle from "../../SectionTitle/SectionTitle";
import LadiesBag from "./LadiesBag";

const LadiesBags = () => {
  const [ladiesBag, setLadiesBag] = useState([]);

  useEffect(() => {
    axios.get("/products.json").then((res) => {
      const ladiesBagItem = res.data.filter(
        (item) => item.category === "Ladies Bags"
      );
      setLadiesBag(ladiesBagItem);
    });
  }, []);

  return (
    <div>
      <SectionTitle title={"Ladies Hand Bags"}></SectionTitle>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-2 mx-10">
        {ladiesBag.map((lBag) => (
          <LadiesBag key={lBag.id} lBag={lBag}></LadiesBag>
        ))}
      </div>
    </div>
  );
};

export default LadiesBags;
