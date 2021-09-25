import Loader from "./Loader";
import useApiRequest from "./useApiRequest";

function DefiData() {
    // let { data, error, isLoaded } = useApiRequest(process.env.REACT_APP_DEFI);
    
    // if (error !== null) {
    //   return <div> Error: {error.message}</div>;
    // }
    // if (!isLoaded) {
    //   return <Loader />;
    // }
    const ethGasPriceURL = process.env.REACT_APP_GAS_PRICE;
    const ethUSDPriceURL ='https://min-api.cryptocompare.com/data/price?fsym=ETH&tsyms=USD,JPY,EUR';

    let {data : gasPricesData, error, isLoaded} = useApiRequest('https://data-api.defipulse.com/api/v1/egs/api/ethgasAPI.json?api-key=19d66f3f573373abd0d393d5b1627b863a61892555ae3d07263f7e93c6d7');
    let {data : ethUSDPrice, error: erroreth, isLoaded : isLoadedEth} = useApiRequest(ethUSDPriceURL);
    
    const data = {
        "All": {
            "total": 90630229601,
            "dominance_name": "Aave",
            "dominance_value": 14092046336,
            "value": {
                "total": {
                    "USD": {
                        "value": 90630229601
                    },
                    "ETH": {
                        "value": 7457939.491180869
                    },
                    "BTC": {
                        "value": 206599.2238305697
                    }
                },
                "balance": {
                    "ERC20": {
                        "DAI": {
                            "value": 3609873380.3524885
                        }
                    }
                },
                "tvl": {
                    "ETH": {
                        "value": 26489918.405993786
                    }
                }
            },
            "dominance_pct": 15.548946966194721
        },
        "Lending": {
            "total": 45273385752,
            "dominance_name": "Aave",
            "dominance_value": 14092046336,
            "value": {
                "total": {
                    "USD": {
                        "value": 45273385752
                    },
                    "ETH": {
                        "value": 4359674.371638999
                    },
                    "BTC": {
                        "value": 103035.51324742998
                    }
                },
                "balance": {
                    "ERC20": {
                        "DAI": {
                            "value": 2058578904.774872
                        }
                    }
                },
                "tvl": {
                    "ETH": {
                        "value": 13242052.511472953
                    }
                }
            },
            "dominance_pct": 31.12655725196667
        },
        "DEXes": {
            "total": 28761112299,
            "dominance_name": "Curve Finance",
            "dominance_value": 11853644889,
            "value": {
                "total": {
                    "USD": {
                        "value": 28761112299
                    },
                    "ETH": {
                        "value": 2351460.936665
                    },
                    "BTC": {
                        "value": 57933.85237732998
                    }
                },
                "balance": {
                    "ERC20": {
                        "DAI": {
                            "value": 1226866760.7875633
                        }
                    }
                },
                "tvl": {
                    "ETH": {
                        "value": 8383986.362958789
                    }
                }
            },
            "dominance_pct": 41.21413930646953
        },
        "Derivatives": {
            "total": 3479106944,
            "dominance_name": "Synthetix",
            "dominance_value": 1883064188,
            "value": {
                "total": {
                    "USD": {
                        "value": 3479106944
                    },
                    "ETH": {
                        "value": 364324.6797168684
                    },
                    "BTC": {
                        "value": 1390.2531301899999
                    }
                },
                "balance": {
                    "ERC20": {
                        "DAI": {
                            "value": 21682711.02849109
                        }
                    }
                },
                "tvl": {
                    "ETH": {
                        "value": 1028112.136640003
                    }
                }
            },
            "dominance_pct": 54.12492971069762
        },
        "Payments": {
            "total": 2992000790,
            "dominance_name": "Flexa",
            "dominance_value": 1259640633,
            "value": {
                "total": {
                    "USD": {
                        "value": 2992000790
                    },
                    "ETH": {
                        "value": 3429.386438
                    },
                    "BTC": {
                        "value": 6058.943198999999
                    }
                },
                "balance": {
                    "ERC20": {
                        "DAI": {
                            "value": 64151186.86369007
                        }
                    }
                },
                "tvl": {
                    "ETH": {
                        "value": 874975.9325287769
                    }
                }
            },
            "dominance_pct": 42.10027742004707
        },
        "Assets": {
            "total": 10124623816,
            "dominance_name": "Convex Finance",
            "dominance_value": 6207578063,
            "value": {
                "total": {
                    "USD": {
                        "value": 10124623816
                    },
                    "ETH": {
                        "value": 379050.11672199995
                    },
                    "BTC": {
                        "value": 38180.6618766197
                    }
                },
                "balance": {
                    "ERC20": {
                        "DAI": {
                            "value": 238593816.89787278
                        }
                    }
                },
                "tvl": {
                    "ETH": {
                        "value": 2960791.4623932606
                    }
                }
            },
            "dominance_pct": 61.31169094095259
        }
    }
    console.log(gasPricesData)
    return (
        <div className="defi-data">
            <div className="eth-gas">
            <h2>Gas Prices {ethUSDPrice.USD / 1000000000 * gasPricesData.fast}$ </h2>
            <div>fast :  {gasPricesData.fast}</div>
            <div>fastest :  {gasPricesData.fastest}</div>
            <div>safelow :  {gasPricesData.safeLow}</div>
            <div>average :  {gasPricesData.average}</div>
            <div>block time: {gasPricesData.block_time}</div> 

            </div>
            <div className="defi-market-data">
            <h2>Defi</h2>
                <div className="defi-market-column">
                    <div className="defi-market-box defi-market-total">
                        <h2>Total Value Locked (USD)</h2>
                        <span>{data.All.total}</span>
                    </div>
                    <div className="defi-market-box defi-market-dominance">
                        <h2>
                            {data.All.dominance_name} Dominance
                        </h2>
                          <span> {data.All.dominance_pct} %</span>
                    </div>               
                </div>
                <div className="tlv-market-column">
                    <div className="tvl-defi">
                        <h2>Total Value Locked (USD) in DeFi</h2>
                        <span>{data.All.value.total.USD.value}</span>
                    </div>             
                    <div className="tvl-defi">
                        <h2>ETH in DeFi</h2>
                        <span>{data.All.value.total.ETH.value}</span>
                    </div>  
                    <div className="tvl-defi">
                         <h2>BTC in DeFi</h2>
                         <span>{data.All.value.total.BTC.value}</span>
                    </div>  
                </div>
                <div className="devices-column">
          
                </div>
            </div>
             
       </div>
    );
}

export default DefiData;
