import React from "react";

import {MenuBar, Container, List, Title, Search, MenuIcon, LeftArrow} from './styles'
import {NavItem} from '../NavItem'

export default function NavBar() {
    return(
        <MenuBar>
            
            <Container>
                <LeftArrow/>
                <Title>MAD Music</Title>
                <List>
                    <NavItem title="Home" href="/" />|
                    <NavItem title="Playlist" href="playlist" />|
                    <NavItem title="Sign in" href="signin" />|
                    <a href="/search"> <Search/> </a> 
                </List>
                <MenuIcon/>
            </Container>
        </MenuBar>
    )
}