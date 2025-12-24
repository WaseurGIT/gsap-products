import axios from "axios";
import React, { useEffect, useState } from "react";
import SectionTitle from "../../SectionTitle/SectionTitle";
import Cap from "./Cap";

const Caps = () => {
  const [caps, setCaps] = useState([]);

  useEffect(() => {
    axios.get("/products.json").then((res) => {
      const capItem = res.data.filter(
        (item) => item.category === "Winter Caps"
      );
      setCaps(capItem);
    });
  }, []);

  return (
    <div>
      <SectionTitle title={"Winter Caps"}></SectionTitle>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-2 mx-10">
        {caps.map((cap) => (
          <Cap key={cap.id} cap={cap}></Cap>
        ))}
      </div>
    </div>
  );
};

export default Caps;
