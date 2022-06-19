import React, { useState } from "react";
import axios from "axios";

import AnimeCard from "../anime-card/anime-card.component";

import { createAnimeDocument } from "../../database/database_connection.component";


import {
    AnimeSearchContainer,
    AnimeSearchClose,
    AnimeSearchMain, 
    AnimeSearchStyle,
    AnimeSearchButton,
    AnimeSearchInput, 
    AnimeSearchList,
    AnimeSearchListEmpty
} from "./anime.search.styles";

const AnimeSearch = ({hidden, setHidden})=>{
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

    const handleCloseWindow = ()=>{
        setHidden('none');
        setListAnime([]);
    }

    return(
        <AnimeSearchContainer hidden={hidden}>
            <AnimeSearchMain>
                <AnimeSearchClose onClick={()=>handleCloseWindow()}>X</AnimeSearchClose>
                <AnimeSearchStyle>
                    <AnimeSearchInput id="serchAnime" type='text' placeholder='anime name' />
                    <AnimeSearchButton onClick={()=>handleSearch()}>Search</AnimeSearchButton>
                </AnimeSearchStyle>
                <AnimeSearchList>
                    {(listAnime.length)?
                        listAnime.slice(0,9).map((anime)=>(
                           
                            <AnimeCard key={anime.mal_id} name={anime.title} background={anime.images.webp.image_url} handle={()=>createAnimeDocument({anime})} cardHidden={'block'}/>
                        ))
                    :
                        <AnimeSearchListEmpty>NOTHING SEARCHED!</AnimeSearchListEmpty>
                    }
                </AnimeSearchList>
            </AnimeSearchMain>
        </AnimeSearchContainer>
    )
}

export default AnimeSearch;