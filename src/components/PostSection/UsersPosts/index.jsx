import React from "react";
import './user-posts.css'
import { PostsData } from "../../../data/PostData";
import Post from "../Post";

const UserPosts=()=>{
    return (
        <div className="posts">
           {
               PostsData.map((post,id)=>{
                   return <Post data={post} id={id} />
               })
            }
        </div>
    )
}

export default UserPosts