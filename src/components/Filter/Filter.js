import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as actions from '../../actions';

import classes from './Filter.module.scss'

const Filter = ({ value,
				all,
				withoutTransfers,
				transfers1,
				transfers2,
				transfers3, }) => {
	console.log(value);
	const { filter, filter__header, filter__checkbox, filter__value } = classes;
	return (
		<div className={ filter }>
			<h4 className={ filter__header }>КОЛИЧЕСТВО ПЕРЕСАДОК</h4>
			<input type="checkbox" name="all" className={ filter__checkbox } onChange={all} checked={value.all}/ > 
			<span className={filter__value}>Все</span><br />
			<input type="checkbox" name="WithoutTransfers" className={ filter__checkbox } onChange={withoutTransfers} checked={value.withoutTransfers} /> 
			<span className={filter__value}>Без пересадок</span><br />
			<input type="checkbox" name="Transfers1" className={ filter__checkbox } onChange={transfers1} checked={value.transfers1} /> 
			<span className={filter__value}>1 пересадка</span><br />
			<input type="checkbox" name="Transfers2" className={ filter__checkbox } onChange={transfers2} checked={value.transfers2} /> 
			<span className={filter__value}>2 пересадки</span><br />
			<input type="checkbox" name="Transfers3" className={ filter__checkbox } onChange={transfers3} checked={value.transfers3} /> 
			<span className={filter__value}>3 пересадки</span><br />
		</div>
	)
}

const mapStateToProps = (state) => {
	return {
		value: state,
	}
}


export default connect(mapStateToProps, actions)(Filter);