import React from "react"
import InfoCard from "../Infocard"
import FollowersCard from "../profile/FollowersCard"
import LogoSearch from "../profile/LogoSearch"
import './profile-left.css'

const ProfileLeft = ()=>{
    return (
        // used style from profile side
        <div className="profile-side">
            <LogoSearch />
            <InfoCard />
            <FollowersCard />
        </div>
    )
}

export default ProfileLeft