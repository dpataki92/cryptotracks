import React from 'react';
import AddCoinButton from '../components/addCoinButton.js';
import CoinList from '../components/coinList.js';

const CoinSummary = () => {

    return (
        <div className="coinsummary shadow border rounded bg-light">
            <AddCoinButton />
            <CoinList />
        </div>
    )
}

export default CoinSummary;