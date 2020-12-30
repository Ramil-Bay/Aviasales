export const filterTransfers = ({
	all,
	withoutTransfers,
	oneTransfers,
	twoTransfers,
	threeTransfers,
	allChecked = false,
}) => {
	const obj = {
		all,
		withoutTransfers,
		oneTransfers,
		twoTransfers,
		threeTransfers,
	};

	if (allChecked) {
		obj.withoutTransfers = all;
		obj.oneTransfers = all;
		obj.twoTransfers = all;
		obj.threeTransfers = all;
	} else if (
		withoutTransfers &&
		oneTransfers &&
		twoTransfers &&
		threeTransfers
	) {
		obj.all = true;
	} else {
		obj.all = false;
	}

	return { type: 'FILTER_TRANSFERS', tranfers: { ...obj } };
};

export const addTicket = (res) => ({
	type: 'ADD_TICKET',
	tickets: res.tickets,
	stop: res.stop,
});

export const sortTicket = (sortValue) => ({
	type: 'SORT_TICKET',
	theСheapest: sortValue,
});

