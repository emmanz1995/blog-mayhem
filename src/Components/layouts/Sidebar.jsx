import React from 'react';
import '../scss/sidebar.scss';

const Sidebar = () => {
    return(
        <div className="sidebar-wrapper">
            <ul>
                <li>
                    <a href="/posts">Posts</a><br /><br />
                    <a href="/add">Add New Posts</a><br /><br />
                    <a href="/media">Media</a><br /><br />
                    {/*<a href="/management">User Management</a>*/}
                </li>
            </ul>
        </div>
    )
}

export default Sidebar;
