import s from "./DialogItem.module.css";
import React from "react";
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
    const {name} = props;
    const {id} = props;
    let path = "/dialogs/" + id;
    return (
        <div className={s.dialog}>
            <NavLink className={s.dialog__link} to={path}>{name}</NavLink>
        </div>
    );
};
export default DialogItem;

