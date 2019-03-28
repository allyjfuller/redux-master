// index.js combines all reducers into one

import { combineReducers } from 'redux'
import todos from './todos'
// import next reducer here
import user from './user'

const rootReducer = combineReducers({
	// assigns this key to line 4
	todos: todos,
	user: user
	// pass next reducer as a key here
})

export default rootReducer

// END UP WITH REDUCERS SQUISHED INTO ONE ASSIGNED TO rootReducer //