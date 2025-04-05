import React, { useState } from "react";

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
            <p className="font-bold text-lg text-green-700">{price}</p>
            {specification.length > 0 && (
              <div className="mt-3">
                <p className="text-sm font-semibold">Spécificités :</p>
                <ul className="list-disc list-inside text-sm text-gray-600">
                  {specification.map((spec, index) => (
                    <li key={index}>{spec}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default ShowProduct;
