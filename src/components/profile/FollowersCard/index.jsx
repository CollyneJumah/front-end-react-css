import React from "react";
import './followerscard.css'
import { Followers } from "../../../data/FollowersData";


const FollowersCard =()=>{
    return (
        <div className="followers-card">
            <h2>Who is following you</h2>
            {
                Followers.map( (follower)=>{
                    return (
                        <div className="follower">
                           <div>
                               <img src={follower.img} alt={follower.username} className="follower-image" />
                               <div className="name">
                                   <span>{follower.name}</span>
                                   <span>{follower.username}</span>
                               </div>
                           </div>
                           <button>Follow</button>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default FollowersCard