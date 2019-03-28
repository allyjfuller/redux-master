const initialState = {
	username: 'Ally',
	location: 'NYC'
}

// this reducer is now managing this state ^^^

const user = (state = initialState, action) => {
	switch(action.type) {
		case '':
			return{}

		default:
			return state
	}
}

export default user