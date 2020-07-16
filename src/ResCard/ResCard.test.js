import React from 'react';
import ResCard from './ResCard';
import { render, fireEvent } from '@testing-library/react';
import { getAllReservations, submitResRequest } from '../apiCalls/apiCalls';
import '@testing-library/jest-dom';
jest.mock('../apiCalls/apiCalls');

describe('ResForm', () => {
	it('Should render the reservation cards with the correct info', () => {
		const mockInfo = {id: 1, name: 'Jeff', date: '4/20', time: '8:00', number: 2};
		const { getByText, getByLabelText } = render(
			<ResCard resInfo={mockInfo} />
		);

		const resName = getByText('Jeff');
		const resDate = getByText('4/20');
		const resTime = getByText('8:00 pm');
		const resGuests = getByText('Number of guests: 2');
		const cancelBtn = getByLabelText('cancel-button');

		expect(resName).toBeInTheDocument();
		expect(resDate).toBeInTheDocument();
		expect(resTime).toBeInTheDocument();
		expect(resGuests).toBeInTheDocument();
		expect(cancelBtn).toBeInTheDocument();
	})
})