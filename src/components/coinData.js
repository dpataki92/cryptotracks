import React from 'react';

const CoinData = ({data}) => {
    console.log(data)
    const renderData = () => {
      if (data) {
        return (
          <div className="bg-white mt-3 p-2 rounded border row coin-data-div">
            <div className="col-sm">
              <div className="d-flex flex-column">
                <span className="text-muted coin-data-category">Market capitalization</span>
                <span>{data.market_cap}</span>
              </div>
              <hr />
              <div className="d-flex flex-column">
                <span className="text-muted coin-data-category">
                  Circulating supply
                </span>
                <span>{data.circulating_supply}</span>
              </div>
            </div>
  
            <div className="col-sm">
              <div className="d-flex flex-column">
                <span className="text-muted coin-data-category">Market cap ranking</span>
                <span>{data.market_cap_rank}</span>
              </div>
              <hr />
              <div className="d-flex flex-column">
                <span className="text-muted coin-data-category">High (24H)</span>
                <span>{data.high_24h}</span>
              </div>
            </div>
  
            <div className="col-sm">
              <div className="d-flex flex-column">
                <span className="text-muted coin-data-category">
                  Total volume (24H)
                </span>
                <span>{data.total_volume}</span>
              </div>
              <hr />
              <div className="d-flex flex-column">
                <span className="text-muted coin-data-category">Low (24H)</span>
                <span>{data.low_24h}</span>
              </div>
            </div>
          </div>
          );
        }
      };

    return (
        <div>
            {renderData()}
        </div>
      );
}
 
export default CoinData;