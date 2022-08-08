import React from "react";

import {MenuBar, Container, List, Title, Search} from './styles'
import {NavItem} from '../NavBar/NavItem'

export default function NavBar() {
    return(
        <MenuBar>
            
            <Container>
                <Title>MAD Music</Title>
                <List>
                    <NavItem title="Home" href="" />|
                    <NavItem title="Playlist" href="playlist" />|
                    <NavItem title="Sign in" href="signin" />|
                    <Search/>
                </List>
            </Container>
        </MenuBar>
    )
}