import React from 'react';
// import s from './Profile.module.css';
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = ({dataProfile}) => {

    return (
    <div>
            <ProfileInfo/>
            <MyPosts dat={dataProfile}/>
        </div>
    )
};

export default Profile;
