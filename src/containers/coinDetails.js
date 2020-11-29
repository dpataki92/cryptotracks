import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import PriceChart from '../components/priceChart.js';
import CoinData from '../components/coinData.js';
import coinGecko from '../apis/coinGecko.js';

const CoinDetails = () => {
    const { id } = useParams();
    const [coinData, setCoinData] = useState([]);
    const [isLoading, setIsLoading] = useState([]);

    useEffect(() => {
        const fetchData = async () => {

            setIsLoading(true);

            const [day, week, year, detail] = await Promise.all([
                coinGecko.get(`/coins/${id}/market_chart`, {
                params: {
                    vs_currency: "usd",
                    days: '1'
                }
            }), coinGecko.get(`/coins/${id}/market_chart`, {
                params: {
                    vs_currency: "usd",
                    days: '7'
                }
            }), coinGecko.get(`/coins/${id}/market_chart`, {
                params: {
                    vs_currency: "usd",
                    days: '365'
                }
            }), coinGecko.get(`/coins/markets`, {
                params: {
                    vs_currency: "usd",
                    ids: id
                }
            })]);
       
            setCoinData({
                day: day.data.prices,
                week: week.data.prices,
                year: year.data.prices,
                detail: detail.data[0]
            });
            setIsLoading(false)
            
        }
        
        fetchData();

    }, [])

    const coinRender = () => {
        if (isLoading) {
            return <div><i className="fas fa-coins"></i> Your coin is loading...</div>
        } else {
            return(
                <div className="coinlist">
                    <PriceChart />
                    <CoinData />
                </div>
            )
        }
    }
    
    return coinRender;
}

export default CoinDetails;