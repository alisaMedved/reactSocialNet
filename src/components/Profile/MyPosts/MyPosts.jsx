import React from 'react';
import Post from './Post/Post';
import s from "./MyPosts.module.css";


const MyPosts = ({dataPosts}) => {
    const postsElements = dataPosts.posts
        .map(p => <Post key={p.id} message={p.message} likesCount={p.likesCount}/>);


    const newPostElement = React.createRef();

    const addPost = () => {
        let text = newPostElement.current.value;
        alert(text);
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
                    <button onClick = {addPost}>Add posts</button>
                </div>
            </div>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    );
};

export default MyPosts;
