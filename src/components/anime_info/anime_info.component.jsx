import { useState } from "react";

const AnimeInfo = () => {
  const [rate, setRate] = useState("2");
  return (
    <div className="flex items-center gap-2 p-2 m-2 border-2">
      <img
        className="rounded-xl border-2 p-1"
        src="https://dummyimage.com/200x250"
      />
      <div className="bg-slate-500 h-52 p-2 w-1/2 rounded-xl relative right-52 opacity-0 hover:opacity-100 easy-in-out duration-500">
        <div className="flex gap-1">
          <input
            type="text"
            className=" px-2 py-1 font-semibold text-black rounded-xl"
            placeholder="Link Goes Here"
          />
        </div>
        <select className="font-semibold text-black mt-2 rounded-xl px-2 py-1">
          <option value="">Select Status</option>
          <option value="">Reading/Watching</option>
          <option value="">Read/Watched</option>
          <option value="">Dropped</option>
        </select>
        <h1 className="text-black font-semibold">Rate from 0 to 10</h1>
        <input
          type="range"
          min="0"
          max="10"
          defaultValue={rate}
          className="range  range-accent range-lg"
        />
        <div className="mt-2 flex gap-2">
          <button className="text-black bg-green-400 hover:bg-green-500 px-2 py-1 text-xl font-semibold rounded-xl">
            GOTO
          </button>
          <button className="text-black bg-red-400 hover:bg-red-500 px-2 py-1 text-xl font-semibold rounded-xl">
            Update
          </button>
        </div>
      </div>
    </div>
  );
};

export default AnimeInfo;
