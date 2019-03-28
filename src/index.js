import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
// tell the app to use redux
import { Provider } from 'react-redux'
// telling our react app which store is providing the state
import store from './store'


ReactDOM.render(
	// wrap the app inside the provider we imported on line 7
	// takes the prop store that equals to the store saying a redux store will be providing the state
	<Provider store={store}>
		<App />
	</Provider>, 
	document.getElementById('root'));


serviceWorker.unregister();
