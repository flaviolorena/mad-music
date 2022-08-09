import React from "react";
import NavBar from "../NavBar";
import { MusicInfo } from "../MusicInfo";
import { MusicCover } from "../MusicCover";
import { PlayButton } from "../PlayButton";
import {Container, Content, ButtonContainer, CoverContainer } from './styles'
import { DislikeButton } from "../DislikeButton";
import { LikeButton } from "../LikeButton";
import music from '../../mock/music.js'

export default function Layout() {

    return(
        <Container>
            <NavBar/>
            <Content>
                
                <MusicInfo />
                <ButtonContainer>
                    <PlayButton />
                    <LikeButton/>
                    <DislikeButton/>
                </ButtonContainer>
                <CoverContainer>
                    <MusicCover {...music} />
                    <MusicCover {...music} />
                </CoverContainer>
            </Content>
        </Container>
    )
}