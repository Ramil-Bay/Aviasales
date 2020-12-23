
const data = {
	all: false,
	withoutTransfers: false,
	transfers1: false,
	transfers2: false,
	transfers3: false,
}

const reducer = (state = data, action) => {
	const allChecked = state.withoutTransfers && state.transfers1 && state.transfers2 && state.transfers3;
	switch (action.type) {
		case 'ALL': 
			return {
				all: !state.all,
				withoutTransfers: !state.all,
				transfers1: !state.all,
				transfers2: !state.all,
				transfers3: !state.all,
			};
		case 'WITHOUT_TRANSFERS': 
			if (allChecked) {
				return {
					...state,
					all: false,
					withoutTransfers: !state.withoutTransfers,
				}
			}

			if (!state.withoutTransfers && state.transfers1 && state.transfers2 && state.transfers3) {
				return {
					...state,
					all: true,
					withoutTransfers: !state.withoutTransfers,
				}
			}

			return {
				...state,
				withoutTransfers: !state.withoutTransfers,
			};

		case 'TRANSFERS_1': 
			if (allChecked) {
				return {
					...state,
					all: false,
					transfers1: !state.transfers1,
				}
			}

			if (state.withoutTransfers && !state.transfers1 && state.transfers2 && state.transfers3) {
				return {
					...state,
					all: true,
					transfers1: !state.transfers1,
				}
			}

			return {
				...state,
				transfers1: !state.transfers1,
			};

		case 'TRANSFERS_2': 
			if (allChecked) {
				return {
					...state,
					all: false,
					transfers2: !state.transfers2,
				}
			}

			if (state.withoutTransfers && state.transfers1 && !state.transfers2 && state.transfers3) {
				return {
					...state,
					all: true,
					transfers2: !state.transfers2,
				}
			}

			return {
				...state,
				transfers2: !state.transfers2,
			};
			
		case 'TRANSFERS_3': 
			if (allChecked) {
				return {
					...state,
					all: false,
					transfers3: !state.transfers3,
				}
			}

			if (state.withoutTransfers && state.transfers1 && state.transfers2 && !state.transfers3) {
				return {
					...state,
					all: true,
					transfers3: !state.transfers3,
				}
			}

			return {
				...state,
				transfers3: !state.transfers3,
			};			

		default: 
			return state;	
	}
}

export default reducer;