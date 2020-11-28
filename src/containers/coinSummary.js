import React from 'react';
import AddCoinButton from '../components/addCoinButton.js';
import CoinList from '../components/coinList.js';

const CoinSummary = () => {

    return (
        <div>
            <AddCoinButton />
            <CoinList />
        </div>
    )
}

export default CoinSummary;