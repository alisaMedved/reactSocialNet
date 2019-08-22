import React from "react";
import s from "./Users.module.css";

const Users = (props) => {
if (props.dataUsers.length === 0) {
    props.setUsers([
        {avatarkaSRC: "https://24enota.ru/uploads/content/1055.jpg",
            key: 1, id: 1,
            followed: false,
            name: "Dmitry K.", status: "I am looking for a Job right now...", place: {country: "Belarus", city: "Minsk"}},
        {avatarkaSRC: "https://cdn.freelance.ru/img/portfolio/pics/00/37/9B/3644384.jpg?mt=57607de1",
            key: 2, id: 2,
            followed: true,
            name: "Svetlana D.", status: "I am so pretty", place: {country: "Belarus", city: "Minsk"}},
        {avatarkaSRC: "https://it-tehnik.ru/wp-content/uploads/matureman.png",
            key: 3, id: 3,
            followed: false,
            name: "Sergei S.", status: "I like football!!!", place: {country: "Ukrane", city: "Kiev"}},
        {avatarkaSRC: "https://st2.depositphotos.com/4323461/7314/v/950/depositphotos_73146465-stock-illustration-anxious-emotional-face-men-fear.jpg",
            key: 4, id: 4,
            followed: true,
            name: "Andrew T.", status: "I am free to help you  to create good Video Production", place: {country: "United States", city: "Philadelphia"}}
    ]);
}

    return (<div className={s.usersBlock}>
        <h3>Users</h3>
        { props.dataUsers
            .map(u =>
                <div className={s.item} key={u.key}>
                    <div className={s.avaButWrapp}>
                        <img className={s.ava} src={u.avatarkaSRC}/>
                        {u.followed ?
                            <button onClick={() => props.unfollow(u.id)} className={s.but}>Unfollow</button>
                            : <button onClick={() => props.follow(u.id)}  className={s.but}>Follow</button>}
                    </div>

                    <div className={s.info}>
                        <div className={s.info_item}>
                            <p>{u.name}</p>
                            <p>{u.place.country} {u.id}</p>
                        </div>
                        <div className={s.info_item}>
                            <p>{u.status}</p>
                            <p>{u.place.city}</p>
                        </div>
                    </div>
                </div>)
        }
        <button className={s.butMore}>Show more</button>
    </div>);
};

export default Users;
