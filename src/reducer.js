
const data = {
	all: true,
	withoutTransfers: true,
	oneTransfers: true,
	twoTransfers: true,
	threeTransfers: true,
}

const reducer = (state = data, action) => {
	switch (action.type) {
		case 'FILTER_TRANSFERS': 
			return action.tranfers
		
		default: 
			return state;	
	}
}

export default reducer;