import ShowProduct from "./ShowProduct.tsx";
import francais from "../assets/francais.png";
import english from "../assets/english.png";
import logo from "../assets/LOGO_L'IMPOND.png";

import { useEffect, useState } from "react";

function Menu8({
  productsFrench,
  productsEnglish,
}: {
  productsFrench: any;
  productsEnglish: any;
}) {
  const [products, setProducts] = useState(productsFrench);
  const [language, setLanguage] = useState("francais");
  const [isVisible, setIsVisible] = useState(false);
  const [selectedSpecifications, setSelectedSpecifications] = useState<
    string[]
  >([]);

  const specificationListFrancais = [
    "Végétarien",
    "Viande",
    "Poisson",
    "Sans gluten",
  ];
  const specificationListEnglish = [
    "Vegetarian",
    "Meat",
    "Fish",
    "Gluten-free",
  ];

  const toggleSpecification = (spec: string) => {
    setSelectedSpecifications((prev) =>
      prev.includes(spec) ? prev.filter((s) => s !== spec) : [...prev, spec]
    );
  };

  const changeLanguage = (language: string) => {
    if (language === "francais") {
      setProducts(productsFrench);
      setLanguage("francais");
    } else {
      setProducts(productsEnglish);
      setLanguage("english");
    }
    setSelectedSpecifications([]);
  };

  const getFilteredCategories = (
    products: any[],
    selectedSpecifications: string[]
  ) => {
    return products
      .map((category: any) => {
        const filteredProducts = category.products.filter(
          (product: any) =>
            selectedSpecifications.length === 0 ||
            selectedSpecifications.every((s: string) =>
              product.specification.includes(s)
            )
        );
        return { ...category, filteredProducts };
      })
      .filter((category: any) => category.filteredProducts.length > 0);
  };

  const filteredCategories = getFilteredCategories(
    products,
    selectedSpecifications
  );

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 200);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <div className="h-[40vh] flex items-center justify-center bg-[url(../restaurant.jpg)] bg-no-repeat bg-cover bg-center">
        <div className="absolute top-5 right-5 flex gap-2">
          {[
            { img: francais, lang: "francais" },
            { img: english, lang: "english" },
          ].map(({ img, lang }) => (
            <div
              key={lang}
              className={`w-8 h-8 rounded-full overflow-hidden cursor-pointer ${
                language === lang ? "border-2 border-white" : ""
              }`}
              onClick={() => changeLanguage(lang)}
            >
              <img
                src={img}
                alt={lang}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
        <p className="text-5xl font-bold text-white bg-black/50 p-2 rounded-2xl w-[80%]">
          <img src={logo} alt="logo" />
        </p>
      </div>

      <div className="flex justify-start bg-white shadow-md sticky top-0 z-50 overflow-x-auto whitespace-nowrap p-2">
        {(language === "francais"
          ? specificationListFrancais
          : specificationListEnglish
        ).map((spec: string) => (
          <button
            key={spec}
            className={`text-xl p-2 m-2 border-2 rounded-2xl ${
              selectedSpecifications.includes(spec) ? "bg-gray-200" : ""
            }`}
            onClick={() => {
              toggleSpecification(spec);
              const section = document.getElementById(spec);
              if (section) {
                const y =
                  section.getBoundingClientRect().top + window.scrollY - 80;
                window.scrollTo({ top: y, behavior: "smooth" });
              }
            }}
          >
            {spec}
          </button>
        ))}
      </div>

      {filteredCategories.length === 0 ? (
        <div className="text-center my-10 text-xl font-semibold">
          Pas de produit avec ces spécifications.
        </div>
      ) : (
        filteredCategories.map((category: any, index: number) => (
          <div key={index}>
            <div className="text-center my-5">
              <p className="text-2xl underline" id={category.type}>
                {category.type}
              </p>
            </div>
            <div className="grid justify-center">
              {category.filteredProducts.map((product: any, idx: number) => (
                <ShowProduct key={idx} {...product} index={idx} />
              ))}
            </div>
          </div>
        ))
      )}

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

export default Menu8;
