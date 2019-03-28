import { createStore } from 'redux'
import rootReducer from './reducers'

// create store
// but it needs to be updated
// first argument will be reducers
const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
	// allows it to update whatever is in the store


export default store

// Tells react that this store holds the state for the app //