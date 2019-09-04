import React, {Component} from 'react';
import {connect} from "react-redux";
import {
    setCurrentPage,
    getUsers,
    followUser,
    unfollowUser
} from "./../../redux/usersReducer";
import Users from "./Users";
import Preloader from "./../common/Preloader/Preloader";


class UsersContainer extends Component {

    componentDidMount() {
        this.props.getUsers(this.props.pageSize, this.props.currentPage);
    }
    onPageChanged = (pageNumber) => {
        this.props.getUsers(this.props.pageSize, pageNumber);
        this.props.setCurrentPage(pageNumber);
    }
    render() {
        return (<>
            {this.props.isFetching ? <Preloader/>
                : <Users totalUsersCount={this.props.totalUsersCount}
                         pageSize={this.props.pageSize}
                         currentPage={this.props.currentPage}
                         dataUsers={this.props.dataUsers}
                         onPageChanged={this.onPageChanged}


                         followingInProcess={this.props.followingInProcess}
                followUser={this.props.followUser}
                         unfollowUser={this.props.unfollowUser}
                />}
        </>);
    }
}


const mapStateToProps = (state) => {
    return {
        dataUsers: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingInProcess: state.usersPage.followingInProcess
    }
};

export default connect(mapStateToProps, {
    setCurrentPage,
    getUsers: getUsers,
    followUser: followUser,
    unfollowUser: unfollowUser
})(UsersContainer);
