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

export default AnimeModal;
