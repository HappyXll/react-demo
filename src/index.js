import React from 'react';
import ReactDOM from 'react-dom'
import {createStore} from 'redux'
import {applyMiddleware} from 'redux'
import Counter from './components/Counter'
import counter from './reducers'
import {Provider} from 'react-redux'
import Dd from './components/DD'
import Family from './components/Family'
import Family2 from './components/Family2'
import Family3 from './components/Family3'
import Family4 from './components/Family4'
import {logger,error}from './components/Middle'

const store = createStore(counter, ['Use Redux'],applyMiddleware(logger,error));



const render=(store)=>ReactDOM.render(
  <Provider store={ store }>
   <Counter/>
  </Provider>,
  document.getElementById('root')
);
render(store);