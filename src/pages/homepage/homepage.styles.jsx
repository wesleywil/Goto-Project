import styled from "styled-components";

export const HomepageContainer = styled.div`
    background-color:var(--dark-main-color);
    width:80%;
    margin:50px auto;
    border:1px solid var(--main-color);
    border-radius:50px;
    padding:10px;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    
`;

export const HomePageTitle =styled.h1`
    text-transform:uppercase;
    text-decoration:underline;
    text-align:center;
    color:var(--lighter-oposite-color);
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
    color:var(--dark-main-color);
    background-color:var(--lighter-oposite-color);
    border:1px solid var(--lighter-oposite-color);
    border-radius:10px;
    padding:5px 10px;
    text-align:center;
    transition: all 0.5s ease;
    box-shadow: -2px 3px var(--oposite-color);

    &:hover{
        color:var(--lighter-oposite-color);
        background-color:var(--dark-main-color);
        border:1px solid var(--lighter-oposite-color);
        box-shadow: -1px 1px var(--oposite-color);
    }

    &:focus{
        box-shadow: -1px 1px var(--oposite-color);
    }
`;

export const HomepageStatusContainer = styled.div`
    border:2px solid var(--lighter-main-color);
    border-radius:20px;
    width:30%;
    height:50px;
    margin:10px auto;
    padding:10px;
    display:flex;
    gap:20px;
    align-items:center;
    justify-content:center;


`;

export const HomepageStatusButton = styled.button`
    width:25px;
    height:25px;
    border-radius:100%;
    background-color:${props=>props.color};
    transition:all 1s ease;

    & span{
        display:none;
        font-size:1.3rem;
        font-weight:bold;
        transition:all 1s ease;
        
    }

    &:hover{
        border-radius:20px;
        width:auto;
        height:auto;
        opacity:50%;
        
        & span{
            display:block;
        }
    }
`;

export const HomepageList = styled.div`
    border:1px solid var(--lighter-main-color);
    border-radius:20px;
    width:90%;
    margin:10px auto;
    padding:10px;
    display:flex;
    flex-wrap:wrap;
    justify-content:center;
    gap:10px;
`;