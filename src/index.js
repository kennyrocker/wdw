import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

// Redux
import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
//import logger from 'redux-logger';


import { rootSaga } from './sagas/rootSaga';


import appReducer from './reducers/app';
import { Provider } from 'react-redux';

import * as serviceWorker from './serviceWorker';



const sagaMiddleware = createSagaMiddleware();

const store = createStore(
    appReducer,
    applyMiddleware(sagaMiddleware)
);

sagaMiddleware.run(rootSaga);


ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
