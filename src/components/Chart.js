import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Currency from './Currency';
import Loader from './Loader';

function Chart(){
    const [coins, setCoins] = useState([]);
    const [search, setSearch] = useState('');

    useEffect( () => {
        axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=25&page=1&sparkline=false')
        .then(res => {
          setCoins(res.data);
          document.getElementById("loader-mask").style.display = "none";
        })
        .catch(error => console.log(error));
      }, []);
     
      const handleChange = e => {
        setSearch(e.target.value)
      }
    
      const filteredCoins = coins.filter( coin =>
        coin.name.toLowerCase().includes(search.toLowerCase())
        )
    
    
    return (
            <div className="crypto-chart">
                <Loader />
                        {/* <div className="crypto-search">
                            <h1>Search a currency:</h1>
                         </div> */}
                        <div id="first-currency-container" className="currency-container">
                          <div className="chart-row chart-header">
                            <div className="coin">
                               <form>
                                    <input type="text" placeholder="Search" className="search-input"  onChange={handleChange} />
                                </form>
                             </div>
                            <div className="coin-data">
                              <p className="coin-price">Price</p>
                              <p className="coin-percent">24h %</p>
                              <p className="coin-marketcap">Market Cap</p>
                              <p className="coin-volume"> Volume(24h)</p>
                              <p className="circ-supply">  Circulating Supply  </p>
                            </div>
                          </div>
                        </div>
                        {filteredCoins.map(coin => {
                        return(
                            <Currency key={coin.id} 
                            name={coin.name}
                            image={coin.image}
                            symbol={coin.symbol}
                            marketcap={coin.market_cap}
                            price={coin.current_price}
                            priceChange={coin.price_change_percentage_24h}
                            volume={coin.total_volume}
                            circulatingSupply={coin.circulating_supply}
                            />
                        );
                        })}
            </div>
        );
}

export default Chart;