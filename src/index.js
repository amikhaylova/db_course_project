import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Order from "./components/OrderPage";
import Client from "./components/NewClientPage";
import Header from "./components/Header";
import {rootReducer} from './reducers/rootReducer.js'
import {Provider} from "react-redux";
import {composeWithDevTools} from "redux-devtools-extension";
import logger from "redux-logger";
import { createStore, applyMiddleware } from 'redux';
import thunk from "redux-thunk";

export const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(thunk, logger)),

);

const App = () => {
    return (
        <div>
            <Header/>
            <Main/>
        </div>

    );
};


const Main = () => (
    <main>
        <Switch>
            <Route exact path='/' component={Order}/>
            <Route path='/new_client' component={Client}/>
        </Switch>
    </main>
);

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <App/>
        </BrowserRouter>
    </Provider>,
    document.getElementById('root')
);

