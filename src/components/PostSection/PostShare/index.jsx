import React,{useState,useRef} from "react";
import './postshare.css'
import ProfileImage from '../../../img/profileImg.jpg'
import {UilScenery,UilPlayCircle,UilLocationPoint,UilTimes,UilSchedule} from '@iconscout/react-unicons'

const PostShare =()=>{
    const [image,setImage]=useState(null)
    const imageRef = useRef()

    const onImageChange=(event)=>{
        //check if the event has any file & in the index 0
        if(event.target.files && event.target.files[0])
        {
            //declare a variable that will carry the image & update the state 
            let img = event.target.files[0]
            setImage({
                image: URL.createObjectURL(img)
            })
        }
    }
    return (
        <div className="post-share">
            <img src={ProfileImage} alt="profile image" />
            <div>
                <input type="text" placeholder="What&apos;s happening" />
                <div className="post-options">
                    <div className="option" style={{color:"var(--photo)"}} onClick={()=>imageRef.current.click() /*when photo icon is clicked, imageRef will be called & the control will triger the input file */}> 
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
                    <div style={{display:"none"}}>
                        <input type="file" name="myImage" ref={imageRef} onChange={onImageChange}/>
                    </div>
                </div>
                {
                    //what happens when image is selected
                    image && (
                        <div className="preview-image">
                            <UilTimes onClick={()=> setImage(null)}/>
                            <img src={image.image} alt="" />
                        </div>
                        )
                }
            </div>
        </div>
       
    )
}

export default PostShare