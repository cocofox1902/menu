import Menu1 from "./Menu1/Menu";
import Menu2 from "./Menu2/Menu";
import Menu3 from "./Menu3/Menu";
import Menu4 from "./Menu4/Menu";
import Menu5 from "./Menu5/Menu";
import Footer from "./components/Footer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import salade_1 from "./assets/salade_1.jpg";
import salade_2 from "./assets/salade_2.jpg";
import salade_3 from "./assets/salade_3.jpg";
import salade_4 from "./assets/salade_4.jpg";
import salade_5 from "./assets/salade_5.jpg";
import burger_1 from "./assets/burger_1.jpg";
import burger_2 from "./assets/burger_2.jpg";
import burger_3 from "./assets/burger_3.png";
import burger_4 from "./assets/burger_4.jpg";
import tapas_1 from "./assets/tapas_1.jpg";
import tapas_2 from "./assets/tapas_2.jpg";
import tapas_3 from "./assets/tapas_3.jpg";
import tartine_1 from "./assets/tartine_1.jpg";
import tartine_2 from "./assets/tartine_2.jpg";
import tartine_3 from "./assets/tartine_3.jpg";
import tartine_4 from "./assets/tartine_4.jpg";
import Menu6 from "./Menu6/Menu";
import Menu7 from "./Menu7/Menu";
import Menu8 from "./Menu8/Menu";

function App() {
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

  return (
    <div className="font-mono">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/1"
            element={
              <Menu1
                productsFrench={productsFrench}
                productsEnglish={productsEnglish}
              />
            }
          />
          <Route
            path="/2"
            element={
              <Menu2
                productsFrench={productsFrench}
                productsEnglish={productsEnglish}
              />
            }
          />
          <Route
            path="/3"
            element={
              <Menu3
                productsFrench={productsFrench}
                productsEnglish={productsEnglish}
              />
            }
          />
          <Route
            path="/4"
            element={
              <Menu4
                productsFrench={productsFrench}
                productsEnglish={productsEnglish}
              />
            }
          />
          <Route
            path="/5"
            element={
              <Menu5
                productsFrench={productsFrench}
                productsEnglish={productsEnglish}
              />
            }
          />
          <Route
            path="/6"
            element={
              <Menu6
                productsFrench={productsFrench}
                productsEnglish={productsEnglish}
              />
            }
          />
          <Route
            path="/7"
            element={
              <Menu7
                productsFrench={productsFrench}
                productsEnglish={productsEnglish}
              />
            }
          />
          <Route
            path="/8"
            element={
              <Menu8
                productsFrench={productsFrench}
                productsEnglish={productsEnglish}
              />
            }
          />
          {/* <Route
            path="/9"
            element={
              <Menu9
                productsFrench={productsFrench}
                productsEnglish={productsEnglish}
              />
            }
          /> */}

          {/*
            Menu swipe tinder avec affichage like a la fin
          */}
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
