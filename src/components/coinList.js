import React, { useEffect, useState, useContext } from 'react';
import coinGecko from '../apis/coinGecko.js';
import { CoinStorageContext } from '../context/coinStorage.js';
import Coin from './coin.js';

const CoinList = (props) => {

    const [coins, setCoins] = useState([]);
    const { coinStorage } = useContext(CoinStorageContext);
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
            
            setCoins(response.data);
            setIsLoading(false);

        }

        fetchData()
    }, [])

    const renderCoins = () => {
        if(isLoading) {
            return <div><i className="fas fa-coins"></i> Your coins are loading...</div>
        }

        return (
            <ul className="coinlist list-group mt-2">
                {coins.map((coin) => {
                    return <Coin key={coin.id} coin={coin} />;
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