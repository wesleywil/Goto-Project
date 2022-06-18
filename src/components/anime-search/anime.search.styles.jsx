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
    display:${props=>props.hidden}
`;