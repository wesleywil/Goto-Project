import styled from "styled-components";


export const AnimeSearchContainer = styled.div`
    background-color:grey;
    width:80%;
    height:600px;
    margin:10px auto;
    border:1px solid white;
    border-radius:20px;
    position:absolute;
    top:120px;
    display:${props=>props.hidden};
`;

export const AnimeSearchMain = styled.div`
    display:flex;
    gap:10px;
    flex-direction:column;
    align-items:center;
    justify-content:center;
    width:100%;
    height:90%;
    margin:auto;
`;

export const AnimeSearchStyle = styled.div`
    border:1px solid black;
    border-radius:20px;
    padding:20px;
    width:80%;
    
    
`;

export const AnimeSearchInput = styled.input`
    padding:5px 10px;
    font-size:1.3rem;
    font-weight:bold;
    border-radius:20px 0 0 20px;
    width:80%;

    &:focus-visible{
        border:0;
    }
`;

export const AnimeSearchButton = styled.button`
    border-radius:0 20px 20px 0;
    padding:5px 10px;
    font-size:1.3rem;
    font-weight:bold;
    color:white;
    background-color:black;
    border:1px solid black;
    transition: all 0.3s ease;

    &:hover{
        color:black;
        background-color:white;
        border:1px solid white;
    }

`;

export const AnimeSearchList = styled.div`
    width:90%;
    height:400px;
    border:1px solid black;
    border-radius:20px;
    display: flex;
    flex-wrap: wrap;
    justify-content:center;
`;
