import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

import { createAnime } from "../../server/db_functions_animes";
import { createManga } from "../../server/db_functions_mangas";

const CardContentAdd = ({ item }) => {
  const isAnime = useSelector((state) => state.utils.isAnime);
  const cardInDB = useSelector((state) => state.utils.cardInDB);
  const [year, setYear] = useState("No Year");

  useEffect(() => {
    if (!cardInDB) {
      if (isAnime) {
        setYear(item.aired.prop.from.year);
      } else {
        setYear(item.published.prop.from.year);
      }
    } else {
      setYear("No Year");
    }
  }, [item, year]);

  const handleAddAnime = (itemData) => {
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
  };

  return (
    <>
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-xl">
          {item
            ? item.title.length > 15
              ? item.title.slice(0, 15) + "..."
              : item.title
            : "Title's goes here"}
        </h1>
        <h2>{year}</h2>
      </div>
      <button
        onClick={() => handleAddAnime(item)}
        className="w-full text-xl font-bold bg-red-600 hover:bg-red-800 rounded-xl"
      >
        Add
      </button>
    </>
  );
};

export default CardContentAdd;
