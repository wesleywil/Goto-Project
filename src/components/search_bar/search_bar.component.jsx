const SearchBar = () => {
  return (
    <div className="flex flex-col w-3/5	 gap-2 items-center self-center p-2">
      <div className="flex gap-2">
        {/* Search Bar */}
        <input
          type="text"
          className="text-3xl w-4/5 text-black  rounded-l-xl px-2 py-1"
          placeholder="search anime/manga"
        />
        <button className="text-3xl rounded-r-xl bg-red-800 hover:bg-red-900 text-white hover:text-slate-300 px-2 py-1 font-semibold">
          Search
        </button>
      </div>
      <div className="flex gap-4  relative right-32 items-start">
        <button className="bg-blue-500 hover:bg-blue-600 text-white text-xl  font-semibold px-2 rounded-xl">
          Mangas
        </button>
        <button className="bg-green-600 hover:bg-green-700 text-white text-xl  font-semibold px-2 rounded-xl">
          Animes
        </button>
      </div>
    </div>
  );
};

export default SearchBar;
