import React from 'react';
import Navbar from "../layouts/Navbar";
import '../scss/home.scss';
import { useHistory } from 'react-router-dom';

const Home = () => {
    const history = useHistory();
    function signin() {
        history.push('/signin');
    }
    return(
        <div className="main-wrapper">
            {/*#######################Navbar Section##############################*/}
            <Navbar />
            {/*#######################Top Wrapper##############################*/}
            <section className="top-wrapper">
                <header className="img-header">
                    <h1>Write your own Blog or support other bloggers by reading their blogs and leaving a comment.</h1>
                    <h3>Login to your account by clicking the button below: </h3>
                    <button onClick={signin}>Signin</button>
                </header>
                <div className="section-1">
                    <h1>Title</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    <a href="/dashboard">Dashboard</a>
                </div>
                <div className="section-2">
                    <h1>Title 2</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    <a href="">Blog</a>
                </div>
            </section>
            <br />
            {/*#######################Topics Wrapper##############################*/}
            <section className="topics-wrapper">
                <div className="christianity">
                    <i className="fas fa-cross fa-5x" />
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                </div>
                <div className="business">
                    <i className="fas fa-business-time fa-5x" />
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                </div>
                <div className="tech">
                    <i className="fab fa-js fa-5x" />
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                </div>
                <div className="fashion">
                    <i className="fas fa-tshirt fa-5x" />
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                </div>
            </section>
            {/*#######################Store Wrapper##############################*/}
            <section className="store-wrapper">
                <div className="store"></div>
            </section>
        </div>
    )
}

export default Home;
