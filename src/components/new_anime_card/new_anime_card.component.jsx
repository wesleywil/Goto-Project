import { useState } from "react";

const AnimeModal = ({ item, opacity, setOpacity }) => {
  return (
    <div
      className={` bg-black/50 flex justify-center fixed top-0 right-0 left-0 bottom-0  z-50 ${opacity}`}
    >
      <div className="h-96 modal-box">
        <h3 className="font-bold text-lg">Full Description</h3>
        <p className="py-4">{item.synopsis}</p>
        <div className="modal-action">
          <button
            onClick={() => setOpacity("hidden")}
            htmlFor="my-modal"
            className="btn"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

const NewAnimeCard = ({ item }) => {
  const [opacity, setOpacity] = useState("hidden");

  const handleOpacity = (opacity) => {
    setOpacity(opacity);
  };
  console.log("TITLE LENGTH? ", item.title.length);
  return (
    <div className="flex justify-center items-center m-2 ">
      <div className="card card-side bg-base-100 shadow-xl">
        <figure>
          <img src={item.images.webp.image_url} alt="Movie" />
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
            Year: <span>{item.aired.prop.from.year}</span>
          </span>

          <div className="card-actions justify-end">
            <button className="btn btn-primary">Watch</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewAnimeCard;
