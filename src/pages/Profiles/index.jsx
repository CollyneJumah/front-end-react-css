
import React from 'react' 
import PostSection from '../../components/PostSection/PostSection'
import ProfileCard from '../../components/profile/ProfileCard'
import ProfileLeft from '../../components/ProfileLeft'
import RightSidebar from '../../components/RightSidebar'
import './profiles.css'
const ProfilePage=()=>{
    return (
        <div className='profiles'>
            <ProfileLeft/>
            <div className="profile-center">
                <ProfileCard />
                <PostSection />
            </div>
          <RightSidebar />
        </div>
    )
}

export default ProfilePage
