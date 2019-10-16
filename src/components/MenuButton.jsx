import React from 'react';
import { FaTable, FaChartBar } from 'react-icons/fa';

const MenuButton = ({icon, text, onClick}) => {
	return (
		<div className="mt-4">
		<div className="flex justify-center my-2">
			<div className="p-6 bg-white shadow-lg hover:shadow-xl rounded-full mb-4">
			{ (icon === 'table') ? <FaTable color="rgba(38,162,103,1)" size={40} />
			  : (icon === 'chart') ? <FaChartBar color="rgba(38,162,103,1)" size={40} />
			  : ''
			}
			</div>
		</div>
		<div className="flex justify-center px-2 mt-2">
			<button className="bg-green-500 py-2 w-full text-center font-bold rounded-full text-white shadow-md font-lg focus:outline-none hover:shadow-lg" onClick={onClick}>{text}</button>
		</div>
		</div>
	)
}


export default MenuButton