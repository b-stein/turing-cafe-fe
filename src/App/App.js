import React, { Component } from 'react';
import './App.css';
import ResCard from '../ResCard/ResCard';
import ResForm from '../ResForm/ResForm';

class App extends Component {
	constructor() {
		super();
		this.state = {
			reservations: [],
			error: null
		};
	}

	componentDidMount = async () => {
		try {
			const data = await this.getAllReservations();
			this.setState({reservations: data})
		} catch (error) {
			this.setState({error});
		}
	}

	addReservation = async (newRes) => {
		console.log(this.state.reservations);
		await this.setState({ reservations: [...this.state.reservations, newRes] });
	}

	getAllReservations = async () => {
		const response = await fetch(`http://localhost:3001/api/v1/reservations`);
		const data = await response.json();
		return data;
	}

  render() {
    return (
      <div className="App">
        <h1 className='app-title'>Turing Cafe Reservations</h1>
        <div className='resy-form'>
					<ResForm addReservation={this.addReservation} />
        </div>
        <div className='resy-container'>
        {this.state.reservations.map(res => {
					return <ResCard resInfo={res} key={res.date} />
				})}
        </div>
      </div>
    )
  }
}

export default App;
