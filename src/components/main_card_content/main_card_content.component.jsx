import { useEffect } from "react";
import { useSelector } from "react-redux";

import { createAnime } from "../../server/db_functions_animes";
import { createManga } from "../../server/db_functions_mangas";

const MainCardContent = ({item}) => {
  const cardInDB = useSelector((state) => state.utils.cardInDB);
  const isAnime = useSelector((state)=> state.utils.isAnime);

  useEffect(()=>{
    console.log('IS ANIME=> ', isAnime);
  },[isAnime])

  const handleAddAnime = (itemData)=>{
    const data = {
      title: itemData.title,
      image: itemData.images.webp.image_url,
      description: itemData.synopsis,
      link: "",
      status: "Reading/Watching",
      rate: 5,
      review: "",
    };

    if (isAnime) {
      console.log("Creating anime...");
      createAnime(data).then((res) => {
        //setMessage(res);
        console.log(res);
        // setTimeout(() => location.reload(), 4000);
      });
    } else {
      console.log("Creating manga...");
      createManga(data).then((res) => {
        //setMessage(res);
        console.log(res);
        // setTimeout(() => location.reload(), 4000);
      });
    }
  }
  if (!cardInDB) {
    return (
      <>
        <div className="flex flex-col items-center justify-center">
          <h1 className="text-2xl">{item?item.title:"Anime's Name"}</h1>
          <h2>{item? isAnime?item.aired.prop.from.year:item.published.prop.from.year:"No Year"}</h2>
        </div>
        <button onClick={()=>handleAddAnime(item)} className="w-full text-xl font-bold bg-red-600 hover:bg-red-800 rounded-xl">
          Add
        </button>
      </>
    );
  } else {
    return (
      <>
        <div className="flex flex-col items-center justify-center">
          <h1 className="text-2xl">Anime's name</h1>
          <h2>(2002)</h2>
        </div>
        <div className="w-full flex flex-col gap-2">
          <select className="w-full text-black text-xl rounded">
            <option value="0">Watching</option>
            <option value="1">Watched</option>
            <option value="2">Dropped</option>
          </select>
          <input
            type="range"
            min="0"
            max="10"
            className="range range-warning"
          />
          <button className="w-full text-xl font-bold bg-red-600 hover:bg-red-800 rounded-xl">
          Update
        </button>
        </div>
      </>
    );
  }
};

export default MainCardContent;
