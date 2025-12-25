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
      "#heroTitle",
      {
        opacity: 0,
      },
      {
        y: -100,
        opacity: 1,
        duration: 1,
      }
    );

    gsap.fromTo(
      "#heroSubtitle",
      {
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
      <div className="flex items-center justify-center px-4 md:px-16">
        <div className="mt-40 md:mt-60 text-center md:text-left">
          <h1
            id="heroTitle"
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold"
          >
            GSAP Fashions <br />{" "}
            <span className="text-2xl sm:text-xl md:text-2xl lg:text-3xl">
              and
            </span>{" "}
            Electronic Devices
          </h1>
          <h1
            id="heroSubtitle"
            className="text-sm sm:text-base md:text-xl mt-3 md:mt-5"
          >
            Find your daily usage products from{" "}
            <span className="text-indigo-500 pacifico-regular">GSAP </span>{" "}
            <span className="text-orange-400 pacifico-regular">Fashion</span> in
            the best price.
          </h1>
        </div>
      </div>

      <div className="mt-8 md:mt-12">
        <video
          ref={videoRef}
          className="w-full h-auto object-cover"
          src="/hero.mp4"
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
