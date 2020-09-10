import React from 'react';
import './Post.css';
import { Avatar } from '@material-ui/core';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import AccountCircleOutlinedIcon from '@material-ui/icons/AccountCircleOutlined';
import NearMeUpIcon from '@material-ui/icons/NearMe';
import { ExpandMoreOutlined } from '@material-ui/icons';

function Post(props) {
    console.log(props);
    return (
        <div className="post">
            <div className="post__top">
                <Avatar src={props.profilePic} 
                    className="post__avatar"
                />
                <div className="post__topInfo">
                    <h3>{props.username}</h3>
                    <p>{new Date(props.timestamp?.toDate()).toUTCString()}</p>
                </div>
            </div>

            <div className="post__bottom">
                <p>{props.message}</p>
            </div>

            <div className="post__img">
                <img src={props.image} alt="" />
            </div>

            <div className="post__options">
                <div className="post__option">
                    <ThumbUpIcon />
                    <p>Like</p>
                </div>
                <div className="post__option">
                    <ChatBubbleOutlineIcon />
                    <p>Comment</p>
                </div>
                <div className="post__option">
                    <NearMeUpIcon />
                    <p>Share</p>
                </div>
                <div className="post__option">
                    <AccountCircleOutlinedIcon />
                    <ExpandMoreOutlined />
                </div>
            </div>
        </div>
    )
}

export default Post