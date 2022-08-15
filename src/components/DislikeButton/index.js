import React from "react";

import { Button, Thumb } from './styles';

export default function DislikeButton(props) {

    return(
        
        <Button onClick={() => props.onClick()} > 
            <Thumb info={props.info} />
        </Button>
    )
}