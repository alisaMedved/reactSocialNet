import React from 'react';
import Post from './Post/Post';
import s from "./MyPosts.module.css";
import {Field, reduxForm} from "redux-form";
import {requiredField, maxLengthCreator} from "../../../utils/validators/validators";
import {Textarea} from "../../common/FormControls/FormControls";

const MyPosts = (props) => {

    const postsElements = props.dataPosts
        .map(p => <Post key={p.id} postBody={p.postBody} likesCount={p.likesCount}/>);

    const onClickAddPost = (formData) => {
        props.addNewPost(formData.newPost);
    };
    return (
        <div className={s.postsBlock}>
           <h3>My posts</h3>
         <NewPostReduxForm onSubmit={onClickAddPost}/>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    );
};

const maxLength10 = maxLengthCreator(10);

const NewPostForm = (props) => {
    return(
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={Textarea} name={"newPost"} validate={[requiredField, maxLength10]} />
            </div>
            <div>
                <button>Add posts</button>
            </div>
        </form>
    );
};

const NewPostReduxForm = reduxForm({form: "addPost"})(NewPostForm);

export default MyPosts;
