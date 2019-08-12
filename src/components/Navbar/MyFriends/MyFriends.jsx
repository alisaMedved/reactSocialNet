import React from 'react';
import Friend from "./Friend/Friend";
import s from "./MyFriends.module.css";

const MyFriends = ({dataFriends}) => {
    const friendsElements = dataFriends.friends
        .map((f) => <Friend key={f.id} name={f.name} avatarka={f.avatarkaSRC}/>)
    return (
        <div className={s.MyFriendsBlock}>
            <h3>Friends</h3>
            <div className={s.MyFriends}>{friendsElements}</div>
        </div>
    );
};

export default MyFriends;
