import React, { useEffect } from "react";

import { updateAnimeById } from "../../database/database_connection.component";

import { 
    UpdateCardContainer,
    UpdateCardClose,
    UpdateCardTitle,
    UpdateCardSubContainer,
    UpdateCardAnimeInfo,
    UpdateCardAnimeImage,
    UpdateCardAnimeSpan,
    UpdateCardAnimeParagraph,
    UpdateCardReviewInfo,
    UpdateCardCheckboxContainer,
    UpdateCardCheckbox,
    UpdateCardInput,
    UpdateCardSelect,
    UpdateCardTextArea,
    UpdateCardButtonContainer,
    UpdateCardButton,
} from "./update.card.styles";



const UpdateAnimeComponent = ({data, hidden, setHidden})=>{

    
    const handleCloseWindow = ()=>{
        setHidden('none');
    }

    useEffect(()=>{
        if(data === null){
            console.log('NO DATA');
        }else{
            var selectObj = document.getElementById('status');
            var selectObj2 = document.getElementById('rate');
            selectObj[data.status].selected = true;
            selectObj2[data.rate].selected = true;
        }

    },[])

    const handleUpdateAnimeReview = (id)=>{
        const priority = document.getElementById('priority').checked;
        const chapter = document.getElementById('chapter').value;
        const status = document.getElementById('status').value;
        const rate = document.getElementById('rate').value;
        const review = document.getElementById('review').value;
        const data = {priority,chapter,status,rate,review}
        
        updateAnimeById(id, data).then(()=>{
            handleCloseWindow()
        })
    }

    return(
        <UpdateCardContainer hidden={hidden}>

            <UpdateCardClose onClick={()=>handleCloseWindow()}>X</UpdateCardClose>
            {(data === null)?
                <UpdateCardTitle>NO DATA</UpdateCardTitle>
            :
                <>
                <UpdateCardTitle>Update Anime Review</UpdateCardTitle>
                <UpdateCardSubContainer>
                    <UpdateCardAnimeInfo>
                        <UpdateCardAnimeImage src={data.image_url}/>
                        <UpdateCardAnimeSpan fSize={'2rem'}>{data.title}</UpdateCardAnimeSpan>
                        <UpdateCardAnimeSpan fSize={'1.3rem'}>Year: {data.year}</UpdateCardAnimeSpan>
                        <UpdateCardAnimeParagraph>
                            {data.synopsis}
                        </UpdateCardAnimeParagraph>
                    </UpdateCardAnimeInfo>
                    <UpdateCardReviewInfo>
                        <UpdateCardAnimeSpan fSize={'1.3rem'}>Priority</UpdateCardAnimeSpan>
                        <UpdateCardCheckboxContainer>
                            <UpdateCardCheckbox id='priority' type='checkbox' defaultChecked={data.priority}/>
                        </UpdateCardCheckboxContainer>
                        <UpdateCardAnimeSpan fSize={'1.3rem'}>Chapter</UpdateCardAnimeSpan>
                        <UpdateCardInput id='chapter' type='number'  defaultValue={data.chapter}/>
                        <UpdateCardAnimeSpan fSize={'1.3rem'}>Status</UpdateCardAnimeSpan>
                        <UpdateCardSelect id='status'>
                            <option value={0}>Watching</option>
                            <option value={1}>Watched</option>
                            <option value={2}>Dropped</option>
                        </UpdateCardSelect>
                        <UpdateCardAnimeSpan fSize={'1.3rem'}>Rate</UpdateCardAnimeSpan>
                        <UpdateCardSelect id='rate'>
                            <option value={0}>Horrible</option>
                            <option value={1}>Very Bad</option>
                            <option value={2}>Bad</option>
                            <option value={3}>Good</option>
                            <option value={4}>Very Good</option>
                            <option value={5}>Perfect</option>
                        </UpdateCardSelect>
                        <UpdateCardAnimeSpan fSize={'1.3rem'}>Review</UpdateCardAnimeSpan>
                    <UpdateCardTextArea id='review' defaultValue={data.review}></UpdateCardTextArea>
                        <UpdateCardButtonContainer>
                            <UpdateCardButton onClick={()=>handleUpdateAnimeReview(data.anime_id)}>Update</UpdateCardButton>
                            <UpdateCardButton onClick={()=>handleCloseWindow()}>Cancel</UpdateCardButton>
                        </UpdateCardButtonContainer>
                    </UpdateCardReviewInfo>
                </UpdateCardSubContainer>
                </>
            }
        </UpdateCardContainer>
    )
}

export default UpdateAnimeComponent;