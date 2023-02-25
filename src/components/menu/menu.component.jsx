import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { FaHome, FaList,FaPlus } from "react-icons/fa";
import { set_is_anime, set_cardInDB } from "../../redux/utils/utils";

const Menu = () => {
  const dispatch = useDispatch();
  const setConfig = (isAnime, cardInDB)=>{
    dispatch(set_is_anime(isAnime))
    dispatch(set_cardInDB(cardInDB))
  }
  return (
    <div className="flex justify-center gap-2 text-3xl mt-2">
      <div className="tooltip tooltip-bottom" data-tip="Homepage">
        <div className="bg-red-600 p-2 rounded">
          <Link to="/">
            <FaHome />
          </Link>
        </div>
      </div>
      <div className="tooltip tooltip-bottom" data-tip="Animes">
        <div className="bg-blue-600 p-2 rounded">
          <Link to="/animes" onClick={()=> setConfig(true,true)}>
            <FaList />
          </Link>
        </div>
      </div>
      <div className="tooltip tooltip-bottom" data-tip="Mangas">
        <div className="bg-green-600 p-2 rounded">
          <Link to="/mangas" onClick={()=> setConfig(false,true)}>
            <FaList />
          </Link>
        </div>
      </div>
      <div className="tooltip tooltip-bottom" data-tip="Add Mangas/Animes">
        <div className="bg-purple-600 p-2 rounded">
          <Link to="/add" onClick={()=> dispatch(set_cardInDB(false))}>
            <FaPlus />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Menu;
