import React from "react";
import './Profilecard.css'
import CoverImage from '../../../img/cover.jpg'
import ProfileImage from '../../../img/profileImg.jpg'

const ProfileCard =()=>{

    const profilePage = true
    return (
        <div className="profile-card">
            <div className="profile-image">
                <img src={CoverImage} alt="cover image" />
                <img src={ProfileImage} alt="profile picture" />
            </div>
            <div className="profile-details">
                <span>Collins Jumah</span>
                <span>Software Engineer</span>
            </div>
            <div className="follow-section">
                <hr />
                <div>
                    <div className="follow-counts">
                        <span>6,208</span>
                        <span>Followers</span>
                    </div>
                    <div className="vertical-line"></div>
                    <div className="follow-counts">
                        <span>1</span>
                        <span>Followings</span>
                    </div>

                    {profilePage && 
                        <>
                            <div className="v1">
                                <div className="follow-counts">
                                    <span>3</span>
                                    <span>Posts</span>
                                </div>
                            </div>
                        </>
                    }
                </div>
                <hr />
            </div>
           {profilePage ? '':  <span>My Profile</span>}
        </div>
    )
}

export default ProfileCard