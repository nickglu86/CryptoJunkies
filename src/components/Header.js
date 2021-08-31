import { Link } from 'react-router-dom';
import logo from '../imgs/logo.png';

const Header = () => {
    return ( 
        <header>
            <div className="logo">
                <figure>
                    <img src={logo} alt="Cypto Junkies logo" />
                    <figcaption>Crypto Junkies</figcaption> 
                </figure>
            </div>
          {/* <nav>
              <Link to="/">Crypto Index</Link> 
              <Link to="/news">News</Link> 
              <Link to="/defi">DeFi</Link> 
              <Link to="/nft">NFT</Link> 
              <Link to="/metrics">Metrics</Link> 
              <Link to="/learn">Learn</Link> 
              <Link to="/buycrypto">Buy Crypto</Link> 
          </nav> */}
                    <nav className="navbar navbar-expand-lg  navbar-dark bg-dark">
                        <div className="container-fluid">
                            <a className="navbar-brand" href="#">Navbar</a>
                            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#">Home</a>
                                </li>
                                <li className="nav-item">
                                <a className="nav-link" href="#">Link</a>
                                </li>
                                <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Dropdown
                                </a>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li><a className="dropdown-item" href="#">Action</a></li>
                                    <li><a className="dropdown-item" href="#">Another action</a></li>
                                
                                    <li><a className="dropdown-item" href="#">Something else here</a></li>
                                </ul>
                                </li>
                                <li className="nav-item">
                                <a className="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
                                </li>
                            </ul>
                            </div>
                        </div>
                        </nav>
        </header>
     );
}
 
export default Header;