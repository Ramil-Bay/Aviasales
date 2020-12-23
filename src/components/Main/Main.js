import React, {Component} from 'react';
import Ticket from '../Ticket';
import Filter from '../Filter';

import classes from './Main.module.scss';

const Main = () => {
	const { main, main__logo, main__sort, main__button, active, main__img } = classes;
	const activeButton = [main__button, active];
	return (
		<div className={ main }>
			<div className={ main__img }>
			<img src="Logo.png" alt="sorry, img is not found" className={main__logo} />
			</div>
			<Filter />
			<div className={main__sort} >
				<button className={activeButton.join(' ')}>самый дешевый</button>
				<button className={main__button}>самый быстрый</button>
				<Ticket />
			</div>
		</div>
	)
}

export default Main;