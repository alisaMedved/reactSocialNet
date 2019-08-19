import React from 'react';
import {addNewPostActionCreator, onPostChangeActionCreator} from "./../../../redux/profileReducer";
import MyPosts from "./MyPosts";

const MyPostsContainer = (props) => {

    const addNewPost = () => {
        const action = addNewPostActionCreator();
        props.dispatch(action);
    };

    const onPostChange = (text) => {
        const action = onPostChangeActionCreator(text);
        props.dispatch(action);
    };

    return (
        <MyPosts addPostText={onPostChange} addPost={addNewPost} dataPosts={props.dataPosts}
                 newPostText = {props.newPostText}/>
    );
};

export default MyPostsContainer;
