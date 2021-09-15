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

    return (
        <div className="news-feed">
            <div className="defi-market-data">
                <div className="defi-market-column">
                    <div className="defi-market-box defi-market-total">
                        <h2>Total Value Locked (USD)</h2>
                        <span>{data.All.total} 111122121</span>
                    </div>
                    <div className="defi-market-box defi-market-dominance">
                        <h2>
                            {data.All.dominance_name} Dominance
                        </h2>
                          <span> {data.All.dominance_pct} %</span>
                    </div>               
                </div>
            </div>
       </div>
    );
}

export default DefiData;
