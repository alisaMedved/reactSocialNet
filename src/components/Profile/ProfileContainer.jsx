import React, {Component} from 'react';
import Profile from "./Profile";
import {getProfile} from "./../../redux/profileReducer";
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";


class ProfileContainer extends Component {
    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = this.props.authUserId;
        }
        this.props.getProfile(userId);
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
        authUserId: state.auth.id,
    };
};


export default compose(
    connect(mapStateToProps, {getProfile}),
    withRouter)(ProfileContainer);


