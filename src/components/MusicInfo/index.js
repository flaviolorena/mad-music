import React from "react";

import {Container, MusicTitle, Information} from './styles'

export function MusicInfo() {
    return(
        <Container>
            <MusicTitle> Título Música </MusicTitle>
            <Information>Album - Pessoa - Ano</Information>
        </Container>
    )
}