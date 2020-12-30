export default class SwapiServices {
	guestId = '';

	async getSearchId() {
		const res = await fetch('https://front-test.beta.aviasales.ru/search');
		if (!res.ok) {
			throw new Error(`received ${res.status}`);
		}
		const guest = await res.json();
		return guest.searchId;
	}

	async getTickets() {
		if (!this.guestId) {
			this.guestId = await this.getSearchId();
		}
		const res = await fetch(
			`https://front-test.beta.aviasales.ru/tickets?searchId=${this.guestId}`
		);
		if (!res.ok) {
			return { tickets: [], stop: false };
		}
		return res.json();
	}
}
