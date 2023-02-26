const ItemShowcase = ({ qtd, name }) => {
  return (
    <div className="flex flex-col items-center self-center justify-center text-6xl backdrop-blur-sm bg-purple-600/20 border-2 border-green-600 p-4 rounded-full w-80 h-80">
      {qtd}
      <h1 className="text-xl text-white">{name}</h1>
    </div>
  );
};

export default ItemShowcase;
