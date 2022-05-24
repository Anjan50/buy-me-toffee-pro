import React from 'react'
import './Card.css'
import { image } from '../constants'

const Card = () => {
  return (
    <>
      <img className="profileBanner" src={image.banner}></img>
      <div className="pfpContainer">
        <img className="profilePFP" src={image.profile}/>
        <div className="profileName">Anjan Diyora</div>
        <div className="profileWallet">0x53xe235..</div>


      <div class="wrapper">
         <div class="button">
           <a href="https://www.facebook.com/anjan5005" target="_blank" >
            <div class="icon">
               <i class="fab fa-facebook-f"></i>
            </div>
            <span>Facebook</span>
            </a>
         </div>
         <div class="button">
         <a href="https://github.com/Anjan50" target="_blank" >
            <div class="icon">
               <i class="fab fa-twitter"></i>
            </div>
            <span>Twitter</span>
            </a>
         </div>
         <div class="button">
         <a href="https://www.instagram.com/diyora_anjan/" target="_blank" >
            <div class="icon">
               <i class="fab fa-instagram"></i>
            </div>
            <span>Instagram</span>
            </a>
         </div>
         <div class="button">
         <a href="https://github.com/Anjan50" target="_blank" >
            <div class="icon">
               <i class="fab fa-github"></i>
            </div>
            <span>Github</span>
            </a>
         </div>
         <div class="button">
         <a href="https://www.facebook.com/anjan5005" target="_blank" >
            <div class="icon">
               <i class="fab fa-youtube"></i>
            </div>
            <span>YouTube</span>
            </a>
         </div>
      </div>

        
        {/* <div className="profileBio">
          Donate
        </div> */}



        <div className="profileTabs">
          <div className="profileTab">
            Buy Me a Toffee
          </div>
        </div>
      </div>
    </>
  )
}

export default Card