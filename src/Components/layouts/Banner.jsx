import React from 'react';
import '../scss/banner.scss';

const Banner = ({heading}) => {
    return(
        <section className="banner">
            <div className="banner-wrapper">
                <div className="main-heading">
                    <h1>{heading}</h1>
                    <a href="/add"><i className="fas fa-plus-square fa-2x" /></a>
                </div>
                <div className="mini-nav">
                    <ul>
                        <a href=""><li>Gallery</li></a>
                        <a href=""><li>Posts</li></a>
                        <a href="/account"><li>User Account</li></a>
                    </ul>
                </div>
            </div>
        </section>
    )
}

export default Banner;
