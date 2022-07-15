import { useState } from "react";
// import { createAnime, alterTable } from "../../database/storage";

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

const handleAddAnime = (item) => {
  const data = {
    title: item.title,
    description: item.synopsis,
    image: item.images.webp.image_url,
    link: "",
    status: "Reading/Watching",
    rate: 5,
    review: "",
  };
  // console.log("RESULT==> ", data);
  //createAnime(data);
};

// const handleAlterTable = () => {
//   console.log("TEST", alterTable());
// };

const NewAnimeCard = ({ item }) => {
  const [opacity, setOpacity] = useState("hidden");

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
            Year: <span>{item.aired.prop.from.year}</span>
          </span>

          <div className="card-actions justify-end">
            <button
              onClick={() => handleAddAnime(item)}
              className="btn btn-primary"
            >
              ADD
            </button>
            <button onClick={() => handleAlterTable()}>Update Table</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewAnimeCard;
