import React from 'react';
import s from './Profile.module.css';
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";


const posts = [
    {id: 1, message: "Hi, how are you?", likesCount: '11'},
    {id: 1, message: "It's my first post", likesCount: '15'},
];


const Profile = (props) => {
    return (
        <div>
            <ProfileInfo/>
            <MyPosts data = {posts}/>
        </div>
    )
};

export default Profile;
