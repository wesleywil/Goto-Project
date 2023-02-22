import { Link } from "react-router-dom";
import { FaHome, FaList } from "react-icons/fa";

const Menu = () => {
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
          <Link to="/animes">
            <FaList />
          </Link>
        </div>
      </div>
      <div className="tooltip tooltip-bottom" data-tip="Mangas">
        <div className="bg-green-600 p-2 rounded">
          <Link to="/mangas">
            <FaList />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Menu;
