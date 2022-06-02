import React from "react";
import './topnav.css'
import Home from '../../../img/home.png'
import Noti from '../../../img/noti.png'
import Comment from '../../../img/comment.png'
import {UilSetting } from '@iconscout/react-unicons'

const TopNavSection=()=>{
    return (
        <div className="topnav-icons">
            <img src={Home} alt="" />
            <UilSetting/>
            <img src={Noti} alt="" />
            <img src={Comment} alt="" />
        </div>
    )
}

export default TopNavSection