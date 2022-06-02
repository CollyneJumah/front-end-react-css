import React from "react";
import './rightside.css'
import TopNavSection from "./Topnav";
import Trending from "./Trendings";

const RightSidebar=()=>{
    return (
        <div className="right-sidebar">
            <TopNavSection/>
            <Trending/>

            <button className="button share-button">Share</button>
        </div>
    )
}

export default RightSidebar