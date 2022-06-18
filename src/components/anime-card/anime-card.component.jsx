import React from "react";

import { AnimeCardContainer } from "./anime-card.styles";

const AnimeCard = ({name})=>{

    return(
       <AnimeCardContainer>
        <h1>{name}</h1>
       </AnimeCardContainer>
    )
}

export default AnimeCard;