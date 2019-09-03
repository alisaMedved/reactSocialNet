import s from "./Users.module.css";
import userPhotoSmall from "../../assets/images/user.png";
import React from "react";
import {NavLink} from 'react-router-dom';
import * as axios from "axios";


const Users = (props) => {

    const pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    const pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    return (
        <div className={s.usersBlock}>
            <div className={s.multiSelectorPage}>
                {pages.map(p => {
                    return <div className={props.currentPage === p && s.selectedPage}
                                onClick={() => {
                                    props.onPageChanged(p);
                                }}>{p}</div>
                })}
            </div>
            <h3>Users</h3>
            {props.dataUsers
                .map(u =>
                    <div className={s.item} key={u.id}>
                        <div className={s.avaButWrapp}>
                            <NavLink to={`/profile/${u.id}`}>
                                <img className={s.ava}
                                     src={u.photos.small !== null ? u.photos.small : userPhotoSmall}/>
                            </NavLink>
                            {u.followed ?
                                <button onClick={() => {
                                    axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`,
                                        {withCredentials: true,
                                            headers: {'API-KEY': 'e848f1f0-3dd0-4185-a108-da41dd7db53f'}
                                        })
                                        .then(response => {
                                            if (response.data.resultCode === 0) {
                                                props.unfollow(u.id);
                                            }
                                        });
                                }} className={s.but}>Unfollow</button>
                                : <button onClick={() => {
                                    axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {},
                                        {withCredentials: true,
                                        headers: {'API-KEY': 'e848f1f0-3dd0-4185-a108-da41dd7db53f'}
                                        })
                                        .then(response => {
                                            if (response.data.resultCode === 0) {
                                                props.follow(u.id)
                                            }
                                        });
                                }} className={s.but}>Follow</button>}
                        </div>

                        <div className={s.info}>
                            <div className={s.info_item}>
                                <p>{u.name}</p>
                                <p>{"u.place.country" + "   " + u.id}</p>
                            </div>
                            <div className={s.info_item}>
                                <p>{u.status}</p>
                                <p>{"u.place.city"}</p>
                            </div>
                        </div>
                    </div>)
            }
            <button className={s.butMore}>Show more</button>
        </div>
    );
};

export default Users;
