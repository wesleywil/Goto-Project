import AnimeCard from "../../components/anime_card/anime_card.component";
import Menu from "../../components/menu/menu.component";
import SearchBar2 from "../../components/search_bar_2/search_bar_2.component";

const Animes = () => {
  return (
    <div className="p-2 h-screen border text-white">
      <SearchBar2 />
      <Menu />
      <div className="flex flex-col items-center mt-4">
        <h1 className="text-7xl font-bold">GO TO</h1>
        <h2 className="text-xl font-semibold">Animes & Mangas</h2>
      </div>
       {/* Anime List */}
      <div className="mt-4 flex flex-wrap gap-2">
            <AnimeCard/>
            <AnimeCard/>
            <AnimeCard/>
      </div>
    </div>
  );
};

export default Animes;
