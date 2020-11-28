import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import CoinDetails from './containers/coinDetails.js';
import CoinSummary from './containers/coinSummary.js';
import './App.css';
import Header from './components/header.js';


const App = () => {
    return(
        <div>
            <Router>
                <Header />
                <Route exact path="/" component={CoinSummary}/>
            </Router>
        </div>
    )
}

export default App;