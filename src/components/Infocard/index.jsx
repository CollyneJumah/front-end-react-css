import React from "react"
import './info-card.css'
import {UilPen} from '@iconscout/react-unicons'

const InfoCard =() =>{
    return (
        <div className="info-card">
            <div className="info-head">
               <h4>Your Info</h4>
               <div>
                    <UilPen width='2rem' height='1.2rem'/>
               </div>
            </div>
            <div className="info">
               <b>Status: </b>
               <span>Single</span>
            </div>
            <div className="info">
               <b>Lives In: </b>
               <span>Nairobi</span>
            </div>
            <div className="info">
               <b>Works at: </b>
               <span>Westlands</span>
            </div>
           <button className="button logout-btn">Logout</button>
        </div>
    )
}

export default InfoCard