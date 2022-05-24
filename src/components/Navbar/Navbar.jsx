
import React, { useEffect } from "react";

import './Navbar.css'

import { useMoralis } from "react-moralis";


const LogoutButton = () => {
  const {logout, isAuthrnticating } = useMoralis();
  return(
    <button
    isLoading={isAuthrnticating}
    onClick={() => logout()}
    disabled={isAuthrnticating}
    >
      LogOut
    </button>
  );
};

const Navbar = () => {
  return (
    <div>
        <nav>
         <ul>
            <li class="logo">Buy me Toffee 🍫</li>
            <li class="btn"><span class="fas fa-bars"></span></li>
            
            <button
              type="button"
              className="connect-wallet">
              <p className="Wallet-text">
              <LogoutButton/>
              </p>
            </button>

         </ul>
      </nav>
    </div>
  )
}

export default Navbar