import './Contatti.css'
import React from 'react'
import { Fade } from 'react-awesome-reveal'
import { IoLocationSharp } from "react-icons/io5";
import { AiFillInstagram } from "react-icons/ai";
import { RiWhatsappFill } from "react-icons/ri";
import { MdEmail } from "react-icons/md";
const Contatti = () => {
    return (
    <>
    <Fade direction='up' triggerOnce={true}>
        <div className='info-di-contatto' id='contatti'>
        <div className='dove'>
           <h1 style={{color: '#246b74'}}>
            Dove ci troviamo?
        </h1>
         <div style={{display: 'flex', alignItems: 'center'}}>
         <IoLocationSharp className='location-outline'/>
         <p>VIA ROSSINI 39, MODUGNO(BA), 70026</p>
         </div>
        </div>

        <div className='dove'>
            <h1 style={{color : '#ff7514'}}>I nostri social</h1>
            <div style={{display: 'flex', alignItems: 'center'}}>
         <AiFillInstagram className='location-outline'/>
         <p>@a.s.d.muzzfit</p>
         </div>
         <div style={{display: 'flex', alignItems: 'center'}}>
         <RiWhatsappFill className='location-outline'/>
         <p>+39 3490547017</p>
         </div>
         <div style={{display: 'flex', alignItems: 'center'}}>
         <MdEmail className='location-outline'/>
         <p>@asd.muzzfit@gmail.com</p>
         </div>
        </div>
    
      </div>
    </Fade>
      
        
    
        
    </>   
    );
}

export default Contatti;