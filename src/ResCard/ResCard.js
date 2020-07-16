import React from 'react';
import './ResCard.css';

const ResCard = ({resInfo}) => {

	return (
		<section className='res-card'>
			<h1>{resInfo.name}</h1>
			<p>{resInfo.date}</p>
			<p>{resInfo.time} pm</p>
			<p>Number of guests: {resInfo.number}</p>
			<button aria-label='cancel-button'>Cancel</button>
		</section>

	)
}

export default ResCard;