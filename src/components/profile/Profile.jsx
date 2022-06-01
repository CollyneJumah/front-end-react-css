import React from "react";
import FollowersCard from "./FollowersCard";
import LogoSearch from "./LogoSearch";
import ProfileCard from "./ProfileCard";
import './profile.css'

const Profile = ()=>{
    return (
        <div className="profile-side">
            <LogoSearch/>
            <ProfileCard/>
            <FollowersCard/>
        </div>
    )
}

export default Profile