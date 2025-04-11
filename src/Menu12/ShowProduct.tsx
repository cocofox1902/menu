import { useState } from "react";
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
  specification,
}) => {
  const [isHovered, setIsHovered] = useState<boolean>(false);

  return (
    <div
      className="relative w-72 h-72 rounded-2xl overflow-hidden shadow-lg cursor-pointer mx-[2%] mb-[5%]"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <video
        className={`w-full h-full object-cover transition-all duration-300 ${
          isHovered ? "brightness-50" : ""
        }`}
        autoPlay
        muted
        loop
      >
        <source
          src="https://media.istockphoto.com/id/1371167585/fr/vid%C3%A9o/savoureux-steak.mp4?s=mp4-640x640-is&k=20&c=uE_Vmz4DvgQywOpqGIIbEDxSBeaREvIPQQVcmCDn9DA="
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>
      {isHovered && (
        <div className="absolute inset-0 flex flex-col items-center text-center p-[5%]">
          <div className="flex gap-[2%] mt-[2%] bg-white/70 rounded-full p-2">
            {specification.map((spec, index) => (
              <span key={index} className="text-white text-xl">
                {spec === "Viande" && (
                  <img src={meat} alt="Viande" className="w-6 h-6" />
                )}
                {spec === "Poisson" && (
                  <img src={fish} alt="Poisson" className="w-6 h-6" />
                )}
                {spec === "Végétarien" && (
                  <img src={no_meat} alt="Pas de viande" className="w-6 h-6" />
                )}
                {spec === "Vegan" && (
                  <img src={vegan} alt="Vegan" className="w-6 h-6" />
                )}
                {spec === "Sans gluten" && (
                  <img src={no_gluten} alt="Sans gluten" className="w-6 h-6" />
                )}
                {spec === "Alcool" && (
                  <img src={alchool} alt="Alcool" className="w-6 h-6" />
                )}
                {spec === "Sans alcool" && (
                  <img src={no_alchool} alt="Sans alcool" className="w-6 h-6" />
                )}
                {spec === "Spicy" && (
                  <img src={spicy} alt="Spicy" className="w-6 h-6" />
                )}
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
