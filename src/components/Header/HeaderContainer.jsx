import React, {Component} from "react";
import Header from "./Header";
import * as axios from "axios";
import {connect} from "react-redux";
import {setAuthUserData, toggleIsFetching} from "./../../redux/authReducer";
import Preloader from "./../common/Preloader/Preloader";

class HeaderContainer extends Component {
    componentDidMount() {
        axios.get("https://social-network.samuraijs.com/api/1.0/auth/me", {
            withCredentials: true
        })
            .then(response => {
                if (response.data.resultCode === 0) {
                    const {id, login, email} = response.data.data;
                    this.props.toggleIsFetching(false);
                    this.props.setAuthUserData(id, email, login);
                }
            })
    }

    render() {
   return (<>{this.props.isFetching ? <Preloader /> : <Header login={this.props.id}
                                                id={this.props.id}
                                                email={this.props.email}
                                                isAuth={this.props.isAuth}/>}</>);

}
}

const mapStateToProps = (state) => {
    return {
        id: state.id,
        email: state.email,
        login: state.login,
        isAuth: state.isAuth};
};

export default connect(mapStateToProps, {
    setAuthUserData,
    toggleIsFetching
})(HeaderContainer);
