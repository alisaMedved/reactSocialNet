import React, {Component} from 'react';
import s from "./Users.module.css";
import userPhotoSmall from "../../assets/images/user.png";
import * as axios from "axios";

class Users extends Component {
    constructor(props) {
        super(props);
        axios.get("https://social-network.samuraijs.com/api/1.0/users")
            .then(response => {
                debugger;
                this.props.setUsers(response.data.items);
            });
    }
    render() {
        return (<div className={s.usersBlock}>
            <h3>Users</h3>
            { this.props.dataUsers
                .map(u =>
                    <div className={s.item} key={u.id}>
                        <div className={s.avaButWrapp}>
                            <img className={s.ava}
                                 src={u.photos.small !== null ? u.photos.small : userPhotoSmall}/>
                            {u.followed ?
                                <button onClick={() => this.props.unfollow(u.id)} className={s.but}>Unfollow</button>
                                : <button onClick={() => this.props.follow(u.id)}  className={s.but}>Follow</button>}
                        </div>

                        <div className={s.info}>
                            <div className={s.info_item}>
                                <p>{u.name}</p>
                                <p>{"u.place.country"}</p>
                            </div>
                            <div className={s.info_item}>
                                <p>{u.status}</p>
                                <p>{"u.place.city"}</p>
                            </div>
                        </div>
                    </div>)
            }
            <button className={s.butMore}>Show more</button>
        </div>);

    }
}

export default Users;
