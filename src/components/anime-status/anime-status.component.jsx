import React from "react";

import { AnimeStatusButton } from "./anime-status.styles";

const AnimeStatus = ({setAnimeFilter, setBorderColor, animes})=>{
    const setMapFilter= (cBorder, status, animesArray)=>{
            setBorderColor(cBorder);
            const mapFilter = animesArray.filter(item => item.fields.status['integerValue'] === status);
            setAnimeFilter(mapFilter);
    }

    return(
        <>
            <AnimeStatusButton
                id='watching_button'
                color={'#7AB747'}
                onClick={()=>{setMapFilter('#7AB747', '0', animes)}}
            >
                <span>Watching</span>
            </AnimeStatusButton>
            <AnimeStatusButton
                id='watched_button'
                color={'#FFC400'}
                onClick={()=>{setMapFilter('#FFC400', '1', animes)}}
            >
                <span>Watched</span>
            </AnimeStatusButton>
            <AnimeStatusButton
                id='dropped_button'
                color={'#B93636'}
                onClick={()=>{setMapFilter('#B93636', '2', animes)}}
            >
                <span>Dropped</span>
            </AnimeStatusButton>
            <AnimeStatusButton
                id='reset_button'
                color={'var(--lighter-main-color)'}
                onClick={()=>{setBorderColor('var(--lighter-main-color)'); setAnimeFilter(animes)}}
            >
                <span>ALL</span>
            </AnimeStatusButton>
        </>
    )
}

export default AnimeStatus;