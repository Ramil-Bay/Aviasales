
export const filterTransfers = ({all, withoutTransfers, oneTransfers, twoTransfers, threeTransfers, allChecked = false}) => {

	if (allChecked) {
		withoutTransfers = all;
		oneTransfers = all;
		twoTransfers = all;
		threeTransfers = all;
	} else if ( withoutTransfers && oneTransfers && twoTransfers && threeTransfers) {
		all = true
	} else {
		all = false
	}

	return {type: 'FILTER_TRANSFERS', tranfers: { all, withoutTransfers, oneTransfers, twoTransfers, threeTransfers }}
}