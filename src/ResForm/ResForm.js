import React, { Component } from 'react';
import './ResForm.css';
import { submitResRequest } from "../apiCalls/apiCalls";

class ResForm extends Component {
	constructor(props) {
		super(props);
		this.state = {
			name: '',
			date: '',
			time: '',
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
			const newRes = await submitResRequest(this.state);
			this.props.addReservation(newRes);
			this.setState({name: '', date: '', time: 0, number: ''});
		} catch (error) {
			this.setState({error});
		}
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
					type='name' 
					name='date'
					aria-label='date-input' 
					placeholder='date' 
					value={this.state.date} 
					onChange={(event) => this.handleChange(event)}
					required
				/>
				<input 
					type='name' 
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