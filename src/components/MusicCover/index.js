import React from "react";

import { Container, Info, Title } from './styles';

export function MusicCover(props) {
    return(
        <Container border={props.info.selected} onClick={() => props.onClick()} >
            <Title>{props.info.titulo}</Title>
            <Info>{props.info.artista}</Info>
            <Info>{props.info.album}</Info>
            <Info>{props.info.ano}</Info>
        </Container>
    ) 
}