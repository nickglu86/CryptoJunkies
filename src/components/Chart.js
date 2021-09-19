import React, {useState, useEffect} from 'react';
import useApiRequest from "./useApiRequest";
import Currency from './Currency';
import Loader from './Loader';


function Chart(){
    const [search, setSearch] = useState('');

    let { data : coins, error, isLoaded } = useApiRequest(process.env.REACT_APP_CRYPTO_INDEX);

    if (error !== null) {
      return <div> Error: {error.message}</div>;
    }
    if (!isLoaded) {
      return <Loader />;
    }

    const handleChange = e => {
        setSearch(e.target.value)
    };
    
    const filteredCoins = coins.filter( coin =>
        coin.name.toLowerCase().includes(search.toLowerCase())
    );
          
    const chartHeader = () => {
          return (
            <div className="currency-container">     
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
          );
    }
        
    return (
            <div className="crypto-chart">                            
                 {chartHeader()}                    
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