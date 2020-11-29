import React, { createContext, useState } from "react";

export const CoinStorageContext = createContext();

export const CoinStorageContextProvider = props => {
    const [coinStorage, setCoinStorage] = useState(['bitcoin', 'ethereum', 'ripple', 'litecoin']);

    const deleteCoin = (coin) => {
        setCoinStorage(coinStorage.filter(el => {return el !== coin}));
    }

    const addCoin = (coin) => {
        if (coinStorage.indexOf(coin) === -1) {
            setCoinStorage([...coinStorage, coin]);
        }
    }

    return (
        <CoinStorageContext.Provider value={{coinStorage, deleteCoin, addCoin}}>
            {props.children}
        </CoinStorageContext.Provider>
    );
}