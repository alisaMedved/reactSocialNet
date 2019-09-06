import React from 'react';
import s from "./Login.module.css";
import {reduxForm, Field} from 'redux-form';
import {connect} from "react-redux";
import {postMyLogin} from "../../redux/authReducer";
import {Input} from "../common/FormControls/FormControls";
import {requiredField} from "../../utils/validators/validators";

const LoginForm = (props) => {
    return (
            <form onSubmit={props.handleSubmit}>
                <div><Field component={Input} validate={[requiredField]} name={"login"} placeholder={"login"}/></div>
                <div><Field component={Input} validate={[requiredField]} name={"email"} placeholder={"email"}/></div>
                <div><Field component={Input} validate={[requiredField]} name={"password"} placeholder={"Password"}/></div>
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
