import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import CoinDetails from './containers/coinDetails.js';
import CoinSummary from './containers/coinSummary.js';
import './App.css';
import Header from './components/header.js';
import { CoinStorageContextProvider } from './context/coinStorage.js';
import CompareCoins from './components/compareCoins.js';


const App = () => {
    return(
        <div className="container">
            <CoinStorageContextProvider>
                <Router>
                    <Header />
                    <Route exact path="/" component={CoinSummary}/>
                    <Route exact path="/cryptotracks" component={CoinSummary}/>
                    <Route exact path="/coins/:id" component={CoinDetails}/>
                    <Route exact path="/coins/compare" component={CompareCoins}/>
                </Router>
            </CoinStorageContextProvider>
        </div>
    )
}

export default App;