import ShowProduct from "./ShowProduct.tsx";
import francais from "../assets/francais.png";
import english from "../assets/english.png";
import logo from "../assets/LOGO_L'IMPOND.png";

import { useEffect, useState } from "react";

function Menu9({
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
      <div className="h-[40vh] flex items-center justify-center bg-[url(../restaurant.jpg)] bg-no-repeat bg-cover bg-center">
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
        <p className="text-5xl font-bold text-white bg-black/50 p-2 rounded-2xl w-[80%]">
          <img src={logo} alt="logo" />
        </p>
      </div>

      <div className="h-screen overflow-y-scroll snap-y snap-mandatory">
        {products.map((category: any, index: number) => (
          <div key={index}>
            {category.products.map((product: any, idx: number) => (
              <div key={idx} className="snap-start">
                <ShowProduct {...product} />
              </div>
            ))}
          </div>
        ))}
      </div>
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

export default Menu9;
