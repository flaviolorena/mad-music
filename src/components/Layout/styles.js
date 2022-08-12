import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    position: absolute;
    align-items: center;
    justify-content: center;
    background-color: var(--background);
    width: 100%;
    height: 100%;
    &:before{
        content:"";
        height: 100%;
        width: 100%;
        background-image: url(${props => props.info});
        background-size: cover;
        filter: blur(3px);
        opacity: 0.8;
    }
    &:-webkit-scrollbar-track {
        background: orange;        /* color of the tracking area */
    }


`
    export const Content = styled.div`
    display: flex;
    flex-direction: column;
    position: absolute;
    top: 15vh;
    padding: 10px 30px;
    width: 100%;
    max-width: 1024px;
    max-height: 80%;

`

export const ButtonContainer = styled.div`
    display: flex;
    width: 100%;
    padding: 20px 0;
`
export const CoverContainer = styled.div`
    display: flex;
    width: 100%;
    padding: 20px 10px;
    flex-wrap: wrap;
    max-height: 100vh;
    overflow-y: scroll;


    @media(max-width: 900px) {
        align-items: center;
        // justify-content: start;
        padding: 0px 30px;
 
    }

`
export const MusicCard = styled.div`
    display: flex;
    width: 100px;
    height: 100px;
    background-color: var(--white);
    padding: 20px 0;


`
export const MusicTitle = styled.h2`
    color: var(--secondary).
    font-size: 18px;
`

export const ImgCont = styled.div`
    display: flex;
    position: absolute;
    width: 100%;
    padding: 20px 0;
    opacity: 0.1;
`
