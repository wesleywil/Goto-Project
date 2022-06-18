import React from "react";
import axios from "axios";

import { AnimeSearchContainer } from "./anime.search.styles";

const AnimeSearch = (hidden)=>{

    return(
        <AnimeSearchContainer hidden={hidden}></AnimeSearchContainer>
    )
}

export default AnimeSearch;