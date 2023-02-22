import { useSelector } from "react-redux";

const MainCardContent = () => {
  const cardInDB = useSelector((state) => state.utils.cardInDB);
  console.log(cardInDB);
  if (cardInDB === true) {
    return (
      <>
        <div className="flex flex-col items-center justify-center">
          <h1 className="text-2xl">Anime's name</h1>
          <h2>(2002)</h2>
        </div>
        <button className="w-full text-xl font-bold bg-red-600 hover:bg-red-800 rounded-xl">
          Add
        </button>
      </>
    );
  } else {
    return (
      <>
        <div className="flex flex-col items-center justify-center">
          <h1 className="text-2xl">Anime's name</h1>
          <h2>(2002)</h2>
        </div>
        <div className="w-full flex flex-col gap-2">
          <select className="w-full text-black text-xl rounded">
            <option value="0">Watching</option>
            <option value="1">Watched</option>
            <option value="2">Dropped</option>
          </select>
          <input
            type="range"
            min="0"
            max="10"
            className="range range-warning"
          />
        </div>
      </>
    );
  }
};

export default MainCardContent;
