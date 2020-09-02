import React from 'react';
import './Story.css';
import {Avatar} from '@material-ui/core';

function Story(props) {
    return (
        <div className="story"
            style={{backgroundImage: `url(${props.image})`}}>
            <Avatar className="stroy__avatar" src={props.profileSrc} />
            <h4>{props.title}</h4>
        </div>
    )
}

export default Story