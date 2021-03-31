import React, { useEffect, useState } from 'react';
import Sidebar from '../layouts/Sidebar';
// import { addPost } from '../../Redux/Actions/postsAction';
import axios from 'axios';
import moment from 'moment';
import '../scss/addnewpost.scss';
import DashboardNav from "../layouts/DashboardNav";

const token = localStorage.getItem('token');

const AddNewPost = () => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [postAdded, setPostAdded] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    function onChange(evt) {

    }
    function submit(evt) {
        evt.preventDefault();
        const postData = {
            title: title,
            content: content,
            status: 'publish'
        }
        axios.post(`${process.env.REACT_APP_MAIN_URL}/wp-json/wp/v2/posts`, postData,{
            headers: {
                Authorization: 'Bearer ' + token,
                "content-type": "application/json"
            }
        })
        .then((response) => {
            if(response.data.status === 200) {
                setPostAdded( !! response.data.id );
                setIsLoading(false);
            }
        });
    }

    return(
        <div className="add-post">
            {/*<DashboardNav />*/}
            <aside className="sidebar">
                <Sidebar />
            </aside>
            <section className="main-section">
                <form>
                    <h3>Add new Post</h3>
                    <input type="text" name="title" value={title} onChange={(evt) => setTitle(evt.target.value)} placeholder="Your Title..." /><br /><br />
                    <textarea rows="5" cols="30" name="content" value={content} onChange={(evt) => setContent(evt.target.value)} placeholder="Type Your Content Here..." /><br /><br />
                    <input type="submit" name="btn-submit" value="Submit" onClick={submit} />
                    {isLoading &&
                        <p>Loading...</p>
                    }
                </form>
            </section>
        </div>
    );
}

export default AddNewPost;
