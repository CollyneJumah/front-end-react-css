import React from "react";
import './auth.css'
import Logo from '../../img/logo.png'

const Authentication=()=>{
    return (
        <div className="auth">
           <div className="left-side-auth">
               <img src={Logo} alt="logo" />
               <div className="page-name">
                   <h1>Social</h1>
                   <h6>Happy Social of interaction.</h6>
               </div>
           </div>
           <div className="right-side-form">
               <h2>Form</h2>
           </div>
        </div>
    )
}

export default Authentication