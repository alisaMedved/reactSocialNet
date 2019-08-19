import React from 'react';
// import s from './Profile.module.css';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";

const Profile = (props) => {
    return (
    <div>
            <ProfileInfo/>
            <MyPostsContainer dataPosts={props.dataProfile.posts}
                     newPostText = {props.dataProfile.newPostText}
                     dispatch = {props.dispatch}/>
        </div>
    )
};

export default Profile;
