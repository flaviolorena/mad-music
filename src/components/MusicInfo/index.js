import React from "react";

import {Container, MusicTitle, Information} from './styles'

export function MusicInfo(props) {
    return(
        <Container>
            <MusicTitle> {props.info.title}</MusicTitle>
            {props.info.artist && 
            <Information>{props.info.artist} - {props.info.album} - {props.info.ano}</Information>
            }
        </Container>
    )
}