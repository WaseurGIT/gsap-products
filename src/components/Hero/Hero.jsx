import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { useEffect, useRef } from "react";

const Hero = () => {
  const videoRef = useRef();

  useEffect(() => {
    if (videoRef.current) videoRef.current.playbackRate = 2;
  }, []);

  useGSAP(() => {
    gsap.fromTo(
      "#title",
      {
        y: 200,
        opacity: 0,
      },
      {
        y: -100,
        opacity: 1,
        duration: 1,
      }
    );

    gsap.fromTo(
      "#subtitle",
      {
        y: 200,
        opacity: 0,
      },
      {
        y: -100,
        opacity: 1,
        duration: 2,
        delay: 0.04,
      }
    );
  }, []);

  return (
    <div className="h-dvh">
      <div className="flex items-center justify-center">
        <div className="mt-60">
          <h1 id="title" className="text-5xl">
            GSAP Fashions <br /> <span className="text-2xl">and</span>{" "}
            Electronic Devices
          </h1>
          <h1 id="subtitle" className="text-xl mt-5">
            Find your daily usage products from{" "}
            <span className="text-indigo-500 pacifico-regular ">GASP </span>{" "}
            <span className="text-orange-400 pacifico-regular ">Fashion</span>{" "}
            in a best price.{" "}
          </h1>
        </div>
      </div>
      <div>
        <video
          ref={videoRef}
          className="w-full"
          src="/public/hero.mp4"
          alt="hero"
          autoPlay
          muted
          playsInline
        />
      </div>
    </div>
  );
};

export default Hero;
