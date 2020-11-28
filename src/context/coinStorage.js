import React, { createContext, useState } from "react";

export const CoinStorageContext = createContext();

export const CoinStorageContextProvider = props => {
    const [coinStorage, setCoinStorage] = useState(['bitcoin', 'ethereum', 'ripple']);

    return (
        <CoinStorageContext.Provider value={{coinStorage}}>
            {props.children}
        </CoinStorageContext.Provider>
    );
}