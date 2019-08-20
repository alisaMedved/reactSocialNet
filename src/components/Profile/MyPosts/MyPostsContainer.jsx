import React from 'react';
import {addNewPostActionCreator, onPostChangeActionCreator} from "./../../../redux/profileReducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";


const mapStateToProps = (state) => {
  return {
      dataPosts: state.profilePage.posts,
      newPostText: state.profilePage.newPostText
  }
};

const mapDispatchToProps = (dispatch) => {
    return {
        addPostText: (text) => {
            dispatch(onPostChangeActionCreator(text));
        },
        addPost: () => {
            dispatch(addNewPostActionCreator());
        }
    }
};

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);


export default MyPostsContainer;


