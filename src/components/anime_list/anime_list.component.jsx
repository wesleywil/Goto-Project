import AnimeInfo from "../anime_info/anime_info.component";
import { allAnimes } from "../../database/storage";
import { useEffect, useState } from "react";
const AnimeList = () => {
  const [animes, setAnimes] = useState([]);

  useEffect(() => {
    console.log("Anime List Useeffect");
    const handleList = async () => {
      const res = await allAnimes();
      setAnimes(res);
      console.log("RESULTS ANIMES ==> ", res[0]);
    };
    handleList();
  }, []);

  return (
    <div className="mt-32">
      <h1 className="text-white text-3xl font-semibold uppercase underline text-center">
        New Anime
      </h1>
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
