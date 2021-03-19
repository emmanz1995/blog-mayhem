import React, { useState } from 'react';
// import AuthService from '../../Service/AuthService';
import { useHistory } from 'react-router-dom';
import AuthService from '../../Service/AuthService';
import Sidebar from "../Layout/Sidebar";
import '../Styles/dashboard.scss';
import PostService from "../../Service/PostService";

const Dashboard = () => {
    const history = useHistory()
    const [currentUser, setCurrentUser] = useState(AuthService.getUserInfo);
    const [posts, setPosts] = useState([])
    const handleSignout = (evt) => {
        evt.preventDefault();
        // AuthService.Signout();
        localStorage.clear();
        history.push('/')
    }
    React.useEffect(() => {
        function postData() {
            PostService.getPosts()
                .then((response) => {
                    setPosts(response.data)
                    console.log('Posts: ', response.data)
                })
        }
        return postData()
    }, [])


    return(
        <div className="dashboard-wrapper">
            <div className="nav">
                <ul style={{display: 'flex'}}>
                    <li><a href="">Add New Post</a></li>
                    <li><a href="">Comments</a></li>
                </ul>
                <ul>
                    <li>
                        <a href="" onClick={handleSignout}>Hi,{' '}{currentUser.user_nicename}</a>
                    </li>
                </ul>
            </div>
            {/*<div className="dashboard-content">*/}
                <aside className="side-bar">
                    <Sidebar />
                </aside>
                {/*<h3>{currentUser.user_nicename}</h3>*/}
                {/*<button onClick={handleSignout}>Signout</button>*/}
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
            {/*</div>*/}
        </div>
    )
}

export default Dashboard;
