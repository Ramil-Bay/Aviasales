import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as actions from '../../actions';

import classes from './Filter.module.scss'

const Filter = ({transfers, filterTransfers}) => {
	console.log(transfers);
	const {all, withoutTransfers, oneTransfers, twoTransfers, threeTransfers} = transfers;
	const { filter, filter__header, filter__checkbox, filter__value } = classes;
	return (
		<div className={ filter }>
			<h4 className={ filter__header }>КОЛИЧЕСТВО ПЕРЕСАДОК</h4>
			<input 
			type="checkbox" name="all" className={ filter__checkbox } checked={all} 
			onChange={val => filterTransfers({all: val.target.checked, withoutTransfers, oneTransfers, twoTransfers, threeTransfers, allChecked: true })} /> 
			<span className={filter__value}>Все</span><br />
			<input type="checkbox" name="WithoutTransfers" className={ filter__checkbox } checked={withoutTransfers}
			onChange={val => filterTransfers({all, withoutTransfers: val.target.checked, oneTransfers, twoTransfers, threeTransfers})} /> 
			<span className={filter__value}>Без пересадок</span><br />
			<input type="checkbox" name="Transfers1" className={ filter__checkbox } checked={oneTransfers} 
			onChange={val => filterTransfers({all, withoutTransfers, oneTransfers: val.target.checked, twoTransfers, threeTransfers})} /> 
			<span className={filter__value}>1 пересадка</span><br />
			<input type="checkbox" name="Transfers2" className={ filter__checkbox } checked={twoTransfers}
			onChange={val => filterTransfers({all, withoutTransfers, oneTransfers, twoTransfers: val.target.checked, threeTransfers})} /> 
			<span className={filter__value}>2 пересадки</span><br />
			<input type="checkbox" name="Transfers3" className={ filter__checkbox } checked={threeTransfers} 
			onChange={val => filterTransfers({all, withoutTransfers, oneTransfers, twoTransfers, threeTransfers: val.target.checked})} /> 
			<span className={filter__value}>3 пересадки</span><br />
		</div>
	)
}

const mapStateToProps = (state) => {
	return {
		transfers: state,
	}
}


export default connect(mapStateToProps, actions)(Filter);