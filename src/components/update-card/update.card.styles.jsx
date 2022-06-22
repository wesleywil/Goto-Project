import styled from "styled-components";


export const UpdateCardContainer = styled.div`
    border:1px solid var(--lighter-main-color);
    border-radius:20px;
    background-color:var(--main-color);
    margin:5px auto;
    width:80%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    position:absolute;
    top:100px;
    display:${props=> props.hidden};

    @media(max-width:1200px){
        width:60%;
    }
`;

export const UpdateCardClose = styled.button`
    margin: 10px 0 5px 95%;
    padding:2px 7px;
    color:var(--lighter-oposite-color);
    font-size:2rem;
    font-weight:bold;
    border:0;
    border-radius:50%;
    background-color:#f0f8ff00;

    &:hover{
        color:var(--dark-main-color);
    }

    @media(max-width:1200px){
        margin:10px 0 5px 90%;
    }
`;

export const UpdateCardTitle = styled.h1`
    text-align:center;
    text-transform:uppercase;
    text-decoration:underline;
    font-weight:bold;
    color:var(--lighter-oposite-color);
`;

export const UpdateCardSubContainer = styled.div`
    margin:5px auto;
    padding:5px;
    display:grid;
    grid-template-columns: 850px 500px;
    grid-gap:10px;
    justify-content:center;

    @media(max-width:1200px){
        display:flex;
        flex-direction:column;
    }
`;

export const UpdateCardAnimeInfo = styled.div`
   
    border:2px solid var(--dark-main-color);
    border-radius:20px;
    padding:5px;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
`;

export const UpdateCardAnimeImage = styled.img`
    border:1px solid var(--lighter-oposite-color);
    border-radius:20px;
    padding:5px;
    width:200px;
    height:250px;
`;

export const UpdateCardAnimeSpan = styled.span`
    color:var(--lighter-oposite-color);
    font-size:${props=>props.fSize};
    font-weight:bold;

`;

export const UpdateCardAnimeParagraph = styled.p`
    color:var(--lighter-oposite-color);
    background-color:var(--dark-main-color);
    font-size:1.3rem;
    border:1px solid var(--lighter-oposite-color);
    border-radius:20px;
    padding:10px;
    text-align:justify;


    &::-webkit-scrollbar {
        width:10px;
        border-radius:20px;
        margin:0 20px;
        
    }

    &::-webkit-scrollbar-track {
        padding:50px;
        border-radius:20px;
        background-color:var(--main-color);
        margin:0 20px
    }

    &::-webkit-scrollbar-thumb {
        background-color:var(--lighter-oposite-color);
        border-radius:20px;
        margin:0 20px;
    }

    &::-webkit-scrollbar-button{
        color:white;
        border:0 20px;
    }


    @media(max-width:1200px){
        height:200px;
        overflow-y: scroll;
    }
`;

export const UpdateCardReviewInfo = styled.div`
    border:1px solid var(--dark-main-color);
    border-radius:20px;
    padding:10px;
    

`;

export const UpdateCardCheckboxContainer = styled.div`
    display:flex;
    justify-content:center;
    margin:5px;
`;

export const UpdateCardCheckbox = styled.input`
    &[type=checkbox]{
        -webkit-appearance: none;
        -moz-appearance: none;
        vertical-align: middle;
        width: 40px; 
        height: 40px;
        font-size: 14px;
        background-color: var(--dark-main-color);
        border:1px solid var(--lighter-oposite-color);

        &:checked:after {
            position: relative;
            text-align:center;
            font-size:2.2rem;
            left:6px;
            color: var(--lighter-oposite-color);
            content: "X";
        }
    }

`;

export const UpdateCardInput = styled.input`
    margin:2px 0;
    width:100%;
    padding:5px 2px;
    font-size:1.3rem;
    color:var(--lighter-oposite-color);
    background-color:var(--dark-main-color);
    border:0;
`;

export const UpdateCardSelect = styled.select`
    width:100%;
    padding:5px 2px;
    font-size:1.3rem;
    color:var(--lighter-oposite-color);
    background-color:var(--dark-main-color);
    border:0;

`;

export const UpdateCardTextArea = styled.textarea`
    width:100%;
    color:var(--lighter-oposite-color);
    background-color:var(--dark-main-color);
    font-size:1.3rem;
    padding:5px 2px;
    border:0;
`;

export const UpdateCardButtonContainer = styled.div`
    margin:5px 0;
    padding:10px 5px;
    display:flex;
    justify-content:center;
    gap:5px;
    border:1px solid var(--lighter-oposite-color);
    border-radius:20px;
`;

export const UpdateCardButton = styled.button`
    padding:5px 20px;
    font-size:1.3rem;
    font-weight:bold;
    text-transform:uppercase;
    color:var(--dark-main-color);
    background-color:var(--lighter-oposite-color);
    border:1px solid black;
    border-radius:20px;
    transition: all 0.3s ease;

    &:hover{
        color:var(--lighter-oposite-color);
        background-color:var(--dark-main-color);
        border:1px solid var(--dark-main-color);

    }
`;


