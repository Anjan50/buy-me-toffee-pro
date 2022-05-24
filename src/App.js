import logo from './logo.svg';
import React, { useEffect } from "react";
import './App.css';
import Card from './components/Card'
import Details from './components/Box/Details'
import Navbar from './components/Navbar/Navbar';
import { useMoralis } from "react-moralis";
import { image } from './constants'


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

function App() {
  const {
    authenticate,
    isWeb3Enabled,
    isAuthenticated,
    user,
    enableWeb3,
    Moralis,
  } = useMoralis();

  async function authWalletConnect(){
    const user = authenticate({
      provider: "walletconnect",
      chainId: 80001,
      mobileLinks: [
        "metamask",
        "trust",
        "rainbow",
        "argent",
        "imtoken",
        "pillar",
      ],
      signingMessage: "Welcome!",
    });
    console.log(user);
  }

  useEffect(() => {
    if (!isWeb3Enabled && isAuthenticated) {
      enableWeb3({ provider: "walletconnect", chainId: 80001 });
      console.log("web3 activated");
    }
  }, [isWeb3Enabled, isAuthenticated, enableWeb3]);

  document.addEventListener("visibilitychange", () => {
    if (document.visibilityState === "hidden") {
      window.localStorage.removeItem("WALLETCONNECT_DEEPLINK_CHOICE");
    }
  });

  if (!isAuthenticated && !user) {
    console.log(user);
    return (
      <div>
        <center>
          <img width={250} height={250} src={image.ethToffee} alt="logo" />
        </center>
        <br />
        <center>
          <h2 as="h2" size="3xl" p={10}>
            Wallet authentication
          </h2>
        </center>
        <center>
          <button 
            type="button"
            className="connect-wallet"
            onClick={() => authenticate({ signingMessage: "Hello youtube" })}>
            Sign in using Metamask
          </button>
        </center>
        <br />
        <center>
          <button
           width = {500}
            type="button"
            className="connect-wallet"
            onClick={() => authWalletConnect()}>
            Sign in using Wallet Connect
          </button>
        </center>
        <br />
      </div>
    );
  
  }

  return (
    <div className="App">
      
      <Navbar />
      <Card />
      <Details />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
