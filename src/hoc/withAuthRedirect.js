import React, {Component} from "react";
import Redirect from "react-router-dom/es/Redirect";
import {connect} from "react-redux";



export const withAuthRedirect = (ComponentR) => {

    class RedirectComponent extends Component {
        render() {
            if (!this.props.isAuth) return <Redirect to="/login"/>;
            return <ComponentR {...this.props} />
        }
    }
    const mapStateToProps = (state) => {
        return {isAuth: state.auth.isAuth}
    };
    return connect(mapStateToProps, {})(RedirectComponent);
};




