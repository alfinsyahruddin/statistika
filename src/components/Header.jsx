import React from 'react';
import ChartIcon from '../assets/icons/icon.png';

const Header = () => {
	return (
		<div className="bg-green-500 shadow-lg px-4 pt-2 sticky top-0 select-none pointer-events-none z-40">
			<img src={ChartIcon} className="inline-block w-8 mb-4 mr-2" alt="Logo Cheatistics" />
			<h1 className="inline-block text-white text-2xl font-bold uppercase">STATISTIKA</h1>
		</div>
	)
}

export default Header;