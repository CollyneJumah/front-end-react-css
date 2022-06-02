import React from "react";
import PostSection from "../../components/PostSection/PostSection";
import Profile from "../../components/profile/Profile";
import RightSidebar from "../../components/RightSidebar";
import './Home.css'

const Home = ()=>{
    return (
        <div className="home-page">
           <Profile />
           <PostSection/>
           <RightSidebar/>
        </div>
    )
}

export default Home