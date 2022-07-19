import { useState } from "react";

import AnimeModal from "../anime_modal/anime_modal.component";

import { createAnime } from "../../server/db_functions_animes";
import { createManga } from "../../server/db_functions_mangas";

const NewAnimeCard = ({ item, isanime }) => {
  const [opacity, setOpacity] = useState("hidden");
  const [message, setMessage] = useState("");

  const handleAddAnime = (item, isanime) => {
    const data = {
      title: item.title,
      image: item.images.webp.image_url,
      description: item.synopsis,
      link: "",
      status: "Reading/Watching",
      rate: 5,
      review: "",
    };

    if (isanime) {
      console.log("Creating anime...");
      createAnime(data).then((res) => {
        setMessage(res);
        console.log(res);
        setTimeout(location.reload(), 4000);
      });
    } else {
      console.log("Creating manga...");
      createManga(data).then((res) => {
        setMessage(res);
        console.log(res);
        setTimeout(location.reload(), 4000);
      });
    }
  };

  const handleOpacity = (opacity) => {
    setOpacity(opacity);
  };
  return (
    <div className="flex  justify-center items-center m-2 ">
      <div className="card card-side bg-base-100 shadow-xl">
        <figure>
          <img
            className="h-full "
            src={item.images.webp.image_url}
            alt="Movie"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            {item.title.length > 24
              ? item.title.slice(0, 24) + "..."
              : item.title}
          </h2>
          <button onClick={() => handleOpacity("")} className="btn btn-primary">
            open description
          </button>
          <AnimeModal item={item} opacity={opacity} setOpacity={setOpacity} />
          <span>
            Year:{" "}
            <span>
              {typeof item.aired == "undefined"
                ? item.published.prop.from.year
                : item.aired.prop.from.year}
            </span>
          </span>

          <div className="card-actions justify-end">
            <button
              onClick={() => handleAddAnime(item, isanime)}
              className="btn btn-primary"
            >
              ADD
            </button>
          </div>
          <div>
            {message === "" ? (
              ""
            ) : message.status === 400 ? (
              <h1 className="text-center p-2 border-2 border-red-600 text-red-600 rounded-xl">
                {message.message}
              </h1>
            ) : (
              <h1 className="text-center p-2 border-2 border-green-600 text-green-600 rounded-xl">
                {message.message}
              </h1>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewAnimeCard;
