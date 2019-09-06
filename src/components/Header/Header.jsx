import React from 'react';
import s from './Header.module.css';
import {NavLink} from 'react-router-dom';


const Header = (props) => {
    return (<header className={s.header}>
        <img src='https://www.freelogodesign.org/Content/img/logo-ex-7.png'/>
        <div className={s.loginBlock}>
            {props.isAuth
                ? <React.Fragment>
                    <p className={s.loginName}>{props.login}</p>
                    <button onClick={props.outMyLogin}>Выйти</button>
                </React.Fragment>
                : <NavLink to={"/login"}>Login</NavLink>}
        </div>
    </header>);
}

export default Header;
