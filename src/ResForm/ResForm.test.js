import React from 'react';
import ResForm from './ResForm';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';

describe('ResForm', () => {
	it('Should render the form elements correctly', () => {
		const { getByPlaceholderText } = render(
			<ResForm addReservation={jest.fn()} />
		);

		const nameInput = getByPlaceholderText('name');
		const dateInput = getByPlaceholderText('date');
		const timeInput = getByPlaceholderText('time for reservation');
		const numberInput = getByPlaceholderText('number in party');

		expect(nameInput).toBeInTheDocument();
		expect(dateInput).toBeInTheDocument();
		expect(timeInput).toBeInTheDocument();
		expect(numberInput).toBeInTheDocument();
	})

	it('Should render the form button correctly', () => {
		const { getByLabelText } = render(
			<ResForm addReservation={jest.fn()} />
		);

		const resBtn = getByLabelText('submit-button');

		expect(resBtn).toBeInTheDocument();
	})

	it('Should capture form inputs', () => {
		const submitResRequest = jest.fn();
		const { getByPlaceholderText } = render(
			<ResForm addReservation={jest.fn()} submitResRequest={submitResRequest} />
		);

		const nameInput = getByPlaceholderText('name');
		const dateInput = getByPlaceholderText('date');
		const timeInput = getByPlaceholderText('time for reservation');
		const numberInput = getByPlaceholderText('number in party');

		fireEvent.change(nameInput, {target: {value: 'Steve'}});
		fireEvent.change(dateInput, {target: {value: '08/11'}});
		fireEvent.change(timeInput, {target: {value: '6:00'}});
		fireEvent.change(numberInput, {target: {value: 3}});

		expect(nameInput.value).toBe('Steve');
		expect(dateInput.value).toBe('08/11');
		expect(timeInput.value).toBe('6:00');
		expect(numberInput.value).toBe('3');
	})
})