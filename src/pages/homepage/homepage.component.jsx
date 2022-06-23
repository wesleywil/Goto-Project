import React, { useEffect, useState } from "react";
import axios from "axios";

import AnimeCard from "../../components/anime-card/anime-card.component";
import AnimeSearch from "../../components/anime-search/anime-search.component";
import UpdateAnimeComponent from "../../components/update-card/update.card.component";
import AnimeStatus from "../../components/anime-status/anime-status.component";


import { selectAnimeById} from "../../database/database_connection.component";

import { 
    HomepageContainer,
    HomePageTitle,
    HomePageAnimeButton,
    HomePageAnimeAllButton, 
    HomePageAnimeContainer, 
    HomepageList, 
    HomepageStatusButton, 
    HomepageStatusContainer 
} from "./homepage.styles";



const Homepage = ()=>{
    const [hiddenAnimeSearch, setHiddenAnimeSearch] = useState('none');
    const [hiddenUpdateAnime, setHiddenUpdateAnime] = useState('none');
    const [updateData, setUpdateData] = useState(null);
    const [animes, setAnimes] = useState([]);

    const[borderColor, setBorderColor] = useState('var(--lighter-main-color)');
    const[animeFilter, setAnimeFilter] = useState([]);

//    useEffect(()=>{
//     console.log('Use Effect Trigger')
//     axios.get(`https://firestore.googleapis.com/v1/projects/project-goto-animes/databases/(default)/documents/animes`)
//     .then((response)=>{
//         if(response.data.documents === undefined){
//             console.log('UNDEFINED')
//             setAnimes([]);
//         }else{
//             setAnimes(response.data.documents)
//             setAnimeFilter(response.data.documents)
//             console.log(response.data.documents)
//         }

//     })
//    },[])

    const handleListAnime = ()=>{
        axios.get(`https://firestore.googleapis.com/v1/projects/project-goto-animes/databases/(default)/documents/animes`)
        .then((response)=>{
            if(response.data.documents === undefined){
                console.log('UNDEFINED')
                setAnimes([]);
            }else{
                setAnimes(response.data.documents)
                setAnimeFilter(response.data.documents)
                console.log(response.data.documents)
            }

        })  
    }

   const handleUpdateById =(id) =>{
    selectAnimeById(id).then((response)=>{
        setHiddenUpdateAnime('block');
        console.log('RESPONSE ===>',response)
        setUpdateData(response.data())
    })
   } 

    return(
        <HomepageContainer>
            <HomePageTitle>GOTO - Project</HomePageTitle>
            <HomePageAnimeContainer>
                <HomePageAnimeButton onClick={()=>{setHiddenAnimeSearch('block')}}>New Anime</HomePageAnimeButton>
                <HomePageAnimeAllButton onClick={()=>{handleListAnime()}}>SHOW ALL</HomePageAnimeAllButton>
            </HomePageAnimeContainer>
            <HomepageStatusContainer>
                <AnimeStatus setAnimeFilter={setAnimeFilter} setBorderColor={setBorderColor} animes={animes} />
            </HomepageStatusContainer>
            <HomepageList>
                {
                (animeFilter !== undefined)?
                (animeFilter.length)?
                    animeFilter.map((anime)=>(
                            <AnimeCard 
                                key={anime.fields.anime_id['integerValue']} 
                                name={anime.fields.title['stringValue']} 
                                background={anime.fields.image_url['stringValue']} 
                                handle={()=>handleUpdateById(anime.fields.anime_id['integerValue'])}
                                border={borderColor} 
                                buttonName={'Update'}
                            />
                        ))
                :
                    <h1>EMPTY ARRAY</h1>
                :
                 <h1>UNDEFINED</h1>  
                }
            </HomepageList>
            <AnimeSearch hidden={hiddenAnimeSearch} setHidden={setHiddenAnimeSearch}></AnimeSearch>
            <UpdateAnimeComponent data={updateData} hidden={hiddenUpdateAnime} setHidden={setHiddenUpdateAnime}/>
        </HomepageContainer>
    )
}

export default Homepage;