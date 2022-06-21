import styled from "styled-components";


export const AnimeCardButton = styled.button`
    background-color:#000000c4;
    color:white;
    font-size:1.3rem;
    font-weight:bold;
    margin:5px auto;
    width:90%;
    border:1px solid #000000c4;
    border-radius:20px;
    display:${props=> props.cardHidden};
    transition: all 0.3s ease;

    &:hover{
        background-color:#000000f0;
        border:1px solid white;
    }
`;

export const AnimeCardTitle = styled.h1`
    font-size:1.2rem;
    text-align:center;
    background-color:#000000c4;
    margin:0;
    border-radius:20px 20px 0 0;
    transition: all 0.3s ease;
    

`;

export const AnimeCardContainer = styled.div`
    background-color:grey;
    width:200px;
    height:250px;
    border:1px solid white;
    border-radius:20px;
    background-image: url(${props=> props.background});
    display:flex;
    flex-direction:column;
    justify-content:space-between;
    overflow:hidden;
    transition: all 0.3s ease;
   
    

    &:hover{
        ${AnimeCardTitle}{
            opacity:0; 
        }
    }
`;



