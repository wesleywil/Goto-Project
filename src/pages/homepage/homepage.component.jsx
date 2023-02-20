import { FaSearch, FaHome, FaList } from "react-icons/fa";

import Menu from "../../components/menu/menu.component";
import SearchBar2 from "../../components/search_bar_2/search_bar_2.component";
import ItemShowcase from "../../components/item_showcase/item_showcase.component";

const Homepage = () => {
  return (
    <div className="p-2 h-screen border text-white">
      {/* Search Bar */}
      <SearchBar2 />
      {/* Menu Homepage Button - List Animes/Mangas */}
      <Menu />
      {/* Project Name */}
      <div className="flex flex-col items-center mt-4">
        <h1 className="text-7xl font-bold">GO TO</h1>
        <h2 className="text-xl font-semibold">Animes & Mangas</h2>
      </div>
      {/* Quantity of Animes and Mangas Added */}
      <div className="mt-4 flex justify-center gap-4">
        <ItemShowcase qtd={300} name="Goto Animes" color={"blue"} />
        <ItemShowcase qtd={2850} name="Goto Mangas" color={"green"} />
      </div>
    </div>
  );
};

export default Homepage;
