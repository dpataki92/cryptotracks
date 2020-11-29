import React, { useContext, useState } from 'react';
import { CoinStorageContext } from '../context/coinStorage.js';

const AddCoinButton = (props) => {
    const [isActive, setIsActive] = useState(false);
    const { addCoin } = useContext(CoinStorageContext);
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

    const handleClick = (coin) => {
        addCoin(coin);
        setIsActive(false);
    };

    return ( 
    
        <div className="dropdown">
        <button onClick={() => setIsActive(!isActive)} className="btn btn-primary dropdown-toggle add-coin" type="button">
          Add Coin
        </button>
        <div className={isActive ? "dropdown-menu show" : "dropdown-menu"}>
          {coins.map((el) => {
            return (
              <a onClick={() => handleClick(el)} href="#" className="dropdown-item">{el}</a>
            );
          })}
        </div>
      </div>
    
    );
}
 
export default AddCoinButton;