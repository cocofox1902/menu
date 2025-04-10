import ShowProduct from "./ShowProduct";
import francais from "../assets/francais.png";
import english from "../assets/english.png";
import logo from "../assets/LOGO_L'IMPOND.png";

import { useEffect, useState } from "react";

function Menu12({
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
      <div className="flex justify-start bg-white shadow-md py-4 sticky top-0 z-50 overflow-x-auto whitespace-nowrap">
        {products.map((category: any, index: number) => (
          <button
            className={`text-2xl px-4 ${
              index === products.length - 1 ? "border-r-0" : "border-r-2"
            }`}
            onClick={() => {
              const element = document.getElementById(category.type);
              if (element) {
                const y =
                  element.getBoundingClientRect().top + window.scrollY + -80;

                window.scrollTo({ top: y, behavior: "smooth" });
              }
            }}
          >
            {category.type}
          </button>
        ))}
      </div>

      {products.map((category: any, index: number) => (
        <div key={index}>
          <div className="text-center my-5">
            <p className="text-2xl underline" id={category.type}>
              {category.type}
            </p>
          </div>
          <div className="grid justify-center">
            {category.products.map((product: any, idx: number) => (
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

export default Menu12;
