import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";

const Hoodie = ({ hoodie }) => {
  const { product_name, price, image } = hoodie;

  // ref is used because GSAP needs real dom element
  const cardRef = useRef(null);
  const nameRef = useRef(null);
  const priceRef = useRef(null);
  const tlRef = useRef(null);

  useGSAP(() => {
    // Initial state (hidden)
    gsap.set([nameRef.current, priceRef.current], {
      opacity: 0,
      y: 20,
    });

    // Timeline
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

    // Cleanup
    return () => {
      card.removeEventListener("mouseenter", onEnter);
      card.removeEventListener("mouseleave", onLeave);
    };
  }, []);

  return (
    <div
      ref={cardRef}
      className="relative w-76 bg-white rounded-lg shadow-lg overflow-hidden transition-transform duration-300 hover:scale-105 cursor-pointer"
    >
      {/* Image */}
      <figure className="flex items-center justify-center p-6">
        <img
          src={image}
          alt={product_name}
          className="w-44 h-44 object-contain"
        />
      </figure>

      {/* Text (appears on hover) */}
      <div className="absolute top-5 left-4">
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

export default Hoodie;
