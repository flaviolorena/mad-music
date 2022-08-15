import React, { useState } from "react";


import music from '../../mock/music.js';
import DislikeButton from "../DislikeButton";
import LikeButton from "../LikeButton";
import { MusicCover } from "../MusicCover";
import { MusicInfo } from "../MusicInfo";
import NavBar from "../NavBar";
import { PlayButton } from "../PlayButton";
import { ButtonContainer, Container, Content, CoverContainer } from './styles';


export default function Layout() {
const [playing, setPlaying] = useState({
    title: "Selecione sua música",
    artist: "",
    album: "",
    ano: null,
    selected: false,
    like: false,
    dislike: false,
});

function like(item){
    setPlaying({
        ...playing,
        like: !item.like,
        dislike: false,

    })
    
}
function dislike(item){
    setPlaying({
        ...playing,
        like: false,
        dislike: !item.dislike,

    })
    
}

const handleMusic = (item) =>{
    function unsetSelected() {
        music.map((item) => item.selected = false)
    }
    unsetSelected()
    setPlaying({
        title: item.titulo,
        artist: item.artista,
        album: item.album,
        ano: item.ano,
        selected: false,
        like: false,
        dislike: false,
        cover: item.cover,
    })
    isSelected()
    function isSelected(){
        item.selected = !item.selected;
    }

}

const musicCard = music.map((item ) => <MusicCover key={item.id} info={item} onClick={() => handleMusic(item)}  />)

    return(
        <Container info={playing.cover}>
            <NavBar/>
            <Content>
                
                <MusicInfo info={playing} />
                <ButtonContainer>
                    <PlayButton />
                    <LikeButton  info={playing} onClick={() => like(playing)} />
                    <DislikeButton info={playing} onClick={() => dislike(playing)} />
                </ButtonContainer>
                <CoverContainer >
                    {musicCard}
                </CoverContainer>
            </Content>

        </Container>
    )
}