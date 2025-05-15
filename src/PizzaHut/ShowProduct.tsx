const ShowProduct: React.FC<any> = ({ name, price, description }) => {
  return (
    <div className="flex items-start p-4 border-b border-[#e31837] bg-white hover:bg-[#fff1f1] transition-colors">
      <div className="w-[70%]">
        <h2 className="font-bold text-lg text-[#e31837]">{name}</h2>
        {description && <p className="text-sm text-gray-700">{description}</p>}
      </div>
      <p className="font-bold text-2xl text-[#ffcc00] ml-auto">{price}</p>
    </div>
  );
};

export default ShowProduct;
