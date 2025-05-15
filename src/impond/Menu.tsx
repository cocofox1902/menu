import ShowProduct from "./ShowProduct";
import francais from "../assets/francais.png";
import english from "../assets/english.png";
import logo from "../assets/LOGO_L'IMPOND.png";

import { useEffect, useState } from "react";

const productsFrench = [
  {
    type: "HAPPY-HOUR",
    description: "16H - 02H",
    products: [
      {
        name: "Pinte de Blonde",
        price: "3.50 €",
        description: "Bière blonde pression légère et rafraîchissante",
        specification: ["gluten", "sulfites"],
      },
      {
        name: "Pinte de Blanche",
        price: "6.00 €",
        description: "Bière blanche pression aux notes d’agrumes",
        specification: ["gluten", "sulfites"],
      },
      {
        name: "Pinte de Picon",
        price: "5.00 €",
        description: "Bière blonde avec liqueur Picon (amer d’orange)",
        specification: ["gluten", "sulfites"],
      },
      {
        name: "Pinte d'I.P.A",
        price: "6.00 €",
        description: "Bière houblonnée amère, riche en arômes",
        specification: ["gluten", "sulfites"],
      },
      {
        name: "Pinte de Chouffe",
        price: "6.50 €",
        description: "Bière belge fruitée et légèrement épicée",
        specification: ["gluten", "sulfites"],
      },
      {
        name: "Vin au verre",
        price: "4.00 €",
        description: "Vin rouge, blanc ou rosé au choix",
        specification: ["sulfites"],
      },
      {
        name: "Double Ricard",
        price: "4.50 €",
        description: "Anisé servi avec eau fraîche",
        specification: ["sulfites"],
      },
      {
        name: "Cocktails",
        price: "5.50 €",
        description: "Cocktail du moment (voir au bar)",
        specification: ["alcool", "sulfites"],
      },
      {
        name: "Assiette de Frites",
        price: "6.00 €",
        description: "Frites maison croustillantes",
        specification: ["peut contenir traces de gluten"],
      },
    ],
  },
  {
    type: "Tapas",
    products: [
      {
        name: "Stick Mozza",
        price: "7.50 €",
        description: "9 bâtonnets de mozzarella panés",
        specification: ["lait", "gluten", "œufs"],
      },
      {
        name: "Beignets de Calamars",
        price: "7.50 €",
        description: "9 beignets croustillants de calamars",
        specification: ["poisson", "gluten", "œufs"],
      },
      {
        name: "Accras de Morue",
        price: "7.50 €",
        description: "9 accras de morue épicés",
        specification: ["poisson", "gluten", "œufs"],
      },
      {
        name: "Mini Falafels",
        price: "7.50 €",
        description: "9 falafels de pois chiches et épices",
        specification: ["peut contenir gluten", "sésame"],
      },
      {
        name: "Onion Rings",
        price: "7.50 €",
        description: "9 rondelles d'oignons panées",
        specification: ["gluten", "œufs"],
      },
      {
        name: "Assiette de Frites",
        price: "6.00 €",
        description: "Frites maison croustillantes",
        specification: ["peut contenir traces de gluten"],
      },
    ],
  },
  {
    type: "Planches",
    products: [
      {
        name: "Planches Charcuterie",
        price: "12.90 €",
        description: "Assortiment de charcuteries françaises",
        specification: ["sulfites"],
      },
      {
        name: "Planches Fromages",
        price: "12.90 €",
        description: "Assortiment de fromages affinés",
        specification: ["lait"],
      },
      {
        name: "Planches Mixte",
        price: "15.90 €",
        description: "Mix charcuteries et fromages",
        specification: ["lait", "sulfites"],
      },
    ],
  },
  {
    type: "Croques",
    products: [
      {
        name: "Croque Monsieur",
        price: "10.90 €",
        description:
          "Pain de mie, jambon, fromage fondu. Frites maison et salade",
        specification: ["gluten", "lait", "œufs"],
      },
      {
        name: "Croque Madame",
        price: "11.90 €",
        description:
          "Croque Monsieur avec œuf au plat. Frites maison et salade",
        specification: ["gluten", "lait", "œufs"],
      },
    ],
  },
  {
    type: "Cocktails",
    products: [
      {
        name: "Sex on the Beach",
        price: "7.50 €",
        description: "Vodka, jus d’orange, cranberry, pêche",
        specification: ["alcool", "sulfites"],
      },
      {
        name: "Spritz Apérol",
        price: "7.50 €",
        description: "Apérol, prosecco, eau pétillante",
        specification: ["alcool", "sulfites"],
      },
      {
        name: "Moscow Mule",
        price: "7.50 €",
        description: "Vodka, gingembre, citron vert",
        specification: ["alcool", "sulfites"],
      },
      {
        name: "Caïpirina",
        price: "7.50 €",
        description: "Cachaça, citron vert, sucre",
        specification: ["alcool"],
      },
      {
        name: "Caïpiroska",
        price: "7.50 €",
        description: "Vodka, citron vert, sucre",
        specification: ["alcool"],
      },
      {
        name: "Pina Colada",
        price: "7.50 €",
        description: "Rhum, ananas, crème de coco",
        specification: ["alcool", "lait (crème)"],
      },
      {
        name: "Cuba Libre",
        price: "7.50 €",
        description: "Rhum, cola, citron vert",
        specification: ["alcool", "sulfites"],
      },
      {
        name: "Mojito",
        price: "7.50 €",
        description: "Rhum, menthe fraîche, citron vert, sucre, eau pétillante",
        specification: ["alcool", "sulfites"],
      },
      {
        name: "Suze",
        price: "7.50 €",
        description: "Apéritif à base de gentiane",
        specification: ["alcool", "sulfites"],
      },
    ],
  },
  {
    type: "Couscous",
    products: [
      {
        name: "Couscous Boeuf",
        price: "13.50 €",
        description: "Semoule, légumes, bouillon maison et bœuf",
        specification: ["gluten"],
      },
      {
        name: "Couscous Poulet Fermier",
        price: "14.50 €",
        description: "Semoule, légumes, bouillon maison et poulet fermier",
        specification: ["gluten"],
      },
      {
        name: "Couscous Merguez",
        price: "12.90 €",
        description: "Semoule, légumes, bouillon maison et merguez",
        specification: ["gluten", "sulfites"],
      },
      {
        name: "Couscous Brochettes",
        price: "14.00 €",
        description:
          "Semoule, légumes, bouillon maison et brochettes de viande",
        specification: ["gluten"],
      },
      {
        name: "Couscous Légumes",
        price: "12.00 €",
        description: "Semoule, légumes variés et bouillon maison",
        specification: ["gluten"],
      },
      {
        name: "Couscous Mechoui",
        price: "17.50 €",
        description: "Semoule, légumes, bouillon maison et agneau rôti (350g)",
        specification: ["gluten"],
      },
      {
        name: "Le Royale",
        price: "20.90 €",
        description:
          "Semoule, légumes et toutes les viandes : poulet, bœuf, merguez, agneau",
        specification: ["gluten", "sulfites"],
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
        specification: ["Vegetarian"],
      },
      {
        name: "Parisian",
        price: "8.90 €",
        description:
          "Salad, ham, gruyère cheese, hard-boiled egg, and croutons.",
        specification: ["Meat"],
      },
      {
        name: "Auvergnat",
        price: "10.50 €",
        description: "Salad, Bleu d'Auvergne cheese, walnuts, and cured ham.",
        specification: ["Meat"],
      },
      {
        name: "Italian",
        price: "11.00 €",
        description: "Salad, tomatoes, mozzarella, basil, and olive oil.",
        specification: ["Vegetarian"],
      },
      {
        name: "Ocean",
        price: "12.00 €",
        description: "Salad, shrimp, smoked salmon, and avocado.",
        specification: ["Fish", "Gluten-free"],
      },
    ],
  },
];

function Menu18() {
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

export default Menu18;
