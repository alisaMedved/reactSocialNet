import React, {Component} from 'react';
import s from "./Users.module.css";
import userPhotoSmall from "../../assets/images/user.png";
import * as axios from "axios";

class Users extends Component {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.pageSize}&page=${this.props.currentPage}`)
            .then(response => {
                this.props.setUsers(response.data.items);
            });
    }

    onPageChanged(pageNumber) {
        this.props.setCurrentPage(pageNumber);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.pageSize}&page=${pageNumber}`)
            .then(response => {
                this.props.setUsers(response.data.items);
                this.props.setTotalUsersCount(response.data.totalCount);
            });
    }

    render() {

        const pagesCount = Math.ceil(this.props.totalUsersCount/this.props.pageSize);
        const pages = [];
        for (let i=1; i<=pagesCount; i++) {
            pages.push(i);
        }

        return (<div className={s.usersBlock}>
            <div className={s.multiSelectorPage}>
                {pages.map(p => {
                    return <div className={this.props.currentPage === p && s.selectedPage}
                    onClick={()=> {this.onPageChanged(p)}}>{p}</div>
                })}
            </div>
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
