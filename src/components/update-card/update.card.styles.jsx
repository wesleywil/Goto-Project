import styled from "styled-components";


export const UpdateCardContainer = styled.div`
    border:1px solid black;
    border-radius:20px;
    background-color:white;
    margin:5px auto;
    width:60%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    position:absolute;
    top:100px;
    display:${props=> props.hidden};
`;

export const UpdateCardClose = styled.button`
    margin: 10px 0 5px 95%;
    padding:2px 7px;
    color:black;
    font-size:2rem;
    font-weight:bold;
    border:0;
    border-radius:50%;
    background-color:#f0f8ff00;

    &:hover{
        color:red;
    }
`;

export const UpdateCardTitle = styled.h1`
    text-align:center;
    color:black;
`;

export const UpdateCardSubContainer = styled.div`
    margin:5px auto;
    padding:5px;
    display:grid;
    grid-template-columns: 650px 500px;
    grid-gap:10px;
`;

export const UpdateCardAnimeInfo = styled.div`
   
    border:1px solid black;
    border-radius:20px;
    padding:5px;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
`;

export const UpdateCardAnimeImage = styled.img`
    border:1px solid black;
    border-radius:20px;
    padding:5px;
    width:200px;
    height:250px;
`;

export const UpdateCardAnimeSpan = styled.span`
    color:black;
    font-size:${props=>props.fSize};
    font-weight:bold;

`;

export const UpdateCardAnimeParagraph = styled.p`
    color:black;
    font-size:1.3rem;
    border:1px solid black;
    border-radius:20px;
    padding:5px;
`;

export const UpdateCardReviewInfo = styled.div`
    border:1px solid black;
    border-radius:20px;
    padding:10px;
`;

export const UpdateCardCheckbox = styled.input`
    color:black;
    width:100%;
`;

export const UpdateCardInput = styled.input`
    width:100%;
    padding:2px 0;
    font-size:1.3rem;
`;

export const UpdateCardSelect = styled.select`
    width:100%;
    padding:2px 0;
    font-size:1.3rem;
`;

export const UpdateCardTextArea = styled.textarea`
    width:100%;
    color:black;
    font-size:1.3rem;
    padding:2px 0;
`;

export const UpdateCardButtonContainer = styled.div`
    margin:5px 0;
    padding:5px;
    display:flex;
    justify-content:center;
    gap:5px;
`;

export const UpdateCardButton = styled.button`
    padding:5px 20px;
    color:white;
    background-color:black;
    border:1px solid black;
    border-radius:20px;

    &:hover{
        color:black;
        background-color:white;
        border:1px solid black;
    }
`;


