import React from 'react';

const Currency = ({ name, image, symbol, price, volume, priceChange, marketcap, circulatingSupply}) => {
    return (
        <div className="currency-container">
            <div className="chart-row">
                <div className="coin">
                    <img src={image} alt='crypto' />
                    <h2>{name}</h2> 
                    <span className="coin-symbol">{symbol}</span>
                </div>
                <div className="coin-data">
                  <p className="coin-price">${price}</p>
                 
                  {priceChange < 0 ? (
                        <p className="coin-percent red">{priceChange.toFixed(2)}%</p>
                    ) : (
                        <p className="coin-percent green">{priceChange.toFixed(2)}%</p>
                
                    )
                   }
                   <p className="coin-marketcap">
                     $ {marketcap.toLocaleString()}
                     </p>
                   <p className="coin-volume">$ {volume.toLocaleString()}</p>
                   <p className="circ-supply"> 
                     <span className="coin-symbol">{symbol}</span>  
                      {circulatingSupply.toLocaleString()}
                    </p>

                </div>
            </div>
        </div>
    )
}

export default Currency
