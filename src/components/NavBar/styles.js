import { FiArrowLeft, FiMenu, FiSearch } from "react-icons/fi";
import styled from "styled-components";

export const MenuBar = styled.div`
    position: absolute;
    top: 0px;
    width: 100%;
    background-color: var(--background);
    display: flex;
    justify-content: center;
    align-items: center;
    
`
    export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height:60px;
    max-width: 1200px;
`
export const List = styled.ul`
    display: flex;
    flex-direction: row;
    align-items: center;
    position:absolute;
    top: 0px;
    right: 10px;
    margin-top: 10px;
    margin-right: 20px;
    color: var(--white);

    @media(max-width: 900px) {
        display: none;
    }
`

export const Title = styled.h1`
    font-weight: bold;
    font-size: 26px;
    color: var(--white);
    text-align: center;
    position: relative;
   
`
export const Image = styled.img`
    margin-left: 25px;
`

export const Search = styled(FiSearch)`
    color: var(--white);
    width: 22px;
    height: 22px;
    margin: auto 15px;
`
export const MenuIcon = styled(FiMenu)`
    display: flex;
    color: var(--white);
    width: 32px;
    height: 32px;
    margin: auto 15px;
    position:absolute;
    top: 0px;
    right: 10px;
    margin-top: 10px;
    margin-right: 20px;
    color: var(--white);
    @media(min-width: 901px) {
        display: none;
    }
`
export const LeftArrow = styled(FiArrowLeft)`
    display: flex;
    color: var(--white);
    width: 32px;
    height: 32px;
    margin: auto 15px;
    position:absolute;
    top: 0px;
    left: 10px;
    margin-top: 10px;
    margin-right: 20px;
    color: var(--white);
    @media(min-width: 901px) {
        display: none;
    }
`

export const OpenMenu = styled.div`
    display:${(props) => props.info ? "flex" : "none"};
    z-index: 1;
    align-items: center;
    justify-content;
    position: absolute;
    top: 0px;
    right: 0px;
    width: 40%;
    height: 100vh;
    border-radius: 30px 0px 0px 30px ;
    background-color: var(--secondary);
    
`

export const ListMenu = styled.ul`
    display:flex;
    align-items: center;
    justify-content;
    flex-direction: column;
    width: 100%;
    height: 100%;
    margin-top: 100px;

 
`