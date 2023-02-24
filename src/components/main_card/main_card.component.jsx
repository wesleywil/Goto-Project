import MainCardContent from "../main_card_content/main_card_content.component";

const MainCard = ({info}) => {  
    return (
      <div
        className=" p-2 border rounded-xl"
        style={{
          width: "220px",
          height: "270px",
          backgroundImage: "url"+"("+`${info.images.webp.image_url}`+")",
        }}
      >
        <div className="w-full h-full p-2 flex flex-col items-center justify-between bg-black/40 border border-red-600 rounded-xl">
          <MainCardContent item={info}/>
        </div>
      </div>
    );
};

export default MainCard;
