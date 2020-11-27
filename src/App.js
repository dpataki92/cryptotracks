import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import CoinDetails from './components/coinDetails.js';
import CoinList from './components/coinList.js';
import './App.css';


const App = () => {
    return(
        <div>
            <Router>
                <Route exact path="/" component={CoinList}/>
            </Router>
        </div>
    )
}

export default App;