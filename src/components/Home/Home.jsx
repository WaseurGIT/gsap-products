import Hero from "../Hero/Hero";
import Bottles from "../Products_Routes/Bottles/Bottles";
import Caps from "../Products_Routes/Caps/Caps";
import Hoodies from "../Products_Routes/HoodieItems/Hoodies";
import Sneakers from "../Products_Routes/Sneakers/Sneakers";
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
    </div>
  );
};

export default Home;
