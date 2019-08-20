import React from 'react';
import {addNewPostActionCreator, onPostChangeActionCreator} from "./../../../redux/profileReducer";
import MyPosts from "./MyPosts";
import storeContext from "./../../../../src/storeContext";

const MyPostsContainer = () => {

    return (
        <storeContext.Consumer>
            {
            store => {
                const state = store.getState();
                const addNewPost = () => {
                    const action = addNewPostActionCreator();
                    store.dispatch(action);
                };

                const onPostChange = (text) => {
                    const action = onPostChangeActionCreator(text);
                    store.dispatch(action);
                };
                return (
                    <MyPosts addPostText={onPostChange} addPost={addNewPost}
                             dataPosts={state.profilePage.posts}
                             newPostText={state.profilePage.newPostText}/>)
            }
        }
        </storeContext.Consumer>
    );
};

export default MyPostsContainer;

// dataPosts={props.dataProfile.posts}
// newPostText = {props.dataProfile.newPostText}
// dispatch = {props.dispatch}
