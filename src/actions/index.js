const ADD_TODO = 'ADD_TODO'

// Action Creator: a function that immediately returns an object
export const addTodo = (text) => ({
	// Inside an action creator we need a type property 
	// (allows the reducer to know when an action has happened so
	// the reducer can update the state)
	// key: value relationship because we're inside an object
	type: ADD_TODO,
	// payload: value equal to the argument passed
	text: text
})

/* Same as:

const addTodo = () => {
	return {
		type: ADD_TODO 
	}
}
*/

const DELETE_TODO = 'DELETE_TODO'
const deleteTodo = (id) => ({
	type: DELETE_TODO,
	// when we call this action we pass the id of the todo to delete
	id: id
})

// type equals the DELETE_TODO variable defined on line 21

/* When these actions are dispatched the reducer
listens for the type of action so it can update the state
accordingly */


