export const getAllReservations = async () => {
	const response = await fetch(`http://localhost:3001/api/v1/reservations`);
	const data = await response.json();
	return data;
}

export const submitResRequest = async (givenResInfo) => {
	const request = {
		method: 'POST',
		headers: { 'Content-Type': 'application/json'},
		body: JSON.stringify({
			name: givenResInfo.name,
			date: givenResInfo.date,
			time: givenResInfo.time,
			number: givenResInfo.number
		})
	};
	const response = await fetch(`http://localhost:3001/api/v1/reservations`, request);
	const newRes = await response.json();
	return newRes;
}