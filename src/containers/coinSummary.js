import React, { useEffect, useState } from 'react';
import AddCoinButton from '../components/addCoinButton.js';
import CoinList from '../components/coinList.js';
import coinGecko from '../apis/coinGecko.js';

const CoinSummary = () => {

    const [coins, setCoins] = useState([])

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
            <AddCoinButton />
            <CoinList />
        </div>
    )
}

export default CoinSummary;