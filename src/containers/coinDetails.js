import React from 'react';
import { useParams } from 'react-router-dom';
import PriceChart from './priceChart.js';
import CoinData from './coinData.js';

const CoinDetails = () => {
    const { id } = useParams();

    const coinRender = () => {
        return(
            <div className="coinlist">
                <PriceChart />
                <CoinData />
            </div>
        )
    }
    
    return coinRender;
}

export default CoinDetails;