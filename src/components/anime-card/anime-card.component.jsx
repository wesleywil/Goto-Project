import React from "react";

import { 
    AnimeCardContainer,
    AnimeCardTitle,
    AnimeCardButton,
} from "./anime-card.styles";

const AnimeCard = ({name, background, handle, hidden})=>{
    return(
       <AnimeCardContainer background={background}>
        <AnimeCardTitle>{name}</AnimeCardTitle>
        <AnimeCardButton onClick={()=>handle()} cardHidden={hidden}>Add</AnimeCardButton>
       </AnimeCardContainer>
    )
}

export default AnimeCard;