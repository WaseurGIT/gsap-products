import axios from "axios";
import React, { useEffect, useState } from "react";
import SectionTitle from "../../SectionTitle/SectionTitle";
import Torch from "./Torch";

const Torches = () => {
  const [torches, setTorches] = useState([]);

  useEffect(() => {
    axios.get("/products.json").then((res) => {
      const torchItem = res.data.filter(
        (item) => item.category === "Emergency Torch Lights"
      );
      setTorches(torchItem);
    });
  }, []);

  return (
    <div>
      <SectionTitle title={"Torch Lights"}></SectionTitle>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-2 mx-10">
        {torches.map((torch) => (
          <Torch key={torch.id} torch={torch}></Torch>
        ))}
      </div>
    </div>
  );
};

export default Torches;
