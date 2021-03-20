import React, { useState, useEffect } from 'react';
// import AuthService from '../../Service/AuthService';
import { useHistory } from 'react-router-dom';
import AuthService from '../../Service/AuthService';
import Sidebar from '../Layout/Sidebar';
import '../Styles/dashboard.scss';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getPosts } from '../../Redux/Actions/postsAction';

const Dashboard = () => {
    const history = useHistory()
    const dispatch = useDispatch();
    const postData = useSelector(state => state.postData)
    const [currentUser, setCurrentUser] = useState(AuthService.getUserInfo);
    const { loading, error, posts } = postData;
    const handleSignout = (evt) => {
        evt.preventDefault();
        // AuthService.Signout();
        localStorage.clear();
        history.push('/')
    }
    useEffect(() => {
        dispatch(getPosts())
    }, [dispatch])

    if(loading) {
        return(
            <p>Loading...</p>
        )
    } else {
        return(
            <div className="dashboard-wrapper">
                <div className="nav">
                    <ul style={{display: 'flex'}}>
                        <h1>BlogMayhem</h1>
                    </ul>
                    <ul>
                        <li style={{display: 'flex', alignItems: 'center'}}>
                            <Link className="profile-link">{currentUser.user_nicename}</Link>
                            <a className="signout-link" href="" onClick={handleSignout}><i className="fas fa-sign-out-alt" /></a>
                        </li>
                    </ul>
                </div>
                <aside className="side-bar">
                    <Sidebar />
                </aside>
                {/*<h3>{currentUser.user_nicename}</h3>*/}
                <div className="new-section">
                    <h1 className="title">Dashboard</h1>
                    <table className="post-table">
                        <tr>
                            <th>Author Id</th>
                            <th>Title</th>
                            <th>Date</th>
                        </tr>
                        {posts.map(post => (
                            <tr key={post.id}>
                                <td>{post.author}</td>
                                <td>{post.title?.rendered}</td>
                                <td>{post.date}</td>
                            </tr>
                        ))}
                    </table>
                </div>
            </div>
        )
    }

}

export default Dashboard;
