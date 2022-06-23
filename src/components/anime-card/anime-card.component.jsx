import React from "react";

import { 
    AnimeCardContainer,
    AnimeCardTitle,
    AnimeCardButton,
} from "./anime-card.styles";

const AnimeCard = ({name, background, handle, hidden, buttonName, border})=>{
    return(
       <AnimeCardContainer background={background} border={border}>
        <AnimeCardTitle>{name}</AnimeCardTitle>
        <AnimeCardButton onClick={()=>handle()} cardHidden={hidden}>{buttonName}</AnimeCardButton>
       </AnimeCardContainer>
    )
}

export default AnimeCard;