import React from "react";
import './trending.css'
import { TrendData } from "../../../data/TrendData";

const Trending=()=>{
    return (
        <div className="trendings">
            <h3>Trends for you</h3>

            {
                TrendData.map( (trend)=>{
                    return (
                        <div className="trend">
                            <span>#{trend.name}</span>
                            <span>{trend.share} shares</span>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Trending