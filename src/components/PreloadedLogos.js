import { render } from "@testing-library/react"
import { useEffect, useState } from "react";

const PreloadedLogos = () => {
    const [isLoading, setIsLoading] = useState(true);   
    useEffect(
        () => {
            const imgs = [
                    "https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1547033579",
                    "https://assets.coingecko.com/coins/images/279/large/ethereum.png?1595348880",
                    "https://assets.coingecko.com/coins/images/975/large/cardano.png?1547034860",
                    "https://assets.coingecko.com/coins/images/325/large/Tether-logo.png?1598003707",
                    "https://assets.coingecko.com/coins/images/825/large/binance-coin-logo.png?1547034615",
                    "https://assets.coingecko.com/coins/images/4128/large/coinmarketcap-solana-200.png?1616489452",
                    "https://assets.coingecko.com/coins/images/44/large/xrp-symbol-white-128.png?1605778731",
                    "https://assets.coingecko.com/coins/images/5/large/dogecoin.png?1547792256",
                    "https://assets.coingecko.com/coins/images/12171/large/aJGBjJFU_400x400.jpg?1597804776",
                    "https://assets.coingecko.com/coins/images/6319/large/USD_Coin_icon.png?1547042389",
                    "https://assets.coingecko.com/coins/images/8284/large/luna1557227471663.png?1567147072"
               
            ];
            cacheImages(imgs);
        }
        ,[]);

        const cacheImages = async (srcArray) => {
            const promises = await srcArray.map((src) => {
                return new Promise( function (resolve, reject) {
                    const img = new Image();

                    img.src = src;
                    img.onload = resolve();
                    img.onerror = reject();
                });
            });
            await Promise.all(promises);
            setIsLoading(false);
        };

    return(<div></div>);

}
export default PreloadedLogos;