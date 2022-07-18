import { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import { allMangas } from "../../server/db_functions_mangas";

import AnimeInfo from "../anime_info/anime_info.component";
import ButtonStatus from "../button_status/button_status.component";

const MangaList = ({ searchQuery }) => {
  const [mangas, setMangas] = useState([]);
  const [currentItems, setCurrentItems] = useState([]);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);

  const getListMangas = async () => {
    const res = await allMangas();
    console.log("ALL MANGAS ==> ", res);
    if (typeof searchQuery == "undefined") {
      setMangas(res);
    } else {
      if (searchQuery.length) {
        setMangas(searchQuery);
      } else {
        setMangas(res);
      }
    }
  };

  useEffect(() => {
    console.log("Search Results", mangas);
    const endOffset = itemOffset + 4;
    console.log(`Loading items from ${itemOffset} to ${endOffset}`);
    setCurrentItems(mangas.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(mangas.length / 4));
  }, [searchQuery, itemOffset, mangas]);

  useEffect(() => {
    console.log("second useeffect");
    getListMangas();
  }, [searchQuery]);

  const handlePageClick = (event) => {
    console.log("Clicked page change!");
    console.log(mangas);
    const newOffset = (event.selected * 4) % mangas.length;
    console.log(`
      User requested page number ${event.selected}, which is offset ${newOffset}
      `);
    setItemOffset(newOffset);
  };

  return (
    <div className="mt-32">
      <h1 className="text-white text-3xl font-semibold uppercase underline text-center">
        My Mangas
      </h1>
      <ButtonStatus setAnimes={setMangas} />
      <div className="mt-2 p-2 xl:flex xl:flex-wrap grid grid-cols-2 justify-center">
        {currentItems.length ? (
          currentItems.map((item) => <AnimeInfo key={item.id} item={item} />)
        ) : (
          <h1 className="w-full fixed right-0 left-0 text-8xl  text-center">
            NO MANGAS ADDED YET!
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

export default MangaList;
