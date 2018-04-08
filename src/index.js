import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './containers/App'
import 'whatwg-fetch'
import { Provider } from 'react-redux'
import store from './state/store'

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
document.getElementById('root'))
