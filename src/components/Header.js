import { Link } from 'react-router-dom';
import logo from '../imgs/logo.png';
import BitcoinLogo from './BitcoinLogo';
import React, { useState } from 'react'

const Header = () => {
     const [isOpen, setOpen] = useState("false");

    const toggleMobNav = () => {
      setOpen(!isOpen);

    };

        
    return ( 
        <header>
            <div className="logo">
                <figure>
                    <img src={logo} alt="Cypto Junkies logo" />
                    <BitcoinLogo />
                    <figcaption>Crypto Junkies</figcaption> 
                </figure>
            </div>
          <nav className={`${isOpen ? "" : "open"}`} onClick={toggleMobNav}> 
              <Link to="/">Crypto Index</Link> 
              <Link to="/news">News</Link> 
              <Link to="/defi">DeFi</Link> 
              <Link to="/nft">NFT</Link> 
              <Link to="/metrics">Metrics</Link> 
              <Link to="/learn">Learn</Link> 
              <Link to="/buycrypto">Buy Crypto</Link> 
          </nav>
          <span  className={`toggle-nav ${isOpen ? "" : "open"}`} onClick={toggleMobNav} >
             <span>Toggle navigation</span>
          </span>
        </header>
     );
}
 
export default Header;