import styled from "styled-components";


export const AnimeSearchContainer = styled.div`
    background-color:var(--main-color);
    width:80%;
    margin:10px auto;
    padding:10px;
    border:1px solid var(--lighter-oposite-color);
    border-radius:20px;
    position:absolute;
    top:120px;
    display:${props=>props.hidden};
`;

export const AnimeSearchClose = styled.button`
    margin: 10px 0 5px 95%;
    padding:2px 7px;
    color:var(--oposite-color);
    font-size:2rem;
    font-weight:bold;
    border:0;
    border-radius:50%;
    background-color:#f0f8ff00;

    &:hover{
        color:var(--lighter-oposite-color);
    }
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
    border:1px solid var(--lighter-oposite-color);
    border-radius:20px;
    padding:20px;
    width:80%;
    
    
`;

export const AnimeSearchInput = styled.input`
    padding:5px 10px;
    font-size:1.3rem;
    font-weight:bold;
    border:1px solid var(--dark-main-color);
    border-radius:20px 0 0 20px;
    width:80%;
    background-color:var(--dark-main-color);
    color:var(--lighter-oposite-color);

    &:focus-visible{
        border:0;
    }
`;

export const AnimeSearchButton = styled.button`
    border-radius:0 20px 20px 0;
    padding:5px 10px;
    font-size:1.3rem;
    font-weight:bold;
    color:var(--dark-main-color);
    background-color:var(--lighter-oposite-color);
    border:1px solid var(--lighter-oposite-color);
    transition: all 0.3s ease;

    &:hover{
        color:var(--lighter-main-color);
        background-color:var(--dark-main-color);
        border:1px solid var(--lighter-main-color);
    }

`;

export const AnimeSearchList = styled.div`
    width:90%;
    padding:10px;
    border:1px solid var(--lighter-oposite-color);
    border-radius:20px;
    display: flex;
    flex-wrap: wrap;
    justify-content:center;
    align-items: center;
`;

export const AnimeSearchListEmpty = styled.h1`
    color:var(--dark-main-color);
    font-size:4rem;
`;
