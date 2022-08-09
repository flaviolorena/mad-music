import React from "react";

import {Container, Item} from './styles'

export function NavItem({title, href}) {
    return(
        <Container>
            <Item href={href}> {title} </Item> 
        </Container>
    )
}