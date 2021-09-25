/* News Logos */
import coinDeskLogo from '../imgs/logos/coindesk.svg';
import coinTelegraphLogo from '../imgs/logos/cointelegraph.svg';
import theBlockLogo from '../imgs/logos/theblock.svg';
/* Indexes Logos */
import coinGeckoLogo from '../imgs/logos/coingecko.png';
import coinMarketCapLogo from '../imgs/logos/coinmarketcap.svg';
/* Defi Logos */
import defiPulseoLogo from '../imgs/logos/defipulse.png';
import stakingRewardsLogo from '../imgs/logos/stakingrewards.png';

const Learn = () => {
    return (  
        <section className="crypto-learn">
                <div className="contrainer">
                    <h3>Indexes</h3>
                    <div className="resources">
                        <a href="coingecko.com">
                        <img className="svg-logo coingecko"  src={coinGeckoLogo} />
                        </a>
                        <a href="coinmarketcap.com">
                            <img className="svg-logo"  src={coinMarketCapLogo} />
                        </a>
                        <a href=""></a>
                    </div>
                </div>
                <div className="contrainer">
                    <h3>News</h3>
                    <div className="resources">
                        <a href="cointelegraph.com">
                        <img className="svg-logo"  src={coinTelegraphLogo} />
                        </a>
                        <a href="coindesk.com">
                            <img className="svg-logo"  src={coinDeskLogo} />
                        </a>
                        <a href="theblockcrypto.com">
                            <img className="svg-logo block"  src={theBlockLogo} />
                        </a>
                    </div>
                </div>
                <div className="container">
                    <h3>Defi</h3>
                    <div className="resources">
                        <a href="defipulse.com">
                        <img className="svg-logo defi-pulse"  src={defiPulseoLogo} />
                        </a>
                        <a href="stakingrewards.com">
                            <img className="svg-logo staking-rewards"  src={stakingRewardsLogo} />
                        </a>
                        <a href=""></a>
                    </div>

                </div>
         </section>
     );
}
 
export default Learn;