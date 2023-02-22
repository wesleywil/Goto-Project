import Layout from "../../components/layout/layout.component";
import { FaSearch } from "react-icons/fa";
import MainCard from "../../components/main_card/main_card.component";

const Add = () => {
  return (
    <Layout name="Add Manga/Anime">
        {/* Search Bar */}
      <div className="w-full flex gap-1 p-2 text-xl border-t-2 border-purple-600 mt-2">
        <div className="flex gap-2 mr-2">
          <span className="self-center text-base">Animes</span>
          <input type="checkbox" className="self-center toggle" />
          <span className="self-center text-base">Mangas</span>
        </div>
        <div className="flex ">
        <input type="text" placeholder="Search anime/manga " className="focus:outline-0 text-black rounded-l-xl px-2"/>
        <button className="bg-purple-600 hover:bg-purple-800 px-2 rounded-r-xl"><FaSearch/></button>
        </div>
      </div>
      <div className="w-full mt-1 flex flex-wrap justify-center gap-2">
            <MainCard/>
            <MainCard/>
            <MainCard/>
            <MainCard/>
            <MainCard/>
            <MainCard/>
            <MainCard/>
            <MainCard/>
            <MainCard/>
      </div>
    </Layout>
  );
};

export default Add;
