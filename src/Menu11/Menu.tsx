import ShowProduct from "./ShowProduct.tsx";
import francais from "../assets/francais.png";
import english from "../assets/english.png";
import logo from "../assets/LOGO_L'IMPOND.png";

import { useEffect, useState } from "react";

function Menu11({
  productsFrench,
  productsEnglish,
}: {
  productsFrench: any;
  productsEnglish: any;
}) {
  const [products, setProducts] = useState(productsFrench);
  const [language, setLanguage] = useState("francais");
  const [isVisible, setIsVisible] = useState(false);

  const changeLanguage = (language: string) => {
    if (language === "francais") {
      setProducts(productsFrench);
      setLanguage("francais");
    } else {
      setProducts(productsEnglish);
      setLanguage("english");
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <div className="relative h-[40vh] flex items-center justify-center">
        <video
          className="absolute top-0 left-0 w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
        >
          <source
            src="https://media.istockphoto.com/id/1594742918/fr/vid%C3%A9o/le-chef-pr%C3%A9pare-des-filets-de-thon-pan%C3%A9s-dans-la-cuisine-du-restaurant.mp4?s=mp4-640x640-is&k=20&c=9CM7Ij-MSEooZ9X2Zjh1VmZ3Lpy7XjWv1yT1LcHEqno="
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
        <div className="absolute top-5 right-5 flex gap-2">
          <div
            className={`w-8 h-8 rounded-full overflow-hidden ${
              language === "english" ? "" : "border-2 border-white"
            }`}
            onClick={() => {
              changeLanguage("francais");
            }}
          >
            <img
              src={francais}
              alt="francais"
              className="w-full h-full object-cover"
            />
          </div>
          <div
            className={`w-8 h-8 rounded-full overflow-hidden ${
              language === "english" ? "border-2 border-white" : ""
            }`}
            onClick={() => {
              changeLanguage("english");
            }}
          >
            <img
              src={english}
              alt="english"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        <p className="text-5xl font-bold text-white bg-black/50 p-2 rounded-2xl w-[80%] absolute">
          <img src={logo} alt="logo" />
        </p>
      </div>
      {products.map((category: any, index: number) => (
        <div key={index}>
          <div className="text-center my-5">
            <p className="text-2xl underline" id={category.type}>
              {category.type}
            </p>
          </div>
          <div className="grid">
            {category.products.map((product: any, idx: string) => (
              <ShowProduct key={idx} {...product} />
            ))}
          </div>
        </div>
      ))}
      {isVisible && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="fixed bottom-5 right-5 bg-black p-2 rounded-full shadow-lg transition-opacity duration-300"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-8 h-8"
          >
            <polyline points="18 15 12 9 6 15"></polyline>
          </svg>
        </button>
      )}
    </>
  );
}

export default Menu11;
