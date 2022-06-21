import React, { useEffect, useState } from "react";
import axios from "axios";

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
    const [animes, setAnimes] = useState([]);

   useEffect(()=>{
    console.log('Use Effect Trigger')
    const obj = {integerValue:'269'}
    console.log(obj['integerValue'])
    axios.get(`https://firestore.googleapis.com/v1/projects/project-goto-animes/databases/(default)/documents/animes`)
    .then((response)=>{
        setAnimes(response.data.documents)
        console.log(response.data.documents)
    })
   },[])

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
                {(animes.length)?
                    animes.map((anime)=>(
                        <AnimeCard key={JSON.stringify(anime.key)} name={anime.fields.title['stringValue']} background={anime.fields.image_url['stringValue']}/>
                    ))
                :
                    <h1>EMPTY ARRAY</h1>
                }
            </HomepageList>
            <AnimeSearch hidden={hiddenPanel} setHidden={setHiddenPanel}></AnimeSearch>
        </HomepageContainer>
    )
}

export default Homepage;