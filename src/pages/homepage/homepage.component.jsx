import { useState } from "react";
import { FaPlus, FaListUl } from "react-icons/fa";

import SearchBar from "../../components/search_bar/search_bar.component";
import NewAnime from "../../components/new_anime/new_anime.component";
import AnimeList from "../../components/anime_list/anime_list.component";
import MangaList from "../../components/manga_list/manga_list.component";
import LoadingComponent from "../../components/loading/loading.component";
import { searchAnimeByTitle } from "../../server/db_functions_animes";

// import { invoke } from "@tauri-apps/api";

const Homepage = () => {
  const [view, setView] = useState(<LoadingComponent />);
  const [searchQuery] = useState();

  const test = () => {
    // invoke("greet", { name: "Wesley" }).then((res) => console.log(res));
  };

  const handleSearch = async (searchInput) => {
    const res = await searchAnimeByTitle(searchInput);
    console.log(res);
    // setSearchQuery(res);
    setView(<AnimeList searchQuery={res} />);
  };

  return (
    <div className=" mx-auto  p-2">
      {/* Topo Menu */}
      <div className="bg-slate-800/60 p-2 flex justify-center">
        {/* Search Bar */}
        <div className="flex flex-col w-3/5	 gap-2 items-center self-center p-2">
          <SearchBar handle={handleSearch} />
        </div>
      </div>
      {/* Content */}
      <div className="mt-5">
        <div className="flex flex-col gap-2 float-left">
          <div
            className="tooltip tooltip-right tooltip-primary"
            data-tip="New Anime/Manga"
          >
            <button
              onClick={() => setView(<NewAnime />)}
              className="bg-red-900 hover:bg-red-900/60 text-white hover:text-slate-200 text-xl uppercase font-semibold p-3 rounded-full"
            >
              <FaPlus />
            </button>
          </div>
          <div
            className="tooltip tooltip-right tooltip-primary"
            data-tip="List Animes"
          >
            <button
              onClick={() => setView(<AnimeList searchQuery={searchQuery} />)}
              className="bg-red-900 hover:bg-red-900/60 text-white hover:text-slate-200 text-xl uppercase font-semibold p-3 rounded-full"
            >
              <FaListUl />
            </button>
          </div>
          <div
            className="tooltip tooltip-right tooltip-primary"
            data-tip="List Mangass"
          >
            <button
              onClick={() => setView(<MangaList searchQuery={searchQuery} />)}
              className="bg-red-900 hover:bg-red-900/60 text-white hover:text-slate-200 text-xl uppercase font-semibold p-3 rounded-full"
            >
              <FaListUl />
            </button>
          </div>
        </div>

        <div className="mt-2 p-2 flex flex-wrap justify-center">{view}</div>
      </div>
    </div>
  );
};

export default Homepage;
