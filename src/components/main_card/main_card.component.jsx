import { useState, useEffect } from "react";
import { useSelector } from "react-redux";

import MainCardContent from "../main_card_content/main_card_content.component";

const MainCard = ({info}) => {
  const cardInDB = useSelector((state)=> state.utils.cardInDB);
  const [backgroundImage, setBackgroundImage] = useState("https://dummyimage.com/220x270");
  
  useEffect(()=>{
    console.log('Main card')
    if(info){
      if(cardInDB){
        setBackgroundImage(info.image)
      }else{
        try {
          setBackgroundImage(info.images.webp.image_url)
        } catch (error) {
          console.log('ERROR IN THE IMAGE' + error);
        }
      }
    }
  },[backgroundImage, info])

    return (
      <div
        className=" p-2 border rounded-xl"
        style={{
          width: "220px",
          height: "270px",
          backgroundImage: "url"+"("+`${backgroundImage}`+")",
        }}
      >
        <div className="w-full h-full p-2 flex flex-col items-center justify-between bg-black/40 border border-red-600 rounded-xl">
          <MainCardContent item={info}/>
        </div>
      </div>
    );
};

export default MainCard;
