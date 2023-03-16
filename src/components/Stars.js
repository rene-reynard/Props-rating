import React from 'react';
import Star from './Star.js'

function Stars(props) {
	const mark = props.count;
	let Stars = [];

	function StarsIncrease(mark) {
		for (let q = 0; q !== mark; q++) {
			Stars[q] = q;
		}
	}

	if (0 < mark && mark < 6) {
		StarsIncrease(mark);
	}

	return (
		Stars.map(star => <Star />)
	);
}

export default Stars;