import { useState } from "react";
import francais from "../assets/francais.png";
import english from "../assets/english.png";
import logo from "../assets/LOGO_L'IMPOND.png";

type ProductProps = {
  name: string;
  price: string;
  description: string;
  image: string;
  specification: string[];
};

type ProductGroup = {
  type: string;
  products: ProductProps[];
};

function Menu13({
  productsFrench,
  productsEnglish,
}: {
  productsFrench: ProductGroup[];
  productsEnglish: ProductGroup[];
}) {
  const [language, setLanguage] = useState<"francais" | "english">("francais");
  const [products, setProducts] = useState<ProductProps[]>(
    productsFrench.flatMap((cat) => cat.products)
  );
  const [currentIndex, setCurrentIndex] = useState(0);
  const [likedProducts, setLikedProducts] = useState<ProductProps[]>([]);
  const [finished, setFinished] = useState<boolean | null>(null); // null = intro

  const changeLanguage = (lang: "francais" | "english") => {
    setLanguage(lang);
    const selectedProducts =
      lang === "francais"
        ? productsFrench.flatMap((cat) => cat.products)
        : productsEnglish.flatMap((cat) => cat.products);
    setProducts(selectedProducts);
    setCurrentIndex(0);
    setLikedProducts([]);
    setFinished(null); // revient à l'écran d'accueil
  };

  const handleLike = (liked: boolean) => {
    const currentProduct = products[currentIndex];
    if (liked) {
      setLikedProducts([...likedProducts, currentProduct]);
    }

    if (currentIndex + 1 < products.length) {
      setCurrentIndex(currentIndex + 1);
    } else {
      setFinished(true);
    }
  };

  const handleReturn = () => {
    setCurrentIndex(currentIndex - 1);
    setLikedProducts(likedProducts.slice(0, -1));
  };

  const renderProductCard = (product: ProductProps) => {
    return (
      <div className="relative w-80 h-[500px] rounded-2xl overflow-hidden shadow-lg mx-auto mb-10">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black/80 to-transparent p-4">
          <div className="flex flex-wrap gap-2 mb-2">
            {product.specification.map((spec, i) => (
              <span
                key={i}
                className="bg-white text-black text-xs font-semibold px-2 py-1 rounded-full"
              >
                {spec}
              </span>
            ))}
          </div>
          <h2 className="text-white text-xl font-bold">{product.name}</h2>
          <p className="text-white text-lg">{product.price}</p>
          <p className="text-white text-sm mt-1">{product.description}</p>
        </div>
      </div>
    );
  };

  return (
    <div className="relative min-h-screen bg-gray-100">
      {/* Language Switcher (always on top right) */}

      {finished === null && (
        <>
          <div className="absolute top-5 right-5 flex gap-2 z-10">
            <div
              className={`w-8 h-8 rounded-full overflow-hidden cursor-pointer ${
                language === "english" ? "" : "border-2 border-white"
              }`}
              onClick={() => changeLanguage("francais")}
            >
              <img
                src={francais}
                alt="francais"
                className="w-full h-full object-cover"
              />
            </div>
            <div
              className={`w-8 h-8 rounded-full overflow-hidden cursor-pointer ${
                language === "english" ? "border-2 border-white" : ""
              }`}
              onClick={() => changeLanguage("english")}
            >
              <img
                src={english}
                alt="english"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <div className="flex flex-col items-center min-h-screen bg-[url(../restaurant.jpg)] bg-cover bg-center text-white text-center px-4">
            <p className="text-5xl font-bold text-white bg-black/50 p-2 rounded-2xl w-[80%] mt-[40%]">
              <img src={logo} alt="logo" />
            </p>
            <div className="flex flex-col items-center mt-[80%]">
              <p className="text-2xl md:text-3xl font-semibold mb-4 bg-black/50 rounded-2xl p-2">
                {language === "francais"
                  ? "Prêt à swiper pour votre prochain coup de cœur culinaire ?"
                  : "Ready to swipe your next foodie crush?"}
              </p>
              <button
                onClick={() => setFinished(false)}
                className="mt-4 px-6 py-3 bg-white text-black rounded-lg shadow-lg font-semibold hover:bg-gray-200 transition"
              >
                {language === "francais" ? "Commencer" : "Start"}
              </button>
            </div>
          </div>
        </>
      )}

      {finished === false && (
        <div className="m-4">
          {renderProductCard(products[currentIndex])}
          <div className="flex justify-center gap-6 mt-4">
            <button
              className="bg-red-500 text-white px-6 py-2 rounded-lg"
              onClick={() => handleLike(false)}
            >
              {language === "francais" ? "Passer" : "Dislike"}
            </button>
            {likedProducts.length > 0 && (
              <button
                className="bg-gray-500 text-white px-6 py-2 rounded-lg"
                onClick={() => handleReturn()}
              >
                {language === "francais" ? "Revenir" : "Back"}
              </button>
            )}
            <button
              className="bg-green-500 text-white px-6 py-2 rounded-lg"
              onClick={() => handleLike(true)}
            >
              {language === "francais" ? "Aimer" : "Like"}
            </button>
          </div>
        </div>
      )}

      {finished === true && (
        <div className="py-10 px-4">
          <h2 className="text-center text-2xl font-bold mb-6">
            {language === "francais"
              ? "Vos plats sélectionnés"
              : "Your selected dishes"}
          </h2>
          <div className="flex flex-wrap justify-center gap-6">
            {likedProducts.map((product, index) => (
              <div
                key={index}
                className="w-60 rounded-xl overflow-hidden shadow-lg bg-white"
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-40 object-cover"
                />
                <div className="p-4">
                  <h3 className="font-bold text-lg">{product.name}</h3>
                  <p className="text-gray-600 text-sm">{product.price}</p>
                  <p className="text-sm mt-1">{product.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default Menu13;
