import React, {Component} from 'react';
import Profile from "./Profile";
import * as axios from "axios";
import {setUserProfile} from "./../../redux/profileReducer";
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";


class ProfileContainer extends Component {
    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = this.props.authUserId;
        }
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`)
            .then(response => {
                this.props.setUserProfile(response.data);
            });
    }

    render() {
        return (
            <>
                <Profile {...this.props} userProfile={this.props.userProfile}/>
            </>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        userProfile: state.profilePage.userProfile,
        authUserId: state.auth.id
    };
};

const ProfileContainerURL = withRouter(ProfileContainer);

export default connect(mapStateToProps, {
    setUserProfile
})(ProfileContainerURL);
