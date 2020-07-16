import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { render, waitFor, fireEvent } from '@testing-library/react';
import { getAllReservations, submitResRequest } from '../apiCalls/apiCalls';
import '@testing-library/jest-dom';
jest.mock('../apiCalls/apiCalls');

describe('App', () => {
	getAllReservations.mockResolvedValue([
		{
			"id": 1,
			"name": "Christie",
			"date": "12/29",
			"time": "7:00",
			"number": 12
		}	
	])

	it('renders without crashing', () => {
		const div = document.createElement('div');
		ReactDOM.render(<App />, div);
		ReactDOM.unmountComponentAtNode(div);
	});

	it('Should be able to fill out and submit reservation form, then reservation populates the page', async () => {		
		submitResRequest.mockResolvedValue({
			"id": 1594921475328,
			"name": "Becca",
			"date": "08/10",
			"time": "4:00",
			"number": 2
		})

		const { getByText, getByLabelText, getByPlaceholderText } = render(<App />);

		const nameInput = getByPlaceholderText('name');
		const dateInput = getByPlaceholderText('date');
		const timeInput = getByPlaceholderText('time for reservation');
		const numberInput = getByPlaceholderText('number in party');
		const resBtn = getByLabelText('submit-button');

		fireEvent.change(nameInput, {target: {value: 'Becca'}});
		fireEvent.change(dateInput, {target: {value: '08/10'}});
		fireEvent.change(timeInput, {target: {value: '4:00'}});
		fireEvent.change(numberInput, {target: {value: 2}});

		fireEvent.click(resBtn);

		const resName = await waitFor(() => getByText('Becca'));
		const resDate = await waitFor(() => getByText('08/10'));
		const resTime = await waitFor(() => getByText('4:00 pm'));
		const resGuests = await waitFor(() => getByText('Number of guests: 2'));

		expect(resName).toBeInTheDocument();
		expect(resDate).toBeInTheDocument();
		expect(resTime).toBeInTheDocument();
		expect(resGuests).toBeInTheDocument();
	})
})