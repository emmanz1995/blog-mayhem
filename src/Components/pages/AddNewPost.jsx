import React, { useEffect, useState } from 'react';
import Sidebar from '../layouts/Sidebar';
// import { addPost } from '../../Redux/Actions/postsAction';
import axios from 'axios';
import '../scss/addnewpost.scss';
import DashboardNav from "../layouts/DashboardNav";
import { useAlert } from 'react-alert';
import { useHistory } from 'react-router-dom';

const token = localStorage.getItem('token');

const AddNewPost = () => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [postAdded, setPostAdded] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const alert = useAlert();
    const history = useHistory();
    function onChange(evt) {

    }
    function submit(evt) {
        evt.preventDefault();
        const postData = {
            title: title,
            content: content,
            status: 'publish'
        }
        // if(alert.success('Posted successfully!')) {
            axios.post(`${process.env.REACT_APP_MAIN_URL}/wp-json/wp/v2/posts`, postData,{
                headers: {
                    Authorization: 'Bearer ' + token,
                    "content-type": "application/json"
                }
            })
                .then((response) => {
                    if(response.data.status === 201) {
                        setPostAdded( !! response.data.id );
                        setIsLoading(false);
                    } else if(response.data.status === 204) {
                        alert.error('Could not post post due to an error!');
                        console.log('Error occurred');
                    }
                })
                .then(success => {
                    alert.success('Posted successfully!');
                    history.push('/dashboard')
                })
        // }
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
