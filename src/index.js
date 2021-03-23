import React from 'react';
import ReactDOM from 'react-dom';
import Home from './containers/Home';
import { Provider } from 'react-redux';
import store from './redux/store';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './index.css';

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <Router>
                <Route path="/" component={Home} />
            </Router>
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);
