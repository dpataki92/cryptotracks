import React, { createContext, useEffect, useState } from "react";

export const CoinStorageContext = createContext();

export const CoinStorageContextProvider = props => {
    const [coinStorage, setCoinStorage] = useState(localStorage.getItem("coinStorage").split(",")  || ['bitcoin', 'ethereum', 'ripple', 'litecoin']);

    useEffect(() => {
        localStorage.setItem("coinStorage", coinStorage);
    }, [coinStorage]);

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