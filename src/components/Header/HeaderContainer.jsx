import React, {Component} from "react";
import Header from "./Header";
import {connect} from "react-redux";
import {getMyAuthorization} from "./../../redux/authReducer";
import Preloader from "./../common/Preloader/Preloader";

class HeaderContainer extends Component {
    componentDidMount() {
        this.props.getMyAuthorization();
    }

    render() {
        return (<>
            {this.props.isFetching ? <Preloader/>
                : <Header login={this.props.login}
                          id={this.props.id}
                          email={this.props.email}
                          isAuth={this.props.isAuth}/>}
        </>);
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
    getMyAuthorization
})(HeaderContainer);
