import AnimeCardContent from "../anime_card_content/anime_card_content.component";

const AnimeCard = () => {  
    return (
      <div
        className=" p-2 border rounded-xl"
        style={{
          width: "220px",
          height: "270px",
          backgroundImage: "url('https://dummyimage.com/200x200')",
        }}
      >
        <div className="w-full h-full p-2 flex flex-col items-center justify-between bg-black/40 border border-red-600 rounded-xl">
          <AnimeCardContent/>
        </div>
      </div>
    );
};

export default AnimeCard;
