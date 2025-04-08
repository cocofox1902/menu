import React, { useState } from "react";
import meat from "../assets/meat.png";
import fish from "../assets/fish.png";
import no_meat from "../assets/no_meat.png";
import vegan from "../assets/vegan.png";
import no_gluten from "../assets/no_gluten.png";
import alchool from "../assets/alchool.png";
import no_alchool from "../assets/no_alchool.png";
import spicy from "../assets/spicy.png";

type ProductProps = {
  name: string;
  price: string;
  description: string;
  image: string;
  specification: string[];
};

const ShowProduct: React.FC<ProductProps> = ({
  name,
  price,
  description,
  image,
  specification,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div
        className="flex p-[5%] cursor-pointer justify-center"
        onClick={() => setIsOpen(true)}
      >
        <h2 className="text-lg">{name}</h2>
      </div>

      {isOpen && (
        <div
          className="fixed inset-0 bg-gray-300/50 bg-opacity-50 flex justify-center items-center z-50"
          onClick={() => setIsOpen(false)}
        >
          <div className="bg-white rounded-2xl shadow-lg p-6 max-w-md w-[90%] relative">
            <img
              src={image}
              alt={name}
              className="w-full h-48 object-cover rounded-xl mb-4"
            />
            <h2 className="text-2xl font-semibold mb-2">{name}</h2>
            <p className="text-gray-700 mb-2 italic">{description}</p>
            <div className="flex justify-between">
              <p className="font-bold text-lg text-green-700">{price}</p>
              <div className="flex">
                {specification.map((spec, index) => (
                  <span key={index} className="text-white text-xl">
                    {spec === "Viande" && (
                      <img src={meat} alt="Viande" className="w-6 h-6" />
                    )}
                    {spec === "Poisson" && (
                      <img src={fish} alt="Poisson" className="w-6 h-6" />
                    )}
                    {spec === "Végétarien" && (
                      <img
                        src={no_meat}
                        alt="Pas de viande"
                        className="w-6 h-6"
                      />
                    )}
                    {spec === "Vegan" && (
                      <img src={vegan} alt="Vegan" className="w-6 h-6" />
                    )}
                    {spec === "Sans gluten" && (
                      <img
                        src={no_gluten}
                        alt="Sans gluten"
                        className="w-6 h-6"
                      />
                    )}
                    {spec === "Alcool" && (
                      <img src={alchool} alt="Alcool" className="w-6 h-6" />
                    )}
                    {spec === "Sans alcool" && (
                      <img
                        src={no_alchool}
                        alt="Sans alcool"
                        className="w-6 h-6"
                      />
                    )}
                    {spec === "Spicy" && (
                      <img src={spicy} alt="Spicy" className="w-6 h-6" />
                    )}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ShowProduct;
