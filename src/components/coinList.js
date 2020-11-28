import React, { useEffect, useState, useContext } from 'react';
import coinGecko from '../apis/coinGecko.js';
import { CoinStorageContext } from '../context/coinStorage.js';

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

    return (
        <div>

        </div>
    );
}
 
export default CoinList;