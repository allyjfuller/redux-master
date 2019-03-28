// create a variable for initial state
// reducers job is to manage and update the state when an action happens

const initialState = {
// initial state variable equal to an object (data) that has an empty array
	data: []
}

// create the actual reducer
// takes 2 arguments
// state: because its job is to update the state equal to the initialState
// action:
const todos = (state = initialState, action) => {
// this reducer is going to be managing and updating whatever
// is inside initialState because we've assigned it to the state
	// use switch statement
	switch(action.type) {
		// individual cases - listen for ADD_TODO case
		case 'ADD_TODO':
		/* dont change the previous state - copy it, change what you want,
		and then return a new state (aka never mutate the state) */

		return {
			// copy previous state with spread operator
			...state,
			// adding todo
			// copying the previous values
			// updating the data key
			// text is equal to action.text which comes from our action
			data: [...state.data, {id: Math.random(), text: action.text}]
		}

		case 'DELETE_TODO':
			return {}

		// need default case
		default:
		// returning state which is equal to initialState on line 13
		return state
	}
}

// export reducer
export default todos

// REDUCERS JOB IS TO LISTEN FOR ACTIONS AND UPDATE THE STATE ACCORDINGLY //