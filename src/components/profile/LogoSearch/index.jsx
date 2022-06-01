import React from "react";
import './LogoSearch.css'
import Logo from '../../../img/logo.png'
import {UilSearch} from '@iconscout/react-unicons'

const LogoSearch = ()=>{
    return (
        <div className="logo-search">
            <img src={Logo} alt="logo" />
            <div className="search">
                <input type="text" placeholder="#Explore" id="" />
                <div className="search-icon">
                    <UilSearch />
                </div>
            </div>
        </div>
    )
}

export default LogoSearch