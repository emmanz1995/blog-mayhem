import React, { useEffect, useState } from 'react';
import Sidebar from '../Layout/Sidebar';
import { addPost } from '../../Redux/Actions/postsAction';

const AddNewPost = ({props}) => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [postAdded, setPostAdded] = useState('');

    // useEffect(()=> {
    //
    // }, [])
    const submit = (evt) => {
        evt.preventDefault();
        const postData = {
            title: title,
            content: content,
            status: 'publish'
        }
        props.addPost(postData)
    }
    return(
        <div className="add-post">
            <aside className="sidebar">
                <Sidebar />
            </aside>
            <section className="main-section">
                <form className="add-post-form">
                    <h3>Add new Post</h3>
                    <input type="text" name="title" placeholder="Your Title..." /><br /><br />
                    <textarea rows="5" cols="30" name="content" placeholder="Type Your Content Here..." /><br /><br />
                    <input type="submit" name="btn-submit" value="Submit" onClick={submit} />
                </form>
            </section>
        </div>
    )
}

export default AddNewPost;
