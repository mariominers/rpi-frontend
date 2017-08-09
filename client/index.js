import React from 'react'
import ReactDOM from 'react-dom'

import { createStore, combineReducers } from 'redux'
import { Provider } from 'react-redux'
import createHistory from 'history/createBrowserHistory'
import { Router, Route, Switch } from 'react-router-dom'
import { syncHistoryWithStore, routerReducer } from 'react-router-redux'
import injectTapEventPlugin from 'react-tap-event-plugin'

import reducers from './reducers'

import MainContainer from './containers/main-container.js'
import WrapperContainer from './../core/wrapper'

import './style/main.scss'

injectTapEventPlugin()

const reducer = combineReducers({
  ...reducers,
  routing: routerReducer
})

// Add the reducer to your store on the `routing` key
const store = createStore(
  reducer
)

// Create an enhanced history that syncs navigation events with the store
const history = createHistory()
syncHistoryWithStore(history, store)

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <WrapperContainer>
        <Switch>
          <Route exact path='/' component={MainContainer} />
          <Route path='/graph' component={MainContainer} />
        </Switch>
      </WrapperContainer>
    </Router>
  </Provider>,
  document.getElementById('root')
)
