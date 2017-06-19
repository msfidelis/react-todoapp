import React from 'react'
import ReactDOM from 'react-dom'
import { combineReducers, createStore } from 'redux'
import { Provider } from 'react-redux'

import App from './main/app'

const reducers = combineReducers({
    field : () => ({
        value : "opa"
    })
})

ReactDOM.render(
    <Provider store={createStore(reducers)}>
        <App />
    </Provider>
, document.getElementById('app'))