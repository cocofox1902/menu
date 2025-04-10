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
}) => {
  return (
    <div className="h-screen w-screen relative flex items-center justify-center text-white overflow-hidden">
      <img
        src={image}
        alt={name}
        className="absolute inset-0 w-full h-full object-cover brightness-[0.4] z-0"
      />

      <div className="relative z-10 text-center px-6 max-w-2xl">
        <h2 className="font-bold text-4xl mb-4">{name}</h2>
        <p className="text-lg mb-6">{description}</p>
        <p className="font-bold text-3xl">{price}</p>
      </div>
    </div>
  );
};

export default ShowProduct;
