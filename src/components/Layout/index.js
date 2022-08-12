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
        title: item.title,
        artist:item.artist,
        album: item.album,
        ano: item.ano,
        selected: item.selected,
        like: !item.like,
        dislike: false,
        cover: item.cover,

    })
    
}
function dislike(item){
    setPlaying({
        title: item.title,
        artist:item.artist,
        album: item.album,
        ano: item.ano,
        selected: item.selected,
        like: false,
        dislike: !item.dislike,
        cover: item.cover,

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

const musicCard = music.map((item ) => (
    
    <span onClick={() => handleMusic(item)} >
            <MusicCover key={item.id} info={item} /> 
    </span>
    )
)

    return(
        <Container info={playing.cover}>
            <NavBar/>
            <Content>
                
                <MusicInfo info={playing} />
                <ButtonContainer>
                    <PlayButton />
                    <span onClick={() => like(playing)}>
                        <LikeButton  info={playing} />
                    </span>
                    <span onClick={() => dislike(playing)} >   
                        <DislikeButton info={playing} />
                    </span>
                </ButtonContainer>
                <CoverContainer >
                    {musicCard}
                </CoverContainer>
            </Content>

        </Container>
    )
}