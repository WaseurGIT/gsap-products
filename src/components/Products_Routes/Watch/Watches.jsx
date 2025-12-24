import axios from "axios";
import React, { useEffect, useState } from "react";
import SectionTitle from "../../SectionTitle/SectionTitle";
import Watch from "./Watch";

const Watches = () => {
  const [watches, setWatches] = useState([]);

  useEffect(() => {
    axios.get("/products.json").then((res) => {
      const watchItem = res.data.filter(
        (item) => item.category === "Analog Hand Watch"
      );
      setWatches(watchItem);
    });
  }, []);

  return (
    <div>
      <SectionTitle title={"Watches"}></SectionTitle>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2 mx-10">
        {watches.map((watch) => (
          <Watch key={watch.id} watch={watch}></Watch>
        ))}
      </div>
    </div>
  );
};

export default Watches;
