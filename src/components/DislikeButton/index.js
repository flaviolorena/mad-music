import React from "react";

import { Button, Thumb } from './styles';

export default function DislikeButton(props) {

    return(
        
        <Button> 
            <Thumb info={props.info} />
        </Button>
    )
}