import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import '../scss/dashboard.scss';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getPosts } from '../../Redux/Actions/postsAction';
import { getUser } from '../../Redux/Actions/userAction';
import DashboardNav from "../layouts/DashboardNav";
import Banner from "../layouts/Banner";
import axios from "axios";
import { useAlert } from "react-alert";
import {AuthService} from "../../Service/AuthService";
import jwtDecode from "jwt-decode";

const API_URL = process.env.REACT_APP_MAIN_URL
const token = localStorage.getItem('token')

const ActivityFeed = () => {
    const history = useHistory()
    const dispatch = useDispatch();
    const postData = useSelector(state => state.postData);
    const userData = useSelector(state => state.userData);
    const [searchValue, setSearchValue] = useState({postData});
    const [userInfo, setUserInfo] = useState({});
    const { loading, error, posts } = postData;
    const { user } = userData;
    const alert = useAlert();
    useEffect(() => {
        dispatch(getPosts())
        dispatch(getUser())
    }, [dispatch])

    useEffect(() => {
        const getUser = () => {
            AuthService.currentUser.subscribe(value => {
                setUserInfo(value);
            })
        }
        return getUser();
    }, [userInfo]);

    const deletePost = (id) => {
        axios({
            method: "delete",
            url: `${API_URL}/wp-json/wp/v2/posts/${id}`,
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            }
        })
            .then((res) => {
                console.log('Post was deleted successfully');
                alert.success('Post was deleted successfully');
            })
            .catch(error => console.log(error))
    }
    console.log(AuthService.currentUser)
    if(loading) {
        return (
            <div className="is-loading">
                <div style={{ display: 'flex' }}>
                    <img src="asset/react-logo.png" alt="" height="60" width="60"/>{' '}<p>Loading...</p>
                </div>
            </div>
        );
    } else {
        return(
            <div className="dashboard-wrapper">
                <DashboardNav user={user} />
                <Banner heading={userInfo.user_nicename} />
                <div className="new-section">
                    <div className="search-container">
                        <input type="search" value={searchValue} onChange={(evt) => setSearchValue(evt.target.value)} placeholder="Search blog post" />{' '}
                        <input type="submit" />
                    </div>
                    <div className="card-flex">
                        {posts && posts.length > 0 ? posts.map(post => (
                            <Link to={`/post/${post.id}`} className="card-post">
                                <div className="card-post-header">
                                    <h2>{post.title?.rendered}</h2>
                                    <div>
                                        <Link to="#" onClick={()=>deletePost(post.id)}>Delete</Link>{' '}
                                    </div>
                                </div>
                                <hr />
                                <div className="card-post-body" key={post.id}>
                                    <p>{post.content?.rendered}</p>
                                    <p>{post.date}</p>
                                </div>
                            </Link>
                        )): <div style={{  }}>No Posts available</div>}
                    </div>
                </div>
            </div>
        );
    }
};

export default ActivityFeed;
