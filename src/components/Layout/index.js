import React,{ useState } from "react";
import NavBar from "../NavBar";
import { MusicInfo } from "../MusicInfo";
import { MusicCover } from "../MusicCover";
import { PlayButton } from "../PlayButton";
import {Container, Content, ButtonContainer, CoverContainer, } from './styles'
import { DislikeButton } from "../DislikeButton";
import { LikeButton } from "../LikeButton";
import music from '../../mock/music.js'

export default function Layout() {
const [playing, setPlaying] = useState({
    title: "Selecione sua música",
    artist: "",
    album: "",
    ano: null,
    selected: false,

});

const handleMusic = (item) =>{

    setPlaying({
        title: item.titulo,
        artist: item.artista,
        album: item.album,
        ano: item.ano,
    })
    function isSelected(){
        return item.selected = !item.selected;
    }
    isSelected()
}

const musicCard = music.map((item ) => (
    
    <span onClick={() => handleMusic(item)} >
            <MusicCover key={item.id} info={item} /> 
        </span>
    )
)
    return(
        <Container>
            <NavBar/>
            <Content>
                
                <MusicInfo info={playing} />
                <ButtonContainer>
                    <PlayButton />
                    <LikeButton/>
                    <DislikeButton/>
                </ButtonContainer>
                <CoverContainer >
                    {musicCard}
                </CoverContainer>
            </Content>
        </Container>
    )
}