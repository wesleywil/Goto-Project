import React from "react";

import { 
    AnimeCardContainer,
    AnimeCardTitle,
    AnimeCardButton,
} from "./anime-card.styles";

const AnimeCard = ({name, background, handle, hidden, buttonName})=>{
    return(
       <AnimeCardContainer background={background}>
        <AnimeCardTitle>{name}</AnimeCardTitle>
        <AnimeCardButton onClick={()=>handle()} cardHidden={hidden}>{buttonName}</AnimeCardButton>
       </AnimeCardContainer>
    )
}

export default AnimeCard;