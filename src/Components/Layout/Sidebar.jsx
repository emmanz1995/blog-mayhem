import React from 'react';
import '../Styles/sidebar.scss';

const Sidebar = () => {
    const sidebarItems = {
        "sidebarLinks": [
            {
                "id": 1,
                "name": "Posts",
                "url": "/posts"
            },
            {
                "id": 2,
                "name": "Media",
                "url": "/media"
            },
            {
                "id": 3,
                "name": "User Management",
                "url": "/management"
            },
        ]
    }
    return(
        <div className="sidebar-wrapper">
            <h1>BlogMayhem</h1>
            {sidebarItems.sidebarLinks.map(link => (
                <ul key={link.id}>
                    <li>
                        <a href={link.url}>{link.name}</a>
                    </li>
                </ul>
            ))}
        </div>
    )
}

export default Sidebar;
