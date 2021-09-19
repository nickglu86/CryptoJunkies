import useApiRequest from "./useApiRequest";
import Loader from "./Loader";

function BitcoinFearIndex() {
    let { data: fagData, error, isLoaded } = useApiRequest('https://api.alternative.me/fng/?limit=14');
 
    const days = ['Toda', 'Yesterday', 'Last Week'];
    if (error !== null) {
        return <div> Error: {error.message}</div>;
      }
      if (!isLoaded) {
        return <Loader />;
      }

    const calcRangeGAF = (fagDataRange) => {
        let valuesArr = fagDataRange.map( day => day.value)
        let avrValue =  valuesArr.reduce((prevVal,curVal) =>  parseInt(prevVal) + parseInt(curVal), 0) / 7;
        return Math.floor(avrValue);
    }
    function getGAFLabel(avrgValue) {
        console.log('1  ' + avrgValue);
       switch (true) {
            case  (avrgValue < 24):
                  return 'Extreme Fear'
            case (avrgValue <= 49):
                 return 'Fear'
            case ( avrgValue <= 74):
                 return 'Greed'
            case (avrgValue > 74):
                 return 'Extreme Greed'
            default:
                return   ''
          }
    }
    const thisWeekGAF = calcRangeGAF(fagData.data.slice(0,7));
    const lastWeekGAF = calcRangeGAF(fagData.data.slice(7));

    return (  
          <div className="fear-and-greed" >
              <img src="https://alternative.me/crypto/fear-and-greed-index.png" alt="Latest Crypto Fear & Greed Index" />
            <div className="history-data">
                <h3>Historical Values</h3>
                <div className="gaf-values">
                <div  className="gaf-elem">
                      <div className="gaf-time">
                        <span>Now</span>
                        <div>{fagData.data[0].value_classification} </div>
                      </div>
                      <div className="gaf-num-val">{fagData.data[0].value} </div>
                    </div>
                    <div  className="gaf-elem">
                      <div className="gaf-time">
                       <span>Yesterday</span>
                       <div>{fagData.data[1].value_classification} </div>
                      </div>
                      <div className="gaf-num-value">{fagData.data[1].value} </div>
                    </div>
                    <div  className="gaf-elem">
                      <div className="gaf-time">
                       <span>This Week</span>
                       <div> {getGAFLabel(thisWeekGAF)}</div>
                      </div>
                      <div className="gaf-num-value"> {thisWeekGAF}</div>
                    </div>
                    <div  className="gaf-elem">
                      <div className="gaf-time">
                       <span>Last Week</span>
                       <div> {getGAFLabel(lastWeekGAF)}</div>
                      </div>
                      <div className="gaf-num-value">{lastWeekGAF}</div>
                    </div>

                </div>
         
            </div>
         </div>
    );
}

export default BitcoinFearIndex;