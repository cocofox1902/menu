import ShowProduct from "./ShowProduct.tsx";
import francais from "../assets/francais.png";
import english from "../assets/english.png";
import logo from "./Pizza_Hut_international_logo_2014.svg.png";
import { useEffect, useState } from "react";

type Product = {
  name: string;
  price: string;
  description?: string;
};

type ProductCategory = {
  type: string;
  products: Product[];
};

const boissons: Product[] = [
  { name: "Coca-Cola", price: "2.50 €" },
  { name: "Fanta", price: "2.50 €" },
  { name: "Sprite", price: "2.50 €" },
  { name: "Ice Tea", price: "2.50 €" },
];

const menu: Product[] = [
  {
    name: "Menu Classique",
    price: "9.90 €",
    description: "1 pizza individuelle + 1 boisson au choix",
  },
  {
    name: "Menu Duo",
    price: "19.90 €",
    description: "2 pizzas moyennes + 2 boissons",
  },
  {
    name: "Menu Family",
    price: "29.90 €",
    description: "2 grandes pizzas + 1 accompagnement + 1 bouteille",
  },
  {
    name: "Menu Étudiant",
    price: "7.90 €",
    description: "1 pizza individuelle + 1 boisson pour les étudiants",
  },
];

const produits: Product[] = [
  {
    name: "Pizza Pepperoni Lovers",
    price: "13.50 €",
    description: "Sauce tomate, mozzarella, pepperoni en double dose",
  },
  {
    name: "Pizza Veggie",
    price: "12.00 €",
    description:
      "Sauce tomate, mozzarella, poivrons, champignons, oignons rouges",
  },
  {
    name: "Pizza BBQ Chicken",
    price: "14.00 €",
    description: "Sauce BBQ, poulet rôti, oignons caramélisés, mozzarella",
  },
  {
    name: "Pizza 4 Fromages",
    price: "13.00 €",
    description: "Sauce crème, mozzarella, chèvre, bleu, emmental",
  },
  {
    name: "Breadsticks",
    price: "4.50 €",
    description:
      "Bâtonnets de pain moelleux à l'ail, servis avec sauce marinara",
  },
  {
    name: "Salade César",
    price: "6.00 €",
    description: "Laitue, croûtons, poulet grillé, parmesan, sauce césar",
  },
];

const translations: Record<string, string> = {
  "Menu Classique": "Classic Menu",
  "Menu Duo": "Duo Menu",
  "Menu Family": "Family Menu",
  "Menu Étudiant": "Student Menu",
  "Pizza Pepperoni Lovers": "Pepperoni Lovers Pizza",
  "Pizza Veggie": "Veggie Pizza",
  "Pizza BBQ Chicken": "BBQ Chicken Pizza",
  "Pizza 4 Fromages": "4 Cheese Pizza",
  "Salade César": "Caesar Salad",
  Breadsticks: "Breadsticks",
  "Coca-Cola": "Coca-Cola",
  Fanta: "Fanta",
  Sprite: "Sprite",
  "Ice Tea": "Ice Tea",
  "1 pizza individuelle + 1 boisson au choix":
    "1 personal pizza + 1 drink of choice",
  "2 pizzas moyennes + 2 boissons": "2 medium pizzas + 2 drinks",
  "2 grandes pizzas + 1 accompagnement + 1 bouteille":
    "2 large pizzas + 1 side + 1 bottle",
  "1 pizza individuelle + 1 boisson pour les étudiants":
    "1 pizza + 1 drink (student offer)",
  "Sauce tomate, mozzarella, pepperoni en double dose":
    "Tomato sauce, mozzarella, double pepperoni",
  "Sauce tomate, mozzarella, poivrons, champignons, oignons rouges":
    "Tomato sauce, mozzarella, peppers, mushrooms, red onions",
  "Sauce BBQ, poulet rôti, oignons caramélisés, mozzarella":
    "BBQ sauce, roasted chicken, caramelized onions, mozzarella",
  "Sauce crème, mozzarella, chèvre, bleu, emmental":
    "Cream sauce, mozzarella, goat cheese, blue cheese, emmental",
  "Bâtonnets de pain moelleux à l'ail, servis avec sauce marinara":
    "Soft garlic breadsticks served with marinara sauce",
  "Laitue, croûtons, poulet grillé, parmesan, sauce césar":
    "Lettuce, croutons, grilled chicken, parmesan, caesar dressing",
};

