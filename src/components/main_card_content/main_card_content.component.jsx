import { useSelector } from "react-redux";

import CardContentAdd from "../card_content_add/card_content_add.component";
import CardContentUpdate from "../card_content_update/card_content_update.component";

const MainCardContent = ({item}) => {
  const cardInDB = useSelector((state) => state.utils.cardInDB);


  if (!cardInDB) {
    return (
      <CardContentAdd item={item}/>
    );
  } else {
    return (
      <CardContentUpdate item={item}/>
    );
  }
};

export default MainCardContent;
