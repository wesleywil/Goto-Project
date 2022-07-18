import { useState } from "react";
import { searchByStatus, allAnimes } from "../../server/db_functions_animes";

const ButtonStatus = ({ setAnimes }) => {
  const [searchQuery] = useState();

  const handleStatus = async (status) => {
    if (typeof status == "undefined") {
      const res = await allAnimes();
      console.log("All");
      setAnimes(res);
    } else {
      const res = await searchByStatus(status);
      console.log("Status ", status);
      setAnimes(res);
    }
  };

  return (
    <div className="ml-3 mt-2 mb-2 flex gap-2 p-2">
      <div className="tooltip tooltip-bottom tooltip-primary" data-tip="All">
        <button
          onClick={() => handleStatus()}
          className="p-3 bg-violet-400 hover:bg-violet-600 rounded-full "
        ></button>
      </div>

      <div
        className="tooltip tooltip-bottom tooltip-success"
        data-tip="Reading/Watching"
      >
        <button
          onClick={() => handleStatus("Reading/Watching")}
          className="p-3 bg-green-400 hover:bg-green-600 rounded-full "
        ></button>
      </div>

      <div
        className="tooltip tooltip-bottom tooltip-warning"
        data-tip="Read/Watched"
      >
        <button
          onClick={() => handleStatus("Read/Watched")}
          className="p-3 bg-yellow-400 hover:bg-yellow-600 rounded-full "
        ></button>
      </div>
      <div className="tooltip tooltip-bottom tooltip-error" data-tip="Dropped">
        <button
          onClick={() => handleStatus("Dropped")}
          className="p-3 bg-red-400 hover:bg-red-600 rounded-full "
        ></button>
      </div>
    </div>
  );
};

export default ButtonStatus;
