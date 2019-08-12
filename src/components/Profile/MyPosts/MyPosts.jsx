import React from 'react';
import Post from './Post/Post';
import s from "./MyPosts.module.css";


const MyPosts = ({dataPosts}) => {
    const postsElements = dataPosts.posts
        .map(p => <Post key={p.id} message={p.message} likesCount={p.likesCount}/>);

    return (
        <div className={s.postsBlock}>
           <h3>My posts</h3>
            <div>
                <div>
                    <textarea></textarea>
                </div>
                <div>
                    <button>Add posts</button>
                </div>
            </div>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    );
};

export default MyPosts;
