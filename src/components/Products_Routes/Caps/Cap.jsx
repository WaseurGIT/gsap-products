import { useGSAP } from "@gsap/react";
import gsap from "gsap/all";
import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";

const Cap = ({ cap }) => {
  const { product_name, price, image } = cap;
  const navigate = useNavigate();

  const cardRef = useRef();
  const nameRef = useRef();
  const priceRef = useRef();
  const tlRef = useRef();

  useGSAP(() => {
    gsap.set([nameRef.current, priceRef.current], {
      opacity: 0,
      y: 20,
    });

    tlRef.current = gsap.timeline({ paused: true });

    tlRef.current
      .to(nameRef.current, {
        opacity: 1,
        y: 0,
        duration: 0.3,
        ease: "power2.out",
      })
      .to(
        priceRef.current,
        {
          opacity: 1,
          y: 0,
          duration: 0.3,
          ease: "power2.out",
        },
        "-=0.15"
      );

    const card = cardRef.current;

    const onEnter = () => tlRef.current.play();
    const onLeave = () => tlRef.current.reverse();

    card.addEventListener("mouseenter", onEnter);
    card.addEventListener("mouseleave", onLeave);

    return () => {
      card.removeEventListener("mouseenter", onEnter);
      card.removeEventListener("mouseleave", onLeave);
    };
  }, []);

  return (
    <div
      ref={cardRef}
      onClick={() => navigate(`/product/${cap.id}`)}
      className="relative w-76 bg-white rounded-lg shadow-lg overflow-hidden transition-transform duration-300 hover:scale-105 cursor-pointer"
    >
      <figure className="flex items-center justify-center p-4">
        <img
          src={image}
          alt={product_name}
          className="w-44 h-44 object-contain"
        />
      </figure>
      <div className="absolute top-4 left-5">
        <h2 ref={nameRef} className="text-xl font-semibold text-gray-800">
          {product_name}
        </h2>
        <p ref={priceRef} className="text-orange-500 text-lg font-bold mt-1">
          ${price}
        </p>
      </div>
    </div>
  );
};

export default Cap;
