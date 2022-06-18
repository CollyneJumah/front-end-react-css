import React from "react"
import './info-card.css'
import {UilPen} from '@iconscout/react-unicons'
import { useSetState } from "@mantine/hooks"
import ProfileModalForm from "../Modals/ProfileModalForm"

const InfoCard =() =>{
   const [modalOpened, setModalOpened] = useSetState(false)
    return (
        <div className="info-card">
            <div className="info-head">
               <h4>Your Info</h4>
               <div>
                    <UilPen width='2rem' height='1.2rem' onClick={()=>setModalOpened(true)} />
                    <ProfileModalForm modalOpened={modalOpened} setModalOpened={setModalOpened} />
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