import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import PriceChart from '../components/priceChart.js';
import CoinData from '../components/coinData.js';
import coinGecko from '../apis/coinGecko.js';

const CoinDetails = () => {
    const { id } = useParams();
    const [coinData, setCoinData] = useState([]);
    const [isLoading, setIsLoading] = useState([]);

    const format = data => {
        return data.map(el => {
            return {
                t: el[0],
                y: el[1].toFixed(2)
            }
        })
    }

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
                day: format(day.data.prices),
                week: format(week.data.prices),
                year: format(year.data.prices),
                detail: detail.data[0]
            });
            setIsLoading(false)
            
        }
        
        fetchData();

    }, [])

    const coinRender = () => {
        if (isLoading) {
            return <div><i className="fas fa-coins"></i> Your coin is loading...</div>
        }
        return(
            <div className="coinlist">
                <PriceChart data={coinData}/>
                <CoinData />
            </div>
        )
    }
    
    return coinRender();
}

export default CoinDetails;