import styled from "styled-components";


export const AnimeCardButton = styled.button`
    background-color:var(--dark-main-color);
    color:var(--lighter-oposite-color);
    font-size:1.3rem;
    font-weight:bold;
    margin:5px auto;
    width:90%;
    border:1px solid var(--dark-main-color);
    border-radius:20px;
    display:${props=> props.cardHidden};
    transition: all 0.3s ease;

    &:hover{
        color:var(--dark-main-color);
        background-color:var(--lighter-oposite-color);
        border:1px solid var(--dark-main-color);
    }
`;

export const AnimeCardTitle = styled.h1`
    font-size:1.2rem;
    text-align:center;
    background-color:var(--dark-main-color);
    color:var(--lighter-oposite-color);
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



