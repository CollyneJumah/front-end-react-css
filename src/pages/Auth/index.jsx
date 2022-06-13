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
          <SignUp />
        </div>
    )
}

function SignUp()
{
    return (

        <div className="right-side-form">

            <form className="info-form auth-form">
                <h2>Sign Up</h2>
                <div>
                    <input type="text" name="firstname" className="info-input" placeholder="First Name"/>
                    <input type="text" name="lastname" className="info-input" placeholder="Last Name"/>
                </div>
                <div>
                    <input type="text" name="username" className="info-input" placeholder="Username"/>
                </div>
                <div>
                    <input type="password" name="password" className="info-input" placeholder="password"/>
                    <input type="password" name="password" className="info-input" placeholder="confirm password"/>
                </div>
                <div>
                    <span style={{fontSize:"12px"}}>Already have an account ? Login</span>
                    <button type="submit" className="button info-btn">Sign Up</button>
                </div>
            </form>
        </div>
    )
}
export default Authentication