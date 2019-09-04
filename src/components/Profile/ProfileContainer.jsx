import React, {Component} from 'react';
import Profile from "./Profile";
import {getProfile} from "./../../redux/profileReducer";
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";
import Redirect from "react-router-dom/es/Redirect";


class ProfileContainer extends Component {
    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = this.props.authUserId;
        }
        this.props.getProfile(userId);
    }


    render() {
        if (!this.props.isAuth) return <Redirect to="/login"/>;
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
        authUserId: state.auth.id,
        isAuth: state.auth.isAuth
    };
};

const ProfileContainerURL = withRouter(ProfileContainer);

export default connect(mapStateToProps, {
    getProfile
})(ProfileContainerURL);
