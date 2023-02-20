const ItemShowcase = ({ qtd, name, color }) => {
  return (
    <div className={`flex flex-col items-center self-center justify-center text-6xl backdrop-blur-sm bg-${color}-600/20 border-2 border-${color}-600 p-4 rounded-full w-80 h-80`}>
      {qtd}
      <button className={`mt-2 bg-${color}-200 text-gray-800 font-semibold text-3xl px-1 rounded-xl`}>
        {name}
      </button>
    </div>
  );
};

export default ItemShowcase;
