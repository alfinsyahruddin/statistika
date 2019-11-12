import React from 'react';
import { FaTable, FaChartBar, FaBraille, FaDotCircle } from 'react-icons/fa';

const MenuButton = ({icon, text, onClick}) => {
	return (
		<div className="mt-4 flex flex-row items-center">

				<div className="p-4 bg-white rounded-full z-20 border-4 border-green-500">
				{ (icon === 'table') ? <FaTable color="rgba(38,162,103,1)" size={25} />
				  : (icon === 'chart') ? <FaChartBar color="rgba(38,162,103,1)" size={25} />
				  : (icon === 'dot-circle') ? <FaDotCircle color="rgba(38,162,103,1)" size={25} />
				  : (icon === 'braille') ? <FaBraille color="rgba(38,162,103,1)" size={25} />
				  : ''
				}
				</div>
			<div className="px-2 flex-1" style={{marginLeft: '-40px'}}>
				<button className="bg-green-500 py-2 w-full text-left font-bold rounded-full text-white font-lg focus:outline-none pl-10 hover:shadow-lg" onClick={onClick}>{text}</button>
			</div>
		</div>
	)
}


export default MenuButton