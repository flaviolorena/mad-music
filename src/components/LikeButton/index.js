import React from "react";
import { Button, Thumb } from './styles';

export default function LikeButton(props) {
    return(
        <Button> 
            <Thumb info={props.info}/>
        </Button>
    )
}