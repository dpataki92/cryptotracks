import React, { useContext, useState } from 'react';
import { CoinStorageContext } from '../context/coinStorage.js';

const AddCoinButton = ({coins}) => {
    const [isActive, setIsActive] = useState(false);
    const { addCoin } = useContext(CoinStorageContext);

    const handleClick = (coin) => {
        addCoin(coin);
        setIsActive(false);
    };

    return ( 
        <div className="coin-list-buttons">
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
      <div>
        <div className="chart-button mt-1">
            <button
              onClick={() => 1+2}
              className="btn btn-outline-secondary btn-sm"
            >
              Compare
            </button>
        </div>
      </div>
      </div>
    );
}
 
export default AddCoinButton;