import { useState } from "react";

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
  const [isHovered, setIsHovered] = useState<boolean>(false);

  return (
    <div
      className="relative w-72 h-72 rounded-2xl overflow-hidden shadow-lg cursor-pointer mx-[2%] mb-[5%]"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img
        src={image}
        alt={name}
        className={`w-full h-full object-cover transition-all duration-300 ${
          isHovered ? "brightness-50" : ""
        }`}
      />
      {isHovered && (
        <div className="absolute inset-0 flex flex-col items-center text-center p-[5%]">
          <div className="flex gap-[2%] mt-[2%] bg-white/70 rounded-full p-2">
            {specification.map((spec, index) => (
              <span key={index} className="text-white text-xl">
                {spec === "Viande" && "🥩"}
                {spec === "Poisson" && "🐟"}
                {spec === "Végétarien" && "🚫🥩"}
                {spec === "Vegan" && "🌱"}
                {spec === "Sans gluten" && "🚫🌾"}
                {spec === "Alcool" && "🔞"}
              </span>
            ))}
          </div>
          <h2 className="text-white font-bold text-lg mt-[5%]">{name}</h2>
          <p className="text-white font-bold text-4xl mt-[5%]">{price}</p>
          <p className="bg-white p-[3%] rounded-lg shadow text-sm mt-auto">
            {description}
          </p>
        </div>
      )}
    </div>
  );
};

export default ShowProduct;
