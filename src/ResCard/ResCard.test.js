import React from 'react';
import ResCard from './ResCard';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';

describe('ResForm', () => {
	it('Should render the reservation cards with the correct info', () => {
		const mockInfo = {id: 1, name: 'Jeff', date: '4/20', time: '8:00', number: 2};
		const { getByText } = render(
			<ResCard resInf={mockInfo} />
		);

		const resName = getByText('Christie');
		// const dateInput = getByText('date');
		// const timeInput = getByText('time for reservation');
		// const numberInput = getByText('number in party');

		expect(resName).toBeInTheDocument();
		// expect(dateInput).toBeInTheDocument();
		// expect(timeInput).toBeInTheDocument();
		// expect(numberInput).toBeInTheDocument();
	})
})