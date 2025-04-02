import ShowProduct from "./ShowProduct";
import image from "../assets/image.png";
import { useEffect, useState } from "react";

function Menu() {
  const productsFrench = [
    {
      type: "Entrée",
      products: [
        {
          name: "Salade César",
          price: "7.99 €",
          description:
            "Laitue croquante, poulet grillé, parmesan et sauce César maison.",
          image: image,
        },
        {
          name: "Soupe à l'oignon",
          price: "6.99 €",
          description:
            "Soupe traditionnelle gratinée avec du fromage fondu et des croûtons.",
          image: image,
        },
        {
          name: "Bruschetta tomate & basilic",
          price: "5.99 €",
          description:
            "Tranches de pain grillé avec tomates fraîches, basilic et huile d'olive.",
          image: image,
        },
        {
          name: "Foie gras de canard",
          price: "12.99 €",
          description:
            "Foie gras accompagné de son chutney de figues et pain grillé.",
          image: image,
        },
        {
          name: "Carpaccio de bœuf",
          price: "10.99 €",
          description:
            "Fines tranches de bœuf marinées avec parmesan et roquette.",
          image: image,
        },
      ],
    },
    {
      type: "Plat",
      products: [
        {
          name: "Double Cheese Burger",
          price: "14.99 €",
          description:
            "Deux steaks juteux, du fromage fondant, un pain moelleux... Le vrai goût du burger, fait avec passion !",
          image: image,
        },
        {
          name: "Burger Bacon & Cheddar",
          price: "15.99 €",
          description:
            "Un délicieux burger avec du bacon croustillant et du cheddar fondu.",
          image: image,
        },
        {
          name: "Pizza Margherita",
          price: "12.99 €",
          description:
            "Tomates, mozzarella et basilic sur une pâte fine et croustillante.",
          image: image,
        },
        {
          name: "Risotto aux champignons",
          price: "13.99 €",
          description: "Un risotto crémeux aux champignons et parmesan.",
          image: image,
        },
        {
          name: "Filet de saumon grillé",
          price: "16.99 €",
          description: "Saumon grillé accompagné de légumes de saison.",
          image: image,
        },
        {
          name: "Entrecôte grillée",
          price: "19.99 €",
          description:
            "Entrecôte tendre avec sauce au poivre et frites maison.",
          image: image,
        },
        {
          name: "Pâtes carbonara",
          price: "11.99 €",
          description: "Pâtes crémeuses avec lardons et parmesan.",
          image: image,
        },
        {
          name: "Poulet rôti à l'ail",
          price: "14.99 €",
          description: "Poulet mariné et rôti lentement avec ail et herbes.",
          image: image,
        },
        {
          name: "Tartare de bœuf",
          price: "15.49 €",
          description: "Tartare de bœuf préparé avec des condiments frais.",
          image: image,
        },
        {
          name: "Magret de canard",
          price: "18.99 €",
          description:
            "Magret de canard servi avec une sauce aux fruits rouges.",
          image: image,
        },
      ],
    },
    {
      type: "Dessert",
      products: [
        {
          name: "Fondant au chocolat",
          price: "6.99 €",
          description: "Un cœur coulant au chocolat noir intense.",
          image: image,
        },
        {
          name: "Crème brûlée",
          price: "5.99 €",
          description:
            "Une crème onctueuse avec une fine couche de caramel craquant.",
          image: image,
        },
        {
          name: "Tiramisu",
          price: "6.49 €",
          description: "Un dessert italien classique au café et mascarpone.",
          image: image,
        },
        {
          name: "Panna Cotta aux fruits rouges",
          price: "5.99 €",
          description:
            "Un dessert léger accompagné d'un coulis de fruits rouges.",
          image: image,
        },
        {
          name: "Cheesecake au caramel",
          price: "6.99 €",
          description:
            "Un cheesecake crémeux avec un nappage au caramel beurre salé.",
          image: image,
        },
      ],
    },
  ];

  const productsEnglish = [
    {
      type: "Starter",
      products: [
        {
          name: "Caesar Salad",
          price: "€7.99",
          description:
            "Crispy lettuce, grilled chicken, parmesan, and homemade Caesar dressing.",
          image: image,
        },
        {
          name: "French Onion Soup",
          price: "€6.99",
          description:
            "Traditional gratinated soup with melted cheese and croutons.",
          image: image,
        },
        {
          name: "Bruschetta with Tomato & Basil",
          price: "€5.99",
          description:
            "Grilled bread slices with fresh tomatoes, basil, and olive oil.",
          image: image,
        },
        {
          name: "Duck Foie Gras",
          price: "€12.99",
          description: "Foie gras served with fig chutney and toasted bread.",
          image: image,
        },
        {
          name: "Beef Carpaccio",
          price: "€10.99",
          description:
            "Thinly sliced marinated beef with parmesan and arugula.",
          image: image,
        },
      ],
    },
    {
      type: "Main Course",
      products: [
        {
          name: "Double Cheese Burger",
          price: "€14.99",
          description:
            "Two juicy beef patties, melted cheese, soft bun... The real taste of a burger, made with passion!",
          image: image,
        },
        {
          name: "Bacon & Cheddar Burger",
          price: "€15.99",
          description:
            "A delicious burger with crispy bacon and melted cheddar.",
          image: image,
        },
        {
          name: "Margherita Pizza",
          price: "€12.99",
          description:
            "Tomatoes, mozzarella, and basil on a thin and crispy crust.",
          image: image,
        },
        {
          name: "Mushroom Risotto",
          price: "€13.99",
          description: "A creamy risotto with mushrooms and parmesan.",
          image: image,
        },
        {
          name: "Grilled Salmon Fillet",
          price: "€16.99",
          description: "Grilled salmon served with seasonal vegetables.",
          image: image,
        },
        {
          name: "Grilled Ribeye Steak",
          price: "€19.99",
          description:
            "Tender ribeye steak with pepper sauce and homemade fries.",
          image: image,
        },
        {
          name: "Carbonara Pasta",
          price: "€11.99",
          description: "Creamy pasta with bacon and parmesan.",
          image: image,
        },
        {
          name: "Garlic Roasted Chicken",
          price: "€14.99",
          description:
            "Marinated chicken slowly roasted with garlic and herbs.",
          image: image,
        },
        {
          name: "Beef Tartare",
          price: "€15.49",
          description: "Freshly prepared beef tartare with condiments.",
          image: image,
        },
        {
          name: "Duck Magret",
          price: "€18.99",
          description: "Duck breast served with a red berry sauce.",
          image: image,
        },
      ],
    },
    {
      type: "Dessert",
      products: [
        {
          name: "Chocolate Lava Cake",
          price: "€6.99",
          description: "A rich chocolate cake with a molten center.",
          image: image,
        },
        {
          name: "Crème Brûlée",
          price: "€5.99",
          description:
            "A creamy custard with a thin layer of caramelized sugar.",
          image: image,
        },
        {
          name: "Tiramisu",
          price: "€6.49",
          description: "A classic Italian dessert with coffee and mascarpone.",
          image: image,
        },
        {
          name: "Panna Cotta with Red Berries",
          price: "€5.99",
          description: "A light dessert topped with a red berry coulis.",
          image: image,
        },
        {
          name: "Caramel Cheesecake",
          price: "€6.99",
          description: "A creamy cheesecake with salted caramel topping.",
          image: image,
        },
      ],
    },
  ];

  const [products, setProducts] = useState(productsFrench);
  const [isVisible, setIsVisible] = useState(false);

  const changeLanguage = (language: string) => {
    if (language === "francais") {
      setProducts(productsFrench);
    } else {
      setProducts(productsEnglish);
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
      <div className="h-72 flex items-center justify-center bg-gray-300">
        <div className="absolute top-5 right-5 flex gap-2">
          <div
            className="w-8 h-8 rounded-full overflow-hidden"
            onClick={() => {
              changeLanguage("francais");
            }}
          >
            <img
              src={image}
              alt="francais"
              className="w-full h-full object-cover"
            />
          </div>
          <div
            className="w-8 h-8 rounded-full overflow-hidden"
            onClick={() => {
              changeLanguage("english");
            }}
          >
            <img
              src={image}
              alt="english"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        <p className="text-3xl font-bold">Your Restaurant</p>
      </div>
      {products.map((category, index) => (
        <div key={index}>
          <div className="text-center my-5">
            <p className="text-2xl">{category.type}</p>
          </div>
          <div className="place-self-center">
            {category.products.map((product, idx) => (
              <ShowProduct key={idx} {...product} />
            ))}
          </div>
        </div>
      ))}
      {isVisible && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="fixed bottom-5 right-5 bg-white p-2 rounded-full shadow-lg transition-opacity duration-300"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-6 h-6"
          >
            <polyline points="18 15 12 9 6 15"></polyline>
          </svg>
        </button>
      )}
    </>
  );
}

export default Menu;
