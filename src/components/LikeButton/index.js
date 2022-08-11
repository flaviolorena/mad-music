import React from "react";

import {Button, Thumb} from './styles'

export function LikeButton(props) {
    // console.log(` dentro do comp like: ${props.info.like}`)
    return(
        <Button> 
            <Thumb info={props.info}/>
        </Button>
    )
}