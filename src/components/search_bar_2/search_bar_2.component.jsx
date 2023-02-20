import { FaSearch } from "react-icons/fa";
const SearchBar2 = () => {
  return (
    <div className="border-b border-red-600 pb-2">
      <div className="flex justify-center gap-1 mt-4 text-xl">
        <span className="self-center">Animes</span>
        <input type="checkbox" className="self-center toggle" />
        <span className="self-center">Mangas</span>
        <input type="text" placeholder="Search for Anime/Manga" className="text-black text-3xl rounded-l-xl px-2" />
        <button className=" bg-red-600 px-4 rounded-r-xl"><FaSearch /></button>
      </div>
    </div>
  )
}

export default SearchBar2;