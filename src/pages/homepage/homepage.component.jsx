import React, { useState } from "react";

import AnimeCard from "../../components/anime-card/anime-card.component";
import AnimeSearch from "../../components/anime-search/anime-search.component";

import { 
    HomePageAnimeButton, 
    HomePageAnimeContainer, 
    HomepageContainer, 
    HomepageList, 
    HomepageStatusButton, 
    HomepageStatusContainer 
} from "./homepage.styles";



const Homepage = ()=>{
    const [hiddenPanel, setHiddenPanel] = useState('none');

    return(
        <HomepageContainer>
            <h1>GOTO - Project</h1>
            
            <HomePageAnimeContainer>
                <HomePageAnimeButton onClick={()=>{setHiddenPanel('block')}}>New Anime</HomePageAnimeButton>
            </HomePageAnimeContainer>
            <HomepageStatusContainer>
                <HomepageStatusButton color="green"></HomepageStatusButton>
                <HomepageStatusButton color="yellow"></HomepageStatusButton>
                <HomepageStatusButton color="red"></HomepageStatusButton>
            </HomepageStatusContainer>
            <HomepageList>
                <AnimeCard></AnimeCard>
                <AnimeCard></AnimeCard>
                <AnimeCard></AnimeCard>
                <AnimeCard></AnimeCard>
                <AnimeCard></AnimeCard>
                <AnimeCard></AnimeCard>
            </HomepageList>
            <AnimeSearch hidden={hiddenPanel} setHidden={setHiddenPanel}></AnimeSearch>
        </HomepageContainer>
    )
}

export default Homepage;