import React from 'react';
import Post from './Post/Post';

const MyPosts = () => {
    return (
        <div>
            My posts
            <div>
                <textarea></textarea>
                <button>Add posts</button>
            </div>
            <div className='posts'>
                <Post message = "Hi, how are you?" likesCount = "0"/>
                <Post message = "It's my first post" likesCount = "23"/>
            </div>
        </div>
    );
};

export default MyPosts;
