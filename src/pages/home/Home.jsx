import React from "react";
import Profile from "../../components/profile/Profile";
import './Home.css'

const Home = ()=>{
    return (
        <div className="home-page">
           <Profile />
            <div className="post-side">All Posts</div>
            <div className="right-side">Right side</div>
        </div>
    )
}

export default Home