import React from "react";

import {Container, Title, Info} from './styles'

export function MusicCover(props) {
    const title = props[0].titulo;
    const artist = props[0].artista;
    const album = props[0].album;
    const released = props[0].ano
    return(
        <Container>
            <Title>{title}</Title>
            <Info> {artist} </Info>
            <Info> {album} </Info>
            <Info> {released} </Info>
        </Container>
    )
}