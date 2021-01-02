import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Loader from 'react-loader-spinner';
import { ArrowLeftOutlined } from '@ant-design/icons';

import * as actions from '../../actions';
import Ticket from '../Ticket';
import Filter from '../Filter';

import classes from './Main.module.scss';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';

const Main = ({
	tickets,
	theСheapest,
	sortTicket,
	all,
	withoutTransfers,
	oneTransfers,
	twoTransfers,
	threeTransfers,
	stop,
}) => {
	const {
		main,
		main__logo,
		main__sort,
		main__button,
		active,
		main__img,
		main__list,
		spin__container,
		spin__comments,
		spin,
		sort__message,
		sort__messageSpan
	} = classes;

	const activeButton = [main__button, active];

	if (theСheapest) {
		tickets.sort((a, b) => a.price - b.price);
	} else {
		tickets.sort(
			(a, b) =>
				a.segments[0].duration +
				a.segments[1].duration -
				(b.segments[0].duration + b.segments[1].duration)
		);
	}

	const sortedTickets = tickets.filter((elem) => {
		if (all) return elem;
		if (withoutTransfers && elem.segments[0].stops.length === 0) return elem;
		if (oneTransfers && elem.segments[0].stops.length === 1) return elem;
		if (twoTransfers && elem.segments[0].stops.length === 2) return elem;
		if (threeTransfers && elem.segments[0].stops.length === 3) return elem;
	});

	const ticket = sortedTickets.map((elem) => (
		<li>
			<Ticket {...elem} />
		</li>
	));

	const firstTickets = ticket.slice(0, 5);

	const spiner = !stop ? (
		<div className={spin}>
			<div className={spin__container}>
				<Loader type="ThreeDots" color="#00BFFF" height={50} width={50} />
			</div>
			<span className={spin__comments}>
				Подождите, не все билеты еще загружены...
			</span>
		</div>
	) : null;

	const sortMessage = sortedTickets.length === 0 && stop ? 
	<div className={sort__message}> <ArrowLeftOutlined style={{ marginRight: '10px' }} twoToneColor="#eb2f96" /> 
	<span className={sort__messageSpan}>Пожалуйста, выберите количество пересадок</span></div> : null;

	return (
		<div className={main}>
			<div className={main__img}>
				<img
					src="Logo.png"
					alt="sorry, img is not found"
					className={main__logo}
				/>
			</div>
			<Filter />
			<div className={main__sort}>
				<button
					className={theСheapest ? activeButton.join(' ') : main__button}
					type="button"
					onClick={() => sortTicket(true)}
				>
					самый дешевый
				</button>
				<button
					className={!theСheapest ? activeButton.join(' ') : main__button}
					type="button"
					onClick={() => sortTicket(false)}
				>
					самый быстрый
				</button>
				{ sortMessage }
				{spiner}
				<ul className={main__list}>{firstTickets}</ul>
			</div>
		</div>
	);
};

const mapStateToProps = (state) => {
	const {
		tickets,
		theСheapest,
		all,
		withoutTransfers,
		oneTransfers,
		twoTransfers,
		threeTransfers,
		stop,
	} = state;
	return {
		tickets,
		theСheapest,
		all,
		withoutTransfers,
		oneTransfers,
		twoTransfers,
		threeTransfers,
		stop,
	};
};

Main.defaultProps = {
	tickets: [
		{
			carrier: 'MH',
			price: 15001,
			segments: [
				{
					date: '2021-01-06T02:23:00.000Z',
					destination: 'HKT',
					duration: 866,
					origin: 'MOW',
					stops: ['SIN', 'KUL'],
				},
				{
					date: '2021-01-06T02:23:00.000Z',
					destination: 'HKT',
					duration: 866,
					origin: 'MOW',
					stops: ['SIN', 'KUL'],
				},
			],
		},
	],
};

Main.propTypes = {
	tickets: PropTypes.arrayOf(PropTypes.object),
	theСheapest: PropTypes.bool.isRequired,
	sortTicket: PropTypes.func.isRequired,
	all: PropTypes.bool.isRequired,
	withoutTransfers: PropTypes.bool.isRequired,
	oneTransfers: PropTypes.bool.isRequired,
	twoTransfers: PropTypes.bool.isRequired,
	threeTransfers: PropTypes.bool.isRequired,
	stop: PropTypes.bool.isRequired,
};

export default connect(mapStateToProps, actions)(Main);
