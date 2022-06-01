import React from "react";
import './PostSection.css'
import PostShare from "./PostShare";
import UserPosts from "./UsersPosts";

const PostSection=()=>{
    return (
        <div className="post-section">
            <PostShare/>
            <UserPosts/>
        </div>
    )
}

export default PostSection