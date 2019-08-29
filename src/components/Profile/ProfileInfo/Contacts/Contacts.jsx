import React from "react";
import s from "./Contacts.module.css"

const Contacts = (props) => {
    return (
       <div className={s.allContacts}>
           <div>{props.contactKey}:</div><div>{props.contactValue}</div>
       </div>
    );
};

export default Contacts;

