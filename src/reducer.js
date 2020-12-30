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
	const { type, tranfers, tickets, stop, theСheapest } = action;
	switch (type) {
		case 'FILTER_TRANSFERS':
			return {
				...state,
				...tranfers,
			};

		case 'ADD_TICKET':
			return {
				...state,
				tickets: [...state.tickets, ...tickets],
				stop,
			};

		case 'SORT_TICKET':
			return {
				...state,
				theСheapest,
			};

		default:
			return state;
	}
};

export default reducer;
