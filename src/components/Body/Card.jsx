import React from 'react'
import './Card.css'


const Card = () => {
  return (
    <>
    <div className="pageIdentify">Profile</div>
      <img className="profileBanner" src='./Banner.png'></img>
      <div className="pfpContainer">
        <img className="profilePFP" src="./profile.png"/>
        <div className="profileName">Anjan Diyora</div>
        <div className="profileWallet">0x53xe235..</div>
        
          <div className="profileEdit">Edit profile</div>
        
        <div className="profileBio">
          Donate
        </div>
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