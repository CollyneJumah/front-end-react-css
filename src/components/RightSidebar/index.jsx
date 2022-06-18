import React, { useState } from "react";
import ShareModalForm from "../Modals/ShareModel";
import './rightside.css'
import TopNavSection from "./Topnav";
import Trending from "./Trendings";

const RightSidebar=()=>{
    const [modalOpened,setModalOpened]= useState(false)
    return (
        <div className="right-sidebar">
            <TopNavSection/>
            <Trending/>
            <button className="button share-button" onClick={()=>setModalOpened(true)}>Share</button>
            <ShareModalForm modalOpened={modalOpened} setModalOpened={setModalOpened} />
        </div>
        
    )
}

export default RightSidebar