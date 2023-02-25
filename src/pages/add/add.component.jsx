import { useState, useRef } from "react";
import { useDispatch } from "react-redux";
import { FaSearch } from "react-icons/fa";
import { set_is_anime } from "../../redux/utils/utils";
import axios from "axios";

// Components
import Layout from "../../components/layout/layout.component";
import MainCard from "../../components/main_card/main_card.component";

const Add = () => {
  const dispatch = useDispatch();

  const [query, setQuery] = useState([]);
  const [searchInput, setSearchInput] = useState("");

  const toggle = useRef();
  const handleSearch = async () => {
    let res = "";
    if (toggle.current.checked) {
      res = await axios.get(`https://api.jikan.moe/v4/manga?q=${searchInput}`);
      dispatch(set_is_anime(false));
    } else {
      res = await axios.get(`https://api.jikan.moe/v4/anime?q=${searchInput}`);
      dispatch(set_is_anime(true));
    }
    console.log("Results=> ", res);
    setQuery(res.data.data.slice(10));
  };
  return (
    <Layout name="Add Manga/Anime">
      {/* Search Bar */}
      <div className="w-full flex gap-1 p-2 text-xl border-t-2 border-purple-600 mt-2">
        <div className="flex gap-2 mr-2">
          <span className="self-center text-base">Animes</span>
          <input type="checkbox" className="self-center toggle" ref={toggle} />
          <span className="self-center text-base">Mangas</span>
        </div>
        <div className="flex ">
          <input
            onChange={(event) => {
              setSearchInput(event.target.value);
            }}
            type="text"
            placeholder="Search anime/manga "
            className="focus:outline-0 text-black rounded-l-xl px-2"
          />
          <button
            onClick={() => handleSearch()}
            className="bg-purple-600 hover:bg-purple-800 px-2 rounded-r-xl"
          >
            <FaSearch />
          </button>
        </div>
      </div>
      {/* Main Area */}
      <div className="w-full mt-1 flex flex-wrap justify-center gap-2">
        {query.length
          ? query.map((item, i) => <MainCard key={i} info={item}/>)
          : ""}
      </div>
    </Layout>
  );
};

export default Add;
