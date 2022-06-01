import React from "react";
import PostSection from "../../components/PostSection/Post";
import Profile from "../../components/profile/Profile";
import './Home.css'

const Home = ()=>{
    return (
        <div className="home-page">
           <Profile />
            <PostSection/>
            <div className="right-side">Right side</div>
        </div>
    )
}

export default Home