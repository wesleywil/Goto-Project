const ButtonStatus = ({ handle }) => {
  return (
    <div className="ml-3 mt-2 mb-2 flex gap-2 p-2">
      <div className="tooltip tooltip-bottom tooltip-primary" data-tip="All">
        <button
          onClick={() => handle()}
          className="p-3 bg-violet-400 hover:bg-violet-600 rounded-full "
        ></button>
      </div>

      <div
        className="tooltip tooltip-bottom tooltip-success"
        data-tip="Reading/Watching"
      >
        <button
          onClick={() => handle("Reading/Watching")}
          className="p-3 bg-green-400 hover:bg-green-600 rounded-full "
        ></button>
      </div>

      <div
        className="tooltip tooltip-bottom tooltip-warning"
        data-tip="Read/Watched"
      >
        <button
          onClick={() => handle("Read/Watched")}
          className="p-3 bg-yellow-400 hover:bg-yellow-600 rounded-full "
        ></button>
      </div>
      <div className="tooltip tooltip-bottom tooltip-error" data-tip="Dropped">
        <button
          onClick={() => handle("Dropped")}
          className="p-3 bg-red-400 hover:bg-red-600 rounded-full "
        ></button>
      </div>
    </div>
  );
};

export default ButtonStatus;
