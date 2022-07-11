import AnimeInfo from "../../components/anime_info/anime_info.component";
import SearchBar from "../../components/search_bar/search_bar.component";
const NewAnime = () => {
  return (
    <div className="container mx-auto">
      <h1 className="text-white text-3xl font-semibold uppercase underline text-center">
        New Anime
      </h1>
      <div className="flex justify-center">
        <SearchBar />
      </div>
      <div className="mt-5 p-2 flex flex-wrap">
        <AnimeInfo />
        <AnimeInfo />
        <AnimeInfo />
        <AnimeInfo />
      </div>
    </div>
  );
};

const Homepage = () => {
  return (
    <div className="h-screen mx-auto  p-2">
      {/* Topo Menu */}
      <div className="bg-slate-800/60 p-2 flex gap-4">
        <div className="self-center">
          <button className="bg-red-900 hover:bg-red-900/60 text-white hover:text-slate-200 text-xl uppercase font-semibold p-2 rounded-xl">
            New Anime +
          </button>
        </div>

        <SearchBar />
      </div>
      {/* Content */}
      <div className="mt-5 bg-slate-800/60 p-2 flex flex-wrap">
        {/* <AnimeInfo />
        <AnimeInfo />
        <AnimeInfo />
        <AnimeInfo /> */}
        <NewAnime />
      </div>
    </div>
  );
};

export default Homepage;
