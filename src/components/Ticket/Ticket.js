import React, {Component} from 'react';

import classes from './Ticket.module.scss'

const Ticket = () => {
	const { ticket, ticket__info, ticket__price, ticket__logo, ticket__span, ticket__block, ticket__value } = classes;
	return (
		<div className={ ticket }>
			<div className={ ticket__info }>
				<span className={ ticket__price }>13 400 P</span>
				<img src="s7-logo.png" alt="sorry, img is not found" className={ ticket__logo }/>
			</div>
			<div className={ ticket__info }>
				<div className={ ticket__block }>
					<span className={ ticket__span }>MOW - HKT </span><br />
					<span className={ ticket__value }>10:45 - 08:00</span>
				</div>
				<div className={ ticket__block } >
					<span className={ ticket__span }>В ПУТИ </span><br />
					<span className={ ticket__value }>21ч 15м</span>
				</div>
				<div className={ ticket__block } >
					<span className={ ticket__span }>2 ПЕРЕСАДКИ </span><br /> 
					<span className={ ticket__value }>HKG, JNB</span>
				</div>
			</div>
			<div className={ ticket__info }>
				<div className={ ticket__block }>
					<span className={ ticket__span }>MOW - HKT </span><br />
					<span className={ ticket__value }>10:45 - 08:00</span>
				</div>
				<div className={ ticket__block } >
					<span className={ ticket__span }>В ПУТИ </span><br />
					<span className={ ticket__value }>21ч 15м</span>
				</div>
				<div className={ ticket__block } >
					<span className={ ticket__span }>2 ПЕРЕСАДКИ </span><br /> 
					<span className={ ticket__value }>HKG, JNB</span>
				</div>
			</div>
		</div>
	)
}

export default Ticket;