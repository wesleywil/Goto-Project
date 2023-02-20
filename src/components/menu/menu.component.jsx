import { FaHome, FaList } from "react-icons/fa";

const Menu = ()=>{
    return(
<div className="flex justify-center gap-2 text-3xl mt-2">
        <div className="tooltip tooltip-bottom" data-tip="Homepage">
          <button className="bg-red-600 p-2 rounded"><FaHome /></button>
        </div>
        <div className="tooltip tooltip-bottom" data-tip="Animes">
          <button className="bg-blue-600 p-2 rounded"><FaList /></button> 
        </div>
        <div className="tooltip tooltip-bottom" data-tip="Mangas">
          <button className="bg-green-600 p-2 rounded"><FaList /></button>
        </div>
      </div>
    )
}

export default Menu;