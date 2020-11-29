import React from 'react';
import AddCoinButton from '../components/addCoinButton.js';
import CoinList from '../components/coinList.js';

const CoinSummary = () => {
    const coins = [
        "bitcoin",
        "ethereum",
        "ripple",
        "dash",
        "neo",
        "tron",
        "bitcoin-cash",
        "litecoin",
        "ardor",
        "eos",
        "okb",
        "tezos",
        "cardano",
        "hyperion",
        "tether"
      ];

    return (
        <div className="coinsummary shadow border rounded bg-light">
            <AddCoinButton coins={coins}/>
            <CoinList allCoins={coins}/>
        </div>
    )
}

export default CoinSummary;