import { useEffect, useState } from "react";
import { allAnimes } from "../../server/storage";

import AnimeInfo from "../anime_info/anime_info.component";
import ButtonStatus from "../button_status/button_status.component";

const AnimeList = ({ searchQuery }) => {
  const [animes, setAnimes] = useState([]);

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
    getListAnimes();
  }, [searchQuery]);

  return (
    <div className="mt-32">
      <h1 className="text-white text-3xl font-semibold uppercase underline text-center">
        My Animes
      </h1>
      <ButtonStatus setAnimes={setAnimes} />
      <div className="mt-2 p-2 xl:flex xl:flex-wrap grid grid-cols-2 justify-center">
        {animes.length ? (
          animes.map((item) => <AnimeInfo key={item.id} item={item} />)
        ) : (
          <h1 className="w-full fixed right-0 left-0 text-8xl  text-center">
            NO ANIMES ADDED YET!
          </h1>
        )}
      </div>
    </div>
  );
};

export default AnimeList;
