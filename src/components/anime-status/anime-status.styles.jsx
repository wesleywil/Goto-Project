import styled from "styled-components";


export const AnimeStatusButton = styled.button`
    width:25px;
    height:25px;
    border-radius:100%;
    border:1px solid ${props=>props.color};
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