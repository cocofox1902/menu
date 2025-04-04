import ShowProduct from "./ShowProduct.tsx";
import francais from "../assets/francais.png";
import english from "../assets/english.png";
import salade_1 from "../assets/salade_1.jpg";
import salade_2 from "../assets/salade_2.jpg";
import salade_3 from "../assets/salade_3.jpg";
import salade_4 from "../assets/salade_4.jpg";
import salade_5 from "../assets/salade_5.jpg";
import burger_1 from "../assets/burger_1.jpg";
import burger_2 from "../assets/burger_2.jpg";
import burger_3 from "../assets/burger_3.png";
import burger_4 from "../assets/burger_4.jpg";
import tapas_1 from "../assets/tapas_1.jpg";
import tapas_2 from "../assets/tapas_2.jpg";
import tapas_3 from "../assets/tapas_3.jpg";
import tartine_1 from "../assets/tartine_1.jpg";
import tartine_2 from "../assets/tartine_2.jpg";
import tartine_3 from "../assets/tartine_3.jpg";
import tartine_4 from "../assets/tartine_4.jpg";
import logo from "../assets/LOGO_L'IMPOND.png";

import { useEffect, useState } from "react";

function Menu2() {
  const productsFrench = [
    {
      type: "Salades",
      products: [
        {
          name: "Crottin de chavignol",
          price: "9.50 €",
          description:
            "Salade verte, crottin de Chavignol chaud, noix et miel.",
          image: salade_1,
          specification: ["Végétarien"],
        },
        {
          name: "Parisienne",
          price: "8.90 €",
          description: "Salade, jambon, gruyère, œuf dur et croûtons.",
          image: salade_2,
          specification: ["Viande"],
        },
        {
          name: "Auvergnat",
          price: "10.50 €",
          description: "Salade, bleu d'Auvergne, noix et jambon cru.",
          image: salade_3,
          specification: ["Viande"],
        },
        {
          name: "Italienne",
          price: "11.00 €",
          description: "Salade, tomates, mozzarella, basilic et huile d'olive.",
          image: salade_4,
          specification: ["Végétarien"],
        },
        {
          name: "Océane",
          price: "12.00 €",
          description: "Salade, crevettes, saumon fumé et avocat.",
          image: salade_5,
          specification: ["Poisson", "Sans gluten"],
        },
      ],
    },
    {
      type: "Burgers",
      products: [
        {
          name: "La Biquette",
          price: "13.50 €",
          description: "Burger au chèvre chaud, miel et roquette.",
          image: burger_1,
          specification: ["Végétarien"],
        },
        {
          name: "La Poulette",
          price: "14.00 €",
          description: "Burger au poulet croustillant et sauce barbecue.",
          image: burger_2,
          specification: ["Viande"],
        },
        {
          name: "Le Grand Mamie",
          price: "15.00 €",
          description: "Burger au bœuf, fromage à raclette et oignons confits.",
          image: burger_3,
          specification: ["Viande"],
        },
        {
          name: "Le Vegie",
          price: "12.90 €",
          description:
            "Burger végétarien avec steak de légumes et sauce maison.",
          image: burger_4,
          specification: ["Vegan"],
        },
      ],
    },
    {
      type: "Tapas",
      products: [
        {
          name: "Assiette De Calamars x9",
          price: "7.90 €",
          description: "Calamars frits servis avec une sauce tartare.",
          image: tapas_1,
          specification: ["Poisson"],
        },
        {
          name: "Onions Rings x12",
          price: "6.90 €",
          description: "Rondelles d'oignons croustillantes.",
          image: tapas_2,
          specification: ["Vegan"],
        },
        {
          name: "Sticks de Mozza x12",
          price: "8.00 €",
          description: "Bâtonnets de mozzarella panés et frits.",
          image: tapas_3,
          specification: ["Végétarien"],
        },
      ],
    },
    {
      type: "Tartines",
      products: [
        {
          name: "3 Fromages",
          price: "11.50 €",
          description: "Tartine au fromage de chèvre, bleu et comté.",
          image: tartine_1,
          specification: ["Végétarien"],
        },
        {
          name: "Espagnole",
          price: "10.90 €",
          description: "Tartine au chorizo, tomates et fromage fondu.",
          image: tartine_2,
          specification: ["Viande"],
        },
        {
          name: "Italienne",
          price: "12.50 €",
          description: "Tartine au jambon de Parme, tomates et mozzarella.",
          image: tartine_3,
          specification: ["Viande"],
        },
        {
          name: "Parisienne",
          price: "11.90 €",
          description: "Tartine au jambon blanc, champignons et crème.",
          image: tartine_4,
          specification: ["Viande"],
        },
      ],
    },
  ];

  const productsEnglish = [
    {
      type: "Salads",
      products: [
        {
          name: "Crottin de Chavignol",
          price: "9.50 €",
          description:
            "Green salad, warm Chavignol goat cheese, walnuts, and honey.",
          image: salade_1,
          specification: ["Vegetarian"],
        },
        {
          name: "Parisian",
          price: "8.90 €",
          description:
            "Salad, ham, gruyère cheese, hard-boiled egg, and croutons.",
          image: salade_2,
          specification: ["Meat"],
        },
        {
          name: "Auvergnat",
          price: "10.50 €",
          description: "Salad, Bleu d'Auvergne cheese, walnuts, and cured ham.",
          image: salade_3,
          specification: ["Meat"],
        },
        {
          name: "Italian",
          price: "11.00 €",
          description: "Salad, tomatoes, mozzarella, basil, and olive oil.",
          image: salade_4,
          specification: ["Vegetarian"],
        },
        {
          name: "Ocean",
          price: "12.00 €",
          description: "Salad, shrimp, smoked salmon, and avocado.",
          image: salade_5,
          specification: ["Fish", "Gluten-free"],
        },
      ],
    },
    {
      type: "Burgers",
      products: [
        {
          name: "La Biquette",
          price: "13.50 €",
          description: "Burger with warm goat cheese, honey, and arugula.",
          image: burger_1,
          specification: ["Vegetarian"],
        },
        {
          name: "La Poulette",
          price: "14.00 €",
          description: "Crispy chicken burger with barbecue sauce.",
          image: burger_2,
          specification: ["Meat"],
        },
        {
          name: "Le Grand Mamie",
          price: "15.00 €",
          description:
            "Beef burger with raclette cheese and caramelized onions.",
          image: burger_3,
          specification: ["Meat"],
        },
        {
          name: "Le Vegie",
          price: "12.90 €",
          description:
            "Vegetarian burger with a vegetable patty and homemade sauce.",
          image: burger_4,
          specification: ["Vegan"],
        },
      ],
    },
    {
      type: "Tapas",
      products: [
        {
          name: "Calamari Plate x9",
          price: "7.90 €",
          description: "Fried calamari served with tartar sauce.",
          image: tapas_1,
          specification: ["Fish"],
        },
        {
          name: "Onion Rings x12",
          price: "6.90 €",
          description: "Crispy onion rings.",
          image: tapas_2,
          specification: ["Vegan"],
        },
        {
          name: "Mozzarella Sticks x12",
          price: "8.00 €",
          description: "Breaded and fried mozzarella sticks.",
          image: tapas_3,
          specification: ["Vegetarian"],
        },
      ],
    },
    {
      type: "Tartines",
      products: [
        {
          name: "Three Cheeses",
          price: "11.50 €",
          description: "Tartine with goat cheese, blue cheese, and Comté.",
          image: tartine_1,
          specification: ["Vegetarian"],
        },
        {
          name: "Spanish",
          price: "10.90 €",
          description: "Tartine with chorizo, tomatoes, and melted cheese.",
          image: tartine_2,
          specification: ["Meat"],
        },
        {
          name: "Italian",
          price: "12.50 €",
          description: "Tartine with Parma ham, tomatoes, and mozzarella.",
          image: tartine_3,
          specification: ["Meat"],
        },
        {
          name: "Parisian",
          price: "11.90 €",
          description: "Tartine with white ham, mushrooms, and cream.",
          image: tartine_4,
          specification: ["Meat"],
        },
      ],
    },
  ];

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
        {products.map((category, index) => (
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

      {products.map((category, index) => (
        <div key={index}>
          <div className="text-center my-5">
            <p className="text-2xl underline" id={category.type}>
              {category.type}
            </p>
          </div>
          <div className="grid justify-center">
            {category.products.map((product, idx) => (
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

export default Menu2;
