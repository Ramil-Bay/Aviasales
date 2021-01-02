const data = {
	all: true,
	withoutTransfers: true,
	oneTransfers: true,
	twoTransfers: true,
	threeTransfers: true,
	tickets: [],
	stop: false,
	theСheapest: true,
};

const reducer = (state = data, action) => {
	const { type, payload } = action;
	switch (type) {
		case 'FILTER_TRANSFERS':
			return {
				...state,
				...payload,
			};

		case 'ADD_TICKET':
			return {
				...state,
				tickets: [...state.tickets, ...payload.tickets],
				stop: payload.stop,
			};

		case 'SORT_TICKET':
			return {
				...state,
				theСheapest: payload,
			};

		default:
			return state;
	}
};

export default reducer;
