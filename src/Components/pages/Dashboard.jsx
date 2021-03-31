import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import Sidebar from '../layouts/Sidebar';
import '../scss/dashboard.scss';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getPosts } from '../../Redux/Actions/postsAction';
import { getUser } from '../../Redux/Actions/userAction';
import DashboardNav from "../layouts/DashboardNav";
import Banner from "../layouts/Banner";

const Dashboard = () => {
    const history = useHistory()
    const dispatch = useDispatch();
    const postData = useSelector(state => state.postData);
    const userData = useSelector(state => state.userData);
    const [searchValue, setSearchValue] = useState({postData});
    // const [currentUser] = useState(UserService.getUser);
    const { loading, error, posts } = postData;
    const { user } = userData;

    useEffect(() => {
        dispatch(getPosts())
        dispatch(getUser())
    }, [dispatch])
    // console.log(postData)

    if(loading) {
        return(
            <div className="is-loading">
                <div style={{ display: 'flex'}}>
                    <img src="asset/react-logo.png" alt="" height="60" width="60"/>{' '}<p>Loading...</p>
                </div>
            </div>
        )
    } else {
        return(
            <div className="dashboard-wrapper">
                <DashboardNav user={user} />
                <Banner heading="Dashboard" />
                <div className="new-section">
                    {/*<h1 className="title">Dashboard</h1>*/}
                    <hr />
                    <div className="search-container">
                        <input type="search" value={searchValue} onChange={(evt) => setSearchValue(evt.target.value)} placeholder="Search blog post" />{' '}
                        <input type="submit" />
                    </div>
                    <table className="post-table">
                        <tr>
                            <th>Author Id</th>
                            <th>Title</th>
                            <th>Date</th>
                            <th></th>
                        </tr>
                        {posts.map(post => (
                            <tr key={post.id}>
                                <td>{post.author}</td>
                                <td>{post.title?.rendered}</td>
                                <td>{post.date}</td>
                                <td>
                                    <Link to="#">Delete</Link>
                                </td>
                            </tr>
                        ))}
                    </table>
                </div>
            </div>
        )
    }
}

export default Dashboard;
