import React from 'react';
import {addNewPost} from "./../../../redux/profileReducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";


const mapStateToProps = (state) => {
  return {
      dataPosts: state.profilePage.posts,
  }
};


const MyPostsContainer = connect(mapStateToProps, {addNewPost})(MyPosts);


export default MyPostsContainer;


