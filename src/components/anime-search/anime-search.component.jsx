import React, { useState } from "react";
import axios from "axios";

import {
    AnimeSearchContainer, 
    AnimeSearchMain, 
    AnimeSearchStyle,
    AnimeSearchButton,
    AnimeSearchInput, 
    AnimeSearchList
} from "./anime.search.styles";
import AnimeCard from "../anime-card/anime-card.component";

const AnimeSearch = ({hidden})=>{
    const [listAnime, setListAnime] = useState([]);

    const handleSearch = ()=>{
        let anime = document.getElementById('serchAnime').value;
        // The Limit means how many will be brought in the request
        axios.get(`https://api.jikan.moe/v4/anime?q=${anime}?limit=10`)
        .then((response)=>{
            console.log(response.data)
            setListAnime(response.data.data)
        })
    }


    return(
        <AnimeSearchContainer hidden={hidden}>
            <AnimeSearchMain>
                <AnimeSearchStyle>
                    <AnimeSearchInput id="serchAnime" type='text' placeholder='anime name' />
                    <AnimeSearchButton onClick={()=>handleSearch()}>Search</AnimeSearchButton>
                </AnimeSearchStyle>
                <AnimeSearchList>
                    {(listAnime.length)?
                        listAnime.slice(0,7).map((anime)=>(
                            <AnimeCard key={anime.mal_id} name={anime.title}/>
                        ))
                    :
                        <h1>NOTHING SEARCHED!</h1>
                    }
                </AnimeSearchList>
            </AnimeSearchMain>
        </AnimeSearchContainer>
    )
}

export default AnimeSearch;