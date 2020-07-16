import React, { Component } from 'react';
import './ResForm.css';

class ResForm extends Component {
	constructor(props) {
		super(props);
		this.state = {
			name: '',
			date: '',
			time: 0,
			number: '',
			error: null
		}
	}

	handleChange = (event) => {
		this.setState({ [event.target.name]: event.target.value });
	}

	submitRes = async (event) => {
		event.preventDefault();
		try {
			console.log(this.props);
			const newRes = await this.submitResRequest(this.state);
			this.props.addReservation(newRes);
			this.setState({name: '', date: '', time: 0, number: ''});
		} catch (error) {
			this.setState({error});
		}
	}

	submitResRequest = async (givenResInfo) => {
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

	render() {
		return (
			<>
				<input 
					type='name' 
					name='name'
					aria-label='name-input' 
					placeholder='name' 
					value={this.state.name} 
					onChange={(event) => this.handleChange(event)}
					required
				/>
				<input 
					type='date' 
					name='date'
					aria-label='date-input' 
					placeholder='date' 
					value={this.state.date} 
					onChange={(event) => this.handleChange(event)}
					required
				/>
				<input 
					type='time' 
					name='time'
					aria-label='time-input' 
					placeholder='time for reservation' 
					value={this.state.time} 
					onChange={(event) => this.handleChange(event)}
					required
				/>
				<input 
					type='name' 
					name='number'
					aria-label='number-input' 
					placeholder='number in party' 
					value={this.state.number} 
					onChange={(event) => this.handleChange(event)}
					required
				/>

				<button
					aria-label='submit-button'
					className='res-btn'
					onClick={(event) => this.submitRes(event)}
				>
					Make Reservation
				</button>
			</>
		)
	}
}

export default ResForm;