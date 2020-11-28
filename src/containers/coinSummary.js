import React from 'react';
import AddCoinButton from '../components/addCoinButton.js';
import CoinList from '../components/coinList.js';

const CoinSummary = () => {

    return (
        <div className="coinsummary shadow border p-2 rounded mt-2 bg-light">
            <AddCoinButton />
            <CoinList />
        </div>
    )
}

export default CoinSummary;