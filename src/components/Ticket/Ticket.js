import React from 'react';

import classes from './Ticket.module.scss';

const Ticket = ({ price, carrier, segments }) => {
	const {
		ticket,
		ticket__info,
		ticket__price,
		ticket__logo,
		ticket__span,
		ticket__block,
		ticket__value,
	} = classes;
	const carrierLogoURL = `http://pics.avs.io/99/36/${carrier}.png`;
	const priceString = String(price);
	const ticketPrice = `${priceString.slice(
		0,
		priceString.length - 3
	)} ${priceString.slice(-3)}`;
	const way = segments.map((elem) => {
		const hours = Math.floor(elem.duration / 60);
		const minutes = elem.duration - hours * 60;
		const { origin, destination, stops, date } = elem;
		const departureTime = new Date(date);
		const departureTimeHours =
			departureTime.getHours() - 5 >= 0
				? departureTime.getHours() - 5
				: departureTime.getHours() + 24 - 5;
		const departureTimeMinutes = departureTime.getMinutes();
		let transfer;
		switch (stops.length) {
			case 0:
				transfer = 'БЕЗ ПЕРЕСАДОК';
				break;
			case 1:
				transfer = 'ПЕРЕСАДКА';
				break;
			default:
				transfer = 'ПЕРЕСАДКИ';
		}
		return (
			<div className={ticket__info}>
				<div className={ticket__block}>
					<span className={ticket__span}>
						{origin} - {destination}{' '}
					</span>
					<br />
					<span className={ticket__value}>
						{departureTimeHours < 10 ? '0' : ''}
						{departureTimeHours}:{departureTimeMinutes < 10 ? '0' : ''}
						{departureTimeMinutes}
					</span>
				</div>
				<div className={ticket__block}>
					<span className={ticket__span}>В ПУТИ </span>
					<br />
					<span className={ticket__value}>
						{hours}ч {minutes}м
					</span>
				</div>
				<div className={ticket__block}>
					<span className={ticket__span}>
						{stops.length !== 0 ? stops.length : null} {transfer}{' '}
					</span>
					<br />
					<span className={ticket__value}>{stops.join(', ')}</span>
				</div>
			</div>
		);
	});

	return (
		<div className={ticket}>
			<div className={ticket__info}>
				<span className={ticket__price}>{ticketPrice} P</span>
				<img
					src={carrierLogoURL}
					alt="sorry, img is not found"
					className={ticket__logo}
				/>
			</div>

			{way}
		</div>
	);
};

export default Ticket;
