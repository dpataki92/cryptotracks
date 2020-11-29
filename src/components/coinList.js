import React, { useEffect, useState, useContext } from 'react';
import coinGecko from '../apis/coinGecko.js';
import { CoinStorageContext } from '../context/coinStorage.js';
import Coin from './coin.js';

const CoinList = (props) => {

    const [coins, setCoins] = useState([]);
    const { coinStorage, deleteCoin } = useContext(CoinStorageContext);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            setIsLoading(true);
            const response = await coinGecko.get('/coins/markets', {
                params: {
                    vs_currency: 'usd',
                    ids: coinStorage.join(",")
                }
            });
            console.log(response.data)
            setCoins(response.data);
            setIsLoading(false);

        }

        if (coinStorage.length > 0) {
            fetchData();
        } else {
            setCoins([]);
        }

    }, [coinStorage]);

    const renderCoins = () => {
        if(isLoading) {
            return <div><i className="fas fa-coins"></i> Your coins are loading...</div>
        } else if (coins.length === 0) {
            return <div><i className="fas fa-coins"></i> Add a coin to the list...</div>
        }

        return (
            <ul className="coinlist list-group">
                {coins.map((coin) => {
                    return <Coin key={coin.id} coin={coin} deleteCoin={deleteCoin}/>;
                })}               
            </ul>
        )
    }

    return (
        <div>
            {renderCoins()}
        </div>
    );
}
 
export default CoinList;