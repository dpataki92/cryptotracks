import React, { useEffect, useState, useContext } from 'react';
import coinGecko from '../apis/coinGecko.js';
import { CoinStorageContext } from '../context/coinStorage.js';

const CoinList = (props) => {

    const [coins, setCoins] = useState([]);
    const { coinStorage } = useContext(CoinStorageContext);

    useEffect(() => {
        const fetchData = async () => {
            const response = await coinGecko.get('/coins/markets', {
                params: {
                    vs_currency: 'usd',
                    ids: "bitcoin,ethereum"
                }
            });

            console.log(response.data);

        }

        fetchData()
    }, [])

    return (
        <div>

        </div>
    );
}
 
export default CoinList;