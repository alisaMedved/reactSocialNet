import React from 'react';
import {addNewPost, onPostChange} from "./../../../redux/profileReducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";


const mapStateToProps = (state) => {
  return {
      dataPosts: state.profilePage.posts,
      newPostText: state.profilePage.newPostText
  }
};


const MyPostsContainer = connect(mapStateToProps, {
    onPostChange,
    addNewPost
})(MyPosts);


export default MyPostsContainer;


