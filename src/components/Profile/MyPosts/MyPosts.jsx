import React from 'react';
import Post from './Post/Post';
import s from "./MyPosts.module.css";


const MyPosts = (props) => {
    const postsElements = props.dataPosts.posts
        .map(p => <Post key={p.id} message={p.message} likesCount={p.likesCount}/>);


    const newPostElement = React.createRef();

    const addNewPost = () => {
        let text = newPostElement.current.value;
        props.addPost(text);
        newPostElement.current.value = "";
    };

    // const addPost = () => {
    //     const N = document.getElementById("needText");
    //   alert(N.value);
    // };

    return (
        <div className={s.postsBlock}>
           <h3>My posts</h3>
            <div>
                <div>
                    {/*<textarea id = {"needText"}></textarea>*/}
                    <textarea ref={newPostElement}></textarea>
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
