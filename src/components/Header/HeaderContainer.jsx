import React, {Component} from "react";
import Header from "./Header";
import {connect} from "react-redux";
import {outMyLogin} from "../../redux/authReducer";

class HeaderContainer extends Component {

    render() {
        return ( <Header login={this.props.login}
                          id={this.props.id}
                          email={this.props.email}
                          isAuth={this.props.isAuth}
                          outMyLogin={this.props.outMyLogin}/>);
    }
}

const mapStateToProps = (state) => {
    return {
        id: state.auth.id,
        email: state.auth.email,
        login: state.auth.login,
        isAuth: state.auth.isAuth
    };
};
export default connect(mapStateToProps, {
    outMyLogin
})(HeaderContainer);
