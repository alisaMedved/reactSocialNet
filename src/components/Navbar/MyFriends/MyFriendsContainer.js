import React from 'react';
import MyFriends from "./MyFriends";
import storeContext from "./../../../../src/storeContext";

const MyFriendsContainer = () => {
    return <storeContext.Consumer>
        {
            store => {
                return (
                    <MyFriends dataFriends = {store.getState().sidebar.friends}/>
                );
            }
        }
    </storeContext.Consumer>
};

export default MyFriendsContainer;
