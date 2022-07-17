import { useEffect, useState, useRef } from "react";
import { updateAnime } from "../../server/storage";

const AnimeInfo = ({ item }) => {
  const [rate, setRate] = useState("2");
  const [hidden, setHidden] = useState(true);
  const animeLink = useRef(null);
  const animeStatus = useRef(null);
  const animeRate = useRef(null);

  const handleHidden = () => {
    setHidden(!hidden);
  };

  const handleDelete = (id) => {
    console.log("DELETED", id);
    removeAnime(id).then((res) => {
      console.log(res);
    });
  };

  const handleUpdate = (item) => {
    const data = {
      title: item.title,
      image: item.image,
      description: item.description,
      link: animeLink.current.value,
      status: animeStatus.current.value,
      rate: animeRate.current.value,
      review: item.review,
      id: item.id,
    };
    updateAnime(data).then((res) => {
      console.log("UPDATED !", res);
      location.reload();
    });
  };

  const handleGoto = (link) => {
    window.open(link, "_blank");
  };

  useEffect(() => {
    console.log("Anime Info Effect!");
  }, []);

  return (
    <div
      className="flex p-2 m-2  rounded-xl "
      style={{ width: "250px", height: "300px" }}
    >
      <div className="absolute" style={{ width: "220px", height: "270px" }}>
        <img
          className="rounded-xl border-2 p-1"
          src={item.image === "" ? "http://dummyimage.com/200x250" : item.image}
          id="image"
          style={{ width: "220px", height: "270px" }}
        />
      </div>

      <div
        className="bg-slate-500  z-10 p-2  rounded-xl absolute  opacity-0 hover:opacity-100 easy-in-out duration-500"
        style={{ width: "220px", height: "270px" }}
      >
        <div className="flex flex-col gap-1">
          <h1 className="text-black font-bold text-xl">
            {item.title.length > 24
              ? item.title.slice(0, 24) + "..."
              : item.title}
          </h1>
          <input
            type="text"
            className=" px-2 py-1 font-semibold text-black rounded-xl"
            placeholder="Link Goes Here"
            ref={animeLink}
            defaultValue={item.link}
          />
        </div>
        <select
          className="font-semibold text-black mt-2 rounded-xl px-2 py-1"
          ref={animeStatus}
          defaultValue={item.status}
        >
          <option value="" disabled>
            Select Status
          </option>
          <option value="Reading/Watching">Reading/Watching</option>
          <option value="Read/Watched">Read/Watched</option>
          <option value="Dropped">Dropped</option>
        </select>
        <h1 className="text-black font-semibold">Rate from 0 to 10</h1>
        <input
          type="range"
          min="0"
          max="10"
          defaultValue={item.rate}
          className="range  range-accent range-lg"
          ref={animeRate}
        />
        <div className="mt-2 flex flex-col gap-2 bg-slate-800/50 rounded-xl p-2">
          <div className="flex gap-2">
            <button
              onClick={() => handleGoto(item.link)}
              className="text-xl text-green-400 hover:text-green-500  font-semibold"
            >
              GOTO
            </button>
            <button
              onClick={() => {
                handleUpdate(item);
              }}
              className="text-xl text-yellow-400 hover:text-yellow-500  font-semibold"
            >
              Update
            </button>
            <button
              onClick={() => handleHidden()}
              className="text-xl text-red-400 hover:text-red-500  font-semibold"
            >
              Delete
            </button>
          </div>
          <span className={hidden ? "hidden" : ""}>
            Are you sure you want to delete this?{" "}
            <span
              onClick={() => handleDelete(item.id)}
              className="mx-2 font-semibold text-red-400 cursor-pointer	 hover:text-red-600"
            >
              YES
            </span>
            <span
              onClick={() => setHidden(!hidden)}
              className="mx-2 font-semibold text-green-400 cursor-pointer	 hover:text-green-600"
            >
              NO
            </span>
          </span>
        </div>
      </div>
    </div>
  );
};

export default AnimeInfo;
