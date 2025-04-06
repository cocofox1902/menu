type ProductProps = {
  name: string;
  price: string;
  description: string;
  image: string;
  index: number;
};

const ShowProduct: React.FC<ProductProps> = ({
  name,
  price,
  description,
  image,
  index,
}) => {
  const isImageLeft = index % 2 === 0;

  return (
    <div
      className={`flex p-[5%] justify-around ${isImageLeft ? "flex-row" : "flex-row-reverse"}`}
    >
      <img
        src={image}
        alt={name}
        className="w-40 h-40 rounded-2xl object-cover"
      />
      <div className="w-[50%] flex flex-col justify-between px-4">
        <div>
          <h2 className="font-bold text-lg">{name}</h2>
          <p className="text-sm">{description}</p>
        </div>
        <p className="font-bold text-2xl">{price}</p>
      </div>
    </div>
  );
};

export default ShowProduct;
