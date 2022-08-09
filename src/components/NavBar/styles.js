import styled from "styled-components";
import {FiSearch} from "react-icons/fi"
import {FiMenu, FiArrowLeft} from "react-icons/fi"

export const MenuBar = styled.div`
    position: absolute;
    top: 5px;
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