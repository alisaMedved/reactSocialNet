import React from 'react';
import MyFriends from "./MyFriends";
import {connect} from "react-redux";



const mapStateToProps = (state) => {
    return {
        dataFriends: state.sidebar.friends
    }
};


const MyFriendsContainer = connect(mapStateToProps, {})(MyFriends);

export default MyFriendsContainer;
