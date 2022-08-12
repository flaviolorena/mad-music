import React, { useState } from "react";


import { NavItem } from '../NavItem';
import { Container, LeftArrow, List, ListMenu, MenuBar, MenuIcon, OpenMenu, Search, Title } from './styles';

export default function NavBar() {

const [isOpen, setIsOpen] = useState(false)

function openMenu(){
    setIsOpen(!isOpen)
}
    return(
        <MenuBar>
            
            <Container>
                <OpenMenu/>
                <LeftArrow/>
                <Title>MAD Music</Title>
                <List>
                    <NavItem title="Home" href="/" />|
                    <NavItem title="Playlist" href="playlist" />|
                    <NavItem title="Sign in" href="signin" />|
                    <a href="/search"> <Search/> </a> 
                </List>
                <MenuIcon onClick={() => openMenu()} />

                <OpenMenu info={isOpen} >
                   <ListMenu>
                       <MenuIcon onClick={() => openMenu()} />
 
                        <NavItem title="Home" href="/" />
                        <NavItem title="Playlist" href="playlist" />
                        <NavItem title="Sign in" href="signin" />
                        <NavItem title="Search" href="search" />
                    </ListMenu>                 
                </OpenMenu>
            </Container>
        </MenuBar>
    )
}