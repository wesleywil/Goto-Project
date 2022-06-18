import styled from "styled-components";

export const HomepageContainer = styled.div`
    background-color:black;
    width:80%;
    margin:50px auto;
    border-radius:50px;
    padding:10px;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    color:white;
`;

export const HomePageAnimeContainer = styled.div`
    width:30%;
    margin:10px auto;
    padding:10px;
    display:flex;
    gap:10px;
    justify-content:center;
`;

export const HomePageAnimeButton = styled.button`
    font-size:1.3rem;
    font-weight:bold;
    text-transform:uppercase;
    color:black;
    background-color:white;
    border:1px solid white;
    border-radius:10px;
    padding:5px 10px;
    text-align:center;

    &:hover{
        color:white;
        background-color:black;
        border:1px solid white;
    }
`;

export const HomepageStatusContainer = styled.div`
    border:1px solid white;
    border-radius:20px;
    width:30%;
    margin:10px auto;
    padding:10px;
    display:flex;
    gap:10px;
    justify-content:center;


`;

export const HomepageStatusButton = styled.button`
    width:25px;
    height:25px;
    border-radius:100%;
    background-color:${props=>props.color};

    &:hover{
        opacity:50%;
    }
`;

export const HomepageList = styled.div`
    border:1px solid white;
    border-radius:20px;
    width:90%;
    margin:10px auto;
    padding:10px;
    display:flex;
    flex-wrap:wrap;
    justify-content:center;
    gap:10px;
`;