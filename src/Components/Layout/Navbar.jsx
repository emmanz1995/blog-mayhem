import React from 'react';
import '../Styles/navbar.scss'

const Navbar = () => {
    const navbar = {
        "navlinks": [
            {
                "id": 1,
                "name": "Home",
                "link": "/"
            },
            {
                "id": 2,
                "name": "Signin",
                "link": "/signin"
            },
            {
                "id": 3,
                "name": "Dashboard",
                "link": "/dashboard"
            },
        ]
    }
    return(
        // <div className="main-nav">
            <nav className="navbar">
                <h1>BlogMayhem</h1>
                {navbar.navlinks.map(nav => (
                    <ul key={nav.id}>
                        <li>
                            <a href={nav.link}>{nav.name}</a>
                        </li>
                    </ul>
                ))}
            </nav>
        // </div>
    )
}

export default Navbar;
