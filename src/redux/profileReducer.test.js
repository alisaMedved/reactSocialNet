import React from "react";
import profileReducer, {addNewPost, deletePost} from "./profileReducer";

const state = {
    userProfile: null,
    posts: [
        {id: 1, postBody: "Hi, how are you?", likesCount: '11'},
        {id: 2, postBody: "It's my first post", likesCount: '15'},
    ],
};

it('length posts should be incremented', () => {
    // 1. test data
   const action = addNewPost("Hello, world!");
   // 2. action
    const newState = profileReducer(state, action);
    // 3. expectation
    expect(newState.posts.length).toEqual(3);
});
it('message text should be correct', () => {
    // 1. test data
    const action = addNewPost("Hello, world!");
    // 2. action
    const newState = profileReducer(state, action);
    // 3. expectation
    expect(newState.posts[2].postBody).toBe("Hello, world!");
});
it('after deleting posts length should be decremented', () => {
    // 1. test data
    const action = deletePost(3);
    // 2. action
    const newState = profileReducer(state, action);
    // 3. expectation
    expect(newState.posts.length).toBe(2);
});


