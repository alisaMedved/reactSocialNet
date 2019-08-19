import React from 'react';
import {addNewPostActionCreator, onPostChangeActionCreator} from "./../../../redux/profileReducer";
import MyPosts from "./MyPosts";

const MyPostsContainer = (props) => {
    const state = props.store.getState();

    const addNewPost = () => {
        const action = addNewPostActionCreator();
        props.store.dispatch(action);
    };

    const onPostChange = (text) => {
        const action = onPostChangeActionCreator(text);
        props.store.dispatch(action);
    };

    return (
        <MyPosts addPostText={onPostChange} addPost={addNewPost} dataPosts={state.profilePage.posts}
                 newPostText = {state.profilePage.newPostText}/>
    );
};

export default MyPostsContainer;

// dataPosts={props.dataProfile.posts}
// newPostText = {props.dataProfile.newPostText}
// dispatch = {props.dispatch}
