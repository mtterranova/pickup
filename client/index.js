import React, { Component } from 'react'
import { render } from 'react-dom'
import { Router, Route, Link, browserHistory, IndexRoute } from 'react-router'
import { combineReducers, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import thunk from 'redux-thunk'

import App from './public/components/app'
import reducer from './public/reducers'

import Login from './public/components/Login/Login'
import Home from './public/components/Home'





const createStoreWithMiddleWare = applyMiddleware(thunk)(createStore);

 render((
    <Provider store={createStoreWithMiddleWare(reducer)}>
      <Router history={browserHistory}>
        
        <Route path="/" component={App} >
          <IndexRoute component={Login} /> 
          <Route path="/Home" component={Home}/>  
        </Route>
        
      </Router>
    </Provider>
  ), document.getElementById('app'))