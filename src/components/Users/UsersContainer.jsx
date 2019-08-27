import React from 'react';
import {connect} from "react-redux";
import UsersApiComponent from "./UsersApiComponent";
import {followAC, unfollowAC, setUsersAC, setCurrentPageAC, setTotalUsersCountAC} from "./../../redux/usersReducer";

const mapStateToProps = (state) => {
    return {
        dataUsers: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage
    }
};

const mapDispatchToProps = (dispatch) => {
   return {
       follow: (userId) => {
           dispatch(followAC(userId));
       },
       unfollow: (userId) => {
           dispatch(unfollowAC(userId));
       },
       setUsers: (users) => {
           dispatch(setUsersAC(users));
       },
       setCurrentPage: (pageNumber) => {
           dispatch(setCurrentPageAC(pageNumber));
       },
       setTotalUsersCount: (totalCount) => {
           dispatch(setTotalUsersCountAC(totalCount));
       }
   }
};

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(UsersApiComponent);


export default UsersContainer;
