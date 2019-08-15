import React from 'react';
import Post from './Post/Post';
import s from "./MyPosts.module.css";


const MyPosts = (props) => {
    const postsElements = props.dataPosts
        .map(p => <Post key={p.id} message={p.message} likesCount={p.likesCount}/>);


    const newPostElement = React.createRef();

    const addNewPost = () => {
        props.addPost();
    };

    const onPostChange = () => {
        let text = newPostElement.current.value;
        props.addPostText(text);
    };

    return (
        <div className={s.postsBlock}>
           <h3>My posts</h3>
            <div>
                <div>
                    <textarea ref = {newPostElement} value={props.newPostText} onChange={onPostChange}/>
                </div>
                <div>
                    <button onClick = {addNewPost}>Add posts</button>
                </div>
            </div>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    );
};

export default MyPosts;
