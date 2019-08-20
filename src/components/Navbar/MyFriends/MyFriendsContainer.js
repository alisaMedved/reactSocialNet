import React from 'react';
import MyFriends from "./MyFriends";
import {connect} from "react-redux";



const mapStateToProps = (state) => {
    return {
        dataFriends: state.sidebar.friends
    }
};

const mapDispatchToProps = () => {
    return {};
};

const MyFriendsContainer = connect(mapStateToProps, mapDispatchToProps)(MyFriends);

export default MyFriendsContainer;
