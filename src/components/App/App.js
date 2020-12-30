import React, { Component } from 'react';
import { connect } from 'react-redux';

import Main from '../Main';
import SwapiServices from '../../swapi-services';
import * as actions from '../../actions';

class App extends Component {
	swapiService = new SwapiServices();

	componentDidMount() {
		this.swapiService.getTickets().then((res) => {
			this.props.addTicket(res); //eslint-disable-line
		});
	}

	componentDidUpdate() {
		const { stop, addTicket } = this.props;
		if (!stop) {
			this.swapiService.getTickets().then((res) => {
				addTicket(res);
			});
		}
	}

	render() {
		return (
			<main>
				<Main />
			</main>
		);
	}
}

const mapStateToProps = (state) => ({
	stop: state.stop,
	tickets: state.tickets,
});

export default connect(mapStateToProps, actions)(App);
