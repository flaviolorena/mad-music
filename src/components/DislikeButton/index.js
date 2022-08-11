import React from "react";

import {Button, Thumb,} from './styles'

export function DislikeButton(props) {

    return(
        
        <Button> 
            <Thumb info={props.info} />
        </Button>
    )
}