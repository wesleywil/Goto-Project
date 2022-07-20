import { useEffect, useState } from "react";
import { allAnimes, searchByStatus } from "../../server/db_functions_animes";
import ReactPaginate from "react-paginate";

import AnimeInfo from "../anime_info/anime_info.component";
import ButtonStatus from "../button_status/button_status.component";

const AnimeList = ({ searchQuery }) => {
  const [animes, setAnimes] = useState([]);
  const [currentItems, setCurrentItems] = useState([]);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);

  const getListAnimes = async () => {
    const res = await allAnimes();
    console.log("ALL ANIMES==> ", res);
    if (typeof searchQuery == "undefined") {
      setAnimes(res);
    } else {
      if (searchQuery.length) {
        setAnimes(searchQuery);
      } else {
        setAnimes(res);
      }
    }
  };

  useEffect(() => {
    console.log("Search Results", animes);
    const endOffset = itemOffset + 4;
    console.log(`Loading items from ${itemOffset} to ${endOffset}`);
    setCurrentItems(animes.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(animes.length / 4));
  }, [searchQuery, itemOffset, animes]);

  useEffect(() => {
    console.log("second useeffect");
    getListAnimes();
  }, [searchQuery]);

  const handlePageClick = (event) => {
    console.log("Clicked page change!");
    console.log(animes);
    const newOffset = (event.selected * 4) % animes.length;
    console.log(`
      User requested page number ${event.selected}, which is offset ${newOffset}
      `);
    setItemOffset(newOffset);
  };

  const handleStatus = async (status) => {
    if (typeof status == "undefined") {
      const res = await allAnimes();
      console.log("All");
      setAnimes(res);
    } else {
      const res = await searchByStatus(status);
      console.log("Status ", status);
      setAnimes(res);
    }
  };

  return (
    <div className="mt-32">
      <h1 className="text-white text-3xl font-semibold uppercase underline text-center">
        My Animes
      </h1>
      <ButtonStatus setAnimes={setAnimes} handle={handleStatus} />
      <div className="mt-2 p-2 xl:flex xl:flex-wrap grid grid-cols-2 justify-center">
        {currentItems.length ? (
          currentItems.map((item) => (
            <AnimeInfo key={item.id} item={item} isAnime={true} />
          ))
        ) : (
          <h1 className="w-full fixed right-0 left-0 text-8xl  text-center">
            NO ANIMES ADDED YET!
          </h1>
        )}
      </div>
      <div className="flex justify-center mx-auto p-2">
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

export default AnimeList;
