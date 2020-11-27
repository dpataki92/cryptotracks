import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import CoinDetails from './coinDetails.js';
import CoinList from './coinList.js';

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