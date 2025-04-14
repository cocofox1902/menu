type ProductProps = {
  name: string;
  price: string;
  description: string;
};

const ShowProduct: React.FC<ProductProps> = ({ name, price, description }) => {
  return (
    <div className="flex p-[5%]">
      <div className="w-[70%]">
        <h2 className="font-bold text-lg">{name}</h2>
        <p className="text-sm">{description}</p>
      </div>
      <p className="font-bold text-2xl ml-auto">{price}</p>
    </div>
  );
};

export default ShowProduct;
