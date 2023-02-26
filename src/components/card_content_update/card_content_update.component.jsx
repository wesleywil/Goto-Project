import { useRef, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { updateAnime, deleteAnime } from "../../redux/animes/animes";
import { updateManga, deleteManga } from "../../redux/mangas/mangas";

const CardContentUpdate = ({ item }) => {
  const link = useRef(null);
  const status = useRef(null);
  const rate = useRef(null);
  const [hidden, setHidden] = useState(true);
  const isAnime = useSelector((state) => state.utils.isAnime);
  const dispatch = useDispatch();

  const handleHidden = () => {
    setHidden(!hidden);
  };

  const handleUpdateData = () => {
    const data = {
      title: item.title,
      image: item.image,
      description: item.description,
      link: link.current.value,
      status: status.current.value,
      rate: rate.current.value,
      review: item.review,
      id: item.id,
    };

    if (isAnime) {
      console.log("Anime data=> ", data);
      dispatch(updateAnime(data))
    } else {
      console.log("Manga data=> ", data);
      dispatch(updateManga(data))
    }
  };

  const handleDelete = () => {
    if (isAnime) {
      dispatch(deleteAnime(item.id))
      
      setHidden(!hidden);
    } else {
      dispatch(deleteManga(item.id));
      setHidden(!hidden);
    }
  };
  const handleGoto = (link) => {
    window.open(link, "_blank");
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
        {/* <h2>(2002)</h2> */}
      </div>
      <div className="w-full flex flex-col gap-2">
        <input
          className="w-full text-black text-xl rounded"
          defaultValue={item ? item.link : ""}
          ref={link}
          type="text"
          placeholder="Link in where you watch/read"
        />
        <select
          className="w-full text-black text-xl rounded"
          defaultValue={item ? item.status : "None"}
          ref={status}
        >
          <option value="None" disabled>
            None
          </option>
          <option value="Reading/Watching">Reading/Watching</option>
          <option value="Read/Watched">Read/Watched</option>
          <option value="Dropped">Dropped</option>
        </select>
        <input
          type="range"
          min="0"
          max="10"
          defaultValue={item ? item.rate : 5}
          ref={rate}
          className="range range-warning"
        />
        <div className="flex justify-center gap-3 bg-black/50 backdrop-blur-sm rounded">
          <button
            onClick={() => handleGoto(link)}
            className="font-bold text-blue-400 hover:text-blue-600 hover:underline"
          >
            GOTO
          </button>
          <button
            onClick={() => handleUpdateData()}
            className="font-bold text-green-400 hover:text-green-600 hover:underline"
          >
            Update
          </button>
          <button
            onClick={() => handleHidden()}
            className="font-bold text-red-400 hover:text-red-600 hover:underline"
          >
            Delete
          </button>
        </div>
        <div
          className={
            hidden
              ? "hidden"
              : "" +
                "w-full flex flex-col items-center bg-black/50 backdrop-blur-sm rounded"
          }
        >
          <h1>Delete?</h1>
          <div className="flex gap-2 font-bold">
            <button
              onClick={() => {
                handleDelete();
              }}
              className="text-red-400 hover:text-red-600"
            >
              Yes
            </button>
            /
            <button
              onClick={() => setHidden(!hidden)}
              className="text-green-400 hover:text-green-600"
            >
              No
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default CardContentUpdate;
