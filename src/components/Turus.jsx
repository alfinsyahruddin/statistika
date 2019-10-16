import React from 'react';
import '../assets/fonts/tally-mark.ttf';
import '../styles/turus.css';

const Turus = ({number}) => {
	const write = (n) => {
		let text = '';
		for (let x=0; x<=n; x+=5) {
			if (x !== 0) {
				text += 'e';
			} 
		} 
		for (let y=1; y<=n%5; y++) {
			text += 'a';
		} 
		return text;
	}
	return (
		<span className="turus_format">{write(number)}</span>
	)
}

export default Turus;