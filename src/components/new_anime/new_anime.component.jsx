import { useState, useEffect } from "react";
import axios from "axios";
import ReactPaginate from "react-paginate";

import NewAnimeCard from "../new_anime_card/new_anime_card.component";
import SearchBar from "../search_bar/search_bar.component";

const NewAnime = () => {
  const [query, setQuery] = useState([]);
  const [currentItems, setCurrentItems] = useState([]);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);
  const [isAnime, setIsAnime] = useState(true);

  const handleSearch = async (searchInput, toggle) => {
    console.log("Searching...");
    let res = "";
    if (toggle.current.checked) {
      res = await axios.get(`https://api.jikan.moe/v4/manga?q=${searchInput}`);
      setIsAnime(false);
    } else {
      res = await axios.get(`https://api.jikan.moe/v4/anime?q=${searchInput}`);
      setIsAnime(true);
    }

    console.log("Results", res);
    setQuery(res.data.data);
    const endOffset = itemOffset + 4;
    console.log(`Loading items from ${itemOffset} to ${endOffset}`);
    setCurrentItems(res.data.data.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(res.data.data.length / 4));
  };

  useEffect(() => {
    console.log("Using effect...");
    const endOffset = itemOffset + 4;
    if (query.length) {
      setCurrentItems(query.slice(itemOffset, endOffset));
      setPageCount(Math.ceil(query.length / 4));
    }
  }, [itemOffset, query]);

  const handlePageClick = (event) => {
    console.log("Clicked page change!");
    console.log(query);
    const newOffset = (event.selected * 4) % query.length;
    console.log(`
      User requested page number ${event.selected}, which is offset ${newOffset}
      `);
    setItemOffset(newOffset);
  };
  return (
    <div className=" border-2 container mx-auto  flex flex-col justify-center">
      <h1 className="text-white text-3xl font-semibold uppercase underline text-center">
        New Anime
      </h1>
      <div className="flex flex-col gap-2 items-center  p-2">
        <SearchBar setQuery={setQuery} handle={handleSearch} />
      </div>
      <div className="mt-5 p-2 xl:flex  grid grid-cols-2 justify-center justify-items-center">
        {currentItems.length ? (
          currentItems.map((item) => (
            <NewAnimeCard key={item.mal_id} item={item} isanime={isAnime} />
          ))
        ) : (
          <h1
            className="text-8xl text-blue-200 mx-auto text-center"
            style={{ width: "750px" }}
          >
            Make Your Search!
          </h1>
        )}
      </div>
      <div className="mx-auto p-2">
        <ReactPaginate
          breakLabel="..."
          nextLabel="NEXT >"
          onPageChange={handlePageClick}
          pageRangeDisplayed={5}
          pageCount={pageCount}
          previousLabel="< PREVIOUS"
          renderOnZeroPageCount={null}
          containerClassName="ml-10 flex gap-2"
          pageClassName=" bg-red-800 hover:bg-red-900 p-2 text-white font-semibold "
          nextClassName="bg-red-800 hover:bg-red-900 p-2 text-white font-semibold"
          previousClassName="bg-red-800 hover:bg-red-900 p-2 text-white font-semibold"
          activeClassName="bg-black"
          disabledClassName="bg-slate-800 hover:slate-900"
        />
      </div>
    </div>
  );
};

export default NewAnime;
