import React from 'react'
import ReactDOM from 'react-dom'
import * as serviceWorker from './serviceWorker'
import App from './App'
import './index.css'
// import cartReducer from './components/reducers/cartReducer';
import { Provider } from 'react-redux'
// import { createStore } from 'redux';
import store from './store'

// const store = createStore(cartReducer);

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById('root')
)

serviceWorker.unregister()
