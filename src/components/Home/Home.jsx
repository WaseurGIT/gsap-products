import Hero from "../Hero/Hero";
import Bottles from "../Products_Routes/Bottles/Bottles";
import Caps from "../Products_Routes/Caps/Caps";
import Hoodies from "../Products_Routes/HoodieItems/Hoodies";
import LadiesBags from "../Products_Routes/LadiesBag/LadiesBags";
import Sneakers from "../Products_Routes/Sneakers/Sneakers";
import Torches from "../Products_Routes/Torch/Torches";
import TravelBags from "../Products_Routes/TravelBag/TravelBags";
import Watches from "../Products_Routes/Watch/Watches";

const Home = () => {
  return (
    <div>
      <Hero></Hero>
      <Hoodies></Hoodies>
      <Watches></Watches>
      <Sneakers></Sneakers>
      <Bottles></Bottles>
      <Caps></Caps>
      <TravelBags></TravelBags>
      <LadiesBags></LadiesBags>
      <Torches></Torches>
    </div>
  );
};

export default Home;
