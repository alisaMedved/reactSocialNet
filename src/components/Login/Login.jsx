import React from 'react';
import s from "./Login.module.css";
import {reduxForm, Field} from 'redux-form';
import {connect} from "react-redux";
import {postMyLogin} from "../../redux/authReducer";
import {Input} from "../common/FormControls/FormControls";
import {requiredField} from "../../utils/validators/validators";
import {Redirect} from "react-router-dom";

const LoginForm = (props) => {
    return (
            <form onSubmit={props.handleSubmit}>
                <div><Field component={Input} validate={[requiredField]} name={"email"}
                            placeholder={"email"} type={"text"}/></div>
                <div><Field component={Input} validate={[requiredField]} name={"password"}
                            placeholder={"Password"} type={"password"}/></div>
                <div><Field component={Input} name={"rememberMe"} type={"checkbox"}/>Remember me</div>
                <div>
                    <button>Login или Войти</button>
                </div>
            </form>
    );
};

const LoginReduxForm = reduxForm({form: "login"})(LoginForm);

const Login = (props) => {
    const onSubmit = (formData) => {
        props.postMyLogin(formData.email, formData.password, formData.rememberMe);
    };
    if (props.isAuth) {
        return <Redirect to={"/profile"} />
    }
    return (
        <div className={s.loginBlock}>
            <h1>Login</h1>
          <LoginReduxForm onSubmit ={onSubmit}/>
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth
    }
};

export default connect(mapStateToProps, {postMyLogin})(Login);
