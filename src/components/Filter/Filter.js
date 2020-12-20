import React, {Component} from 'react';

import classes from './Filter.module.scss'

const Filter = () => {
	const { filter, filter__header, filter__checkbox, filter__value } = classes;
	return (
		<div className={ filter }>
			<h4 className={ filter__header }>КОЛИЧЕСТВО ПЕРЕСАДОК</h4>
			<input type="checkbox" name="all" className={ filter__checkbox } /> 
			<span className={filter__value}>Все</span><br />
			<input type="checkbox" name="WithoutTransfers" className={ filter__checkbox } /> 
			<span className={filter__value}>Без пересадок</span><br />
			<input type="checkbox" name="Transfers1" className={ filter__checkbox } /> 
			<span className={filter__value}>1 пересадка</span><br />
			<input type="checkbox" name="Transfers2" className={ filter__checkbox } /> 
			<span className={filter__value}>2 пересадки</span><br />
			<input type="checkbox" name="Transfers3" className={ filter__checkbox } /> 
			<span className={filter__value}>3 пересадки</span><br />
		</div>
	)
}

export default Filter;