import React from "react";
import './postshare.css'
import ProfileImage from '../../../img/profileImg.jpg'
import {UilScenery,UilPlayCircle,UilLocationPoint,UilSchedule} from '@iconscout/react-unicons'

const PostShare =()=>{
    return (
        <div className="post-share">
            <img src={ProfileImage} alt="profile image" />
            <div>
                <input type="text" placeholder="What&apos;s happening" />
                <div className="post-options">
                    <div className="option" style={{color:"var(--photo)"}}> 
                        <UilScenery/>
                        Photo
                    </div>
                    <div className="option"  style={{color:"var(--video)"}}> 
                        <UilPlayCircle/>
                        Video
                    </div>
                    <div className="option"  style={{color:"var(--location)"}}> 
                        <UilLocationPoint/>
                        Location
                    </div>
                    <div className="option"  style={{color:"var(--schedule)"}}> 
                        <UilSchedule/>
                        Schedule
                    </div>
                    <button className="button share-button">Share</button>
                </div>
            </div>
        </div>
       
    )
}

export default PostShare