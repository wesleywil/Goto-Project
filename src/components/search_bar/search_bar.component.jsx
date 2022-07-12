import { useState } from "react";

const SearchBar = ({ setQuery, handle }) => {
  const [searchInput, setSearchInput] = useState("");

  return (
    <>
      <div className="flex gap-2 ">
        {/* Search Bar */}
        <div className="form-control">
          <label className="label cursor-pointer bg-white rounded-xl">
            <span className="label-text text-black font-semibold px-2 py-1 mr-1">
              Anime/Manga
            </span>
            <input type="checkbox" className="toggle toggle-accent" />
          </label>
        </div>
        <input
          type="text"
          className="text-3xl w-4/5 text-black  rounded-l-xl px-2 py-1"
          placeholder="search anime/manga"
          onChange={(event) => {
            setSearchInput(event.target.value);
          }}
        />
        <button
          onClick={() => handle(searchInput)}
          className="text-3xl rounded-r-xl bg-red-800 hover:bg-red-900 text-white hover:text-slate-300 px-2 py-1 font-semibold"
        >
          Search
        </button>
      </div>
    </>
  );
};

export default SearchBar;
