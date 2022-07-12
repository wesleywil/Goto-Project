import AnimeInfo from "../anime_info/anime_info.component";
const AnimeList = () => {
  return (
    <div className="mt-32">
      <h1 className="text-white text-3xl font-semibold uppercase underline text-center">
        New Anime
      </h1>
      <div className="mt-2 p-2 xl:flex xl:flex-wrap grid grid-cols-2 justify-center">
        <AnimeInfo />
        <AnimeInfo />
        <AnimeInfo />
        <AnimeInfo />
      </div>
    </div>
  );
};

export default AnimeList;
