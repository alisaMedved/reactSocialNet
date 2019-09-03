import React, {Component}  from 'react';
import {connect} from "react-redux";
import {follow, unfollow, setUsers, setCurrentPage, setTotalUsersCount, toggleIsFetching} from "./../../redux/usersReducer";
import * as axios from "axios";
import Users from "./Users";
import Preloader from "./../common/Preloader/Preloader";

class UsersContainer extends Component {

    componentDidMount() {
        this.props.toggleIsFetching(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.pageSize}&page=${this.props.currentPage}`,
            {withCredentials: true})
            .then(response => {
                this.props.toggleIsFetching(false);
                this.props.setUsers(response.data.items);
                this.props.setTotalUsersCount(response.data.totalCount);
            });
    }


    onPageChanged = (pageNumber) => {
        this.props.setCurrentPage(pageNumber);
        this.props.toggleIsFetching(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.pageSize}&page=${pageNumber}`,
            {withCredentials: true})
            .then(response => {
                this.props.toggleIsFetching(false);
                this.props.setUsers(response.data.items);
            });
    }

    render() {
        return ( <>
            {this.props.isFetching ? <Preloader /> : <Users totalUsersCount={this.props.totalUsersCount}
                                                            pageSize={this.props.pageSize}
                                                            currentPage={this.props.currentPage}
                                                            dataUsers={this.props.dataUsers}
                                                            onPageChanged={this.onPageChanged}
                                                            follow={this.props.follow}
                                                            unfollow={this.props.unfollow}/>}
                      </>);
    }
}


const mapStateToProps = (state) => {
    return {
        dataUsers: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching
    }
};

export default connect(mapStateToProps, {
    follow,
    unfollow,
    setUsers,
    setCurrentPage,
    setTotalUsersCount,
    toggleIsFetching
})(UsersContainer);
