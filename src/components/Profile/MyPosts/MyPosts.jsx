import React from 'react';
import Post from './Post/Post';
import s from "./MyPosts.module.css";

const MyPosts = (props) => {

    const postsElements = props.dataPosts
        .map(p => <Post key={p.id} message={p.message} likesCount={p.likesCount}/>);

    const newPostElement = React.createRef();

    const ClickAddPost = () => {
        props.addNewPost();
    };

    const ChangeTextPost = () => {
        let text = newPostElement.current.value;
        props.onPostChange(text);
    };

    return (
        <div className={s.postsBlock}>
           <h3>My posts</h3>
            <div>
                <div>
                    <textarea ref = {newPostElement} value={props.newPostText} onChange={ChangeTextPost}/>
                </div>
                <div>
                    <button onClick = {ClickAddPost}>Add posts</button>
                </div>
            </div>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    );
};


export default MyPosts;