const translateProduct = (product: Product): Product => ({
  ...product,
  name: translations[product.name] || product.name,
  description: product.description
    ? translations[product.description] || product.description
    : undefined,
});

const frenchData: ProductCategory[] = [
  { type: "Menus", products: menu },
  { type: "Pizzas & Produits", products: produits },
  { type: "Boissons", products: boissons },
];

const englishData: ProductCategory[] = [
  { type: "Menus", products: menu.map(translateProduct) },
  { type: "Pizzas & Products", products: produits.map(translateProduct) },
  { type: "Drinks", products: boissons.map(translateProduct) },
];

function Menu17() {
  const [language, setLanguage] = useState<"francais" | "english">("francais");
  const [products, setProducts] = useState<ProductCategory[]>(frenchData);
  const [isVisible, setIsVisible] = useState(false);
  const [selectedType, setSelectedType] = useState<string>(frenchData[0].type);

  const changeLanguage = (lang: "francais" | "english") => {
    const data = lang === "francais" ? frenchData : englishData;
    setLanguage(lang);
    setProducts(data);
    setSelectedType(data[0].type);
  };

  useEffect(() => {
    const handleScroll = () => setIsVisible(window.scrollY > 200);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <div className="h-[40vh] flex items-center justify-center bg-[url(../background.jpg)] bg-no-repeat bg-cover bg-center relative">
        <div className="absolute inset-0 bg-[#e31837]/20 z-0" />
        <div className="absolute top-5 right-5 flex gap-2 z-10">
          {[
            ["francais", francais],
            ["english", english],
          ].map(([lang, img]) => (
            <div
              key={lang}
              className={`w-8 h-8 rounded-full overflow-hidden cursor-pointer ${
                language === lang ? "border-2 border-white" : ""
              }`}
              onClick={() => changeLanguage(lang as "francais" | "english")}
            >
              <img
                src={img}
                alt={lang}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
        <img
          src={logo}
          alt="logo"
          className="max-h-[80%] object-contain relative z-10"
        />
      </div>

      {/* Sticky category selector */}
      <div className="flex justify-start bg-white shadow-md sticky top-0 z-50 overflow-x-auto whitespace-nowrap">
        {products.map((category, index) => (
          <button
            key={index}
            className={`text-lg p-4 ${
              index === products.length - 1 ? "border-r-0" : "border-r-2"
            } ${selectedType === category.type ? "bg-gray-200 font-bold" : ""}`}
            onClick={() => {
              setSelectedType(category.type);
              const element = document.getElementById(category.type);
              if (element) {
                const y =
                  element.getBoundingClientRect().top + window.scrollY - 80;
                window.scrollTo({ top: y, behavior: "smooth" });
              }
            }}
          >
            {category.type}
          </button>
        ))}
      </div>

      {products.map((category, index) => (
        <section key={index} className="my-8">
          <h2
            className="text-center text-2xl font-bold mb-4 text-[#e31837] underline underline-offset-4"
            id={category.type}
          >
            {category.type}
          </h2>
          <div className="grid gap-2 px-4">
            {category.products.map((product, idx) => (
              <ShowProduct key={idx} {...product} />
            ))}
          </div>
        </section>
      ))}

      {isVisible && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="fixed bottom-5 right-5 bg-[#e31837] p-2 rounded-full shadow-lg hover:bg-[#b5152d] transition-colors"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-8 h-8"
            viewBox="0 0 24 24"
          >
            <polyline points="18 15 12 9 6 15" />
          </svg>
        </button>
      )}
    </>
  );
}

export default Menu17;
