import React from 'react';
import s from "./Login.module.css";
import {reduxForm, Field} from 'redux-form';
import {connect} from "react-redux";
import {postMyLogin} from "../../redux/authReducer";

const LoginForm = (props) => {
    console.log(props);
    return (
            <form onSubmit={props.handleSubmit}>
                <div><Field component={"input"} name={"login"} placeholder={"login"}/></div>
                <div><Field component={"input"} name={"email"} placeholder={"email"}/></div>
                <div><Field component={"input"} name={"password"} placeholder={"Password"}/></div>
                <div><Field component={"input"} name={"rememberMe"} type={"checkbox"}/>Remember me</div>
                <div>
                    <button>Login или Войти</button>
                </div>
            </form>
    );
};

const LoginReduxForm = reduxForm({form: "login"})(LoginForm);

const Login = (props) => {
    const onSubmit = (formData) => {
        props.postMyLogin(formData);
    };
    return (
        <div className={s.loginBlock}>
            <h1>Login</h1>
          <LoginReduxForm onSubmit ={onSubmit}/>
        </div>
    );
};

const mapStateToProps = (state) => {
  return {};
};

export default connect(mapStateToProps, {postMyLogin})(Login);
