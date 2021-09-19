import useApiRequest from "./useApiRequest";

function BitcoinFearIndex() {
    let { data: BitcoinFearIndexData, error, isLoaded } = useApiRequest('https://api.alternative.me/fng/?limit=5');
 
    const days = ['Toda', 'Yesterday', 'Last Week'];

    return (  
          <div className="fear-and-greed" >
              <img src="https://alternative.me/crypto/fear-and-greed-index.png" alt="Latest Crypto Fear & Greed Index" />
            <div className="history-data">

            </div>
         </div>
    );
}

export default BitcoinFearIndex;