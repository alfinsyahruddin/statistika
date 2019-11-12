import React, {useState, useContext} from 'react';
import {withRouter} from 'react-router-dom'
import { WithContext as ReactTags } from 'react-tag-input';
import { FaArrowLeft, FaUser, FaUsers } from 'react-icons/fa';
import '../styles/DistribusiFrekuensi.css';
import DFContext from '../contexts/DFContext';
import BottomButton from './BottomButton';

const PenyebaranData = ({history}) => {
	return (
          <>
            <h1 className="text-xl text-green-600 mb-2">
            <button className="focus:outline-none" onClick={() => {
              history.push({
                pathname: '/'
              })
            }}><FaArrowLeft color="#48bb78" style={{display: 'inline-block', marginRight: 4}} /></button> Ukuran Pemusatan Data</h1>
            <hr/>

            <div className="flex flex-row items-center justify-center mt-4">
              <div className="flex-1 flex justify-center items-center">
                <div className="flex justify-center items-center rounded-full w-24 h-24 bg-white shadow-lg" title="Data Tunggal">
                  <FaUser color="rgba(38,162,103,1)" size={40} />
                </div>
              </div>
              <div className="flex-1 flex justify-center items-center">
                <div className="flex justify-center items-center rounded-full w-24 h-24 bg-white shadow-lg" title="Data Kelompok">
                  <FaUsers color="rgba(38,162,103,1)" size={40} />
                </div>
              </div>
             </div>

            <div className="flex flex-row items-center justify-center mt-4">
              <div className="flex-1 flex justify-center items-center">
                <button className="uppercase w-full py-2 bg-green-500 hover:shadow-lg rounded-full font-bold text-sm uppercase mr-2 text-white" title="Data Tunggal" onClick={() => {
                  history.push({
                    pathname: '/pemusatan_data/tunggal'
                  })
                }}>tunggal</button>
              </div>
              <div className="flex-1 flex justify-center items-center">
                <button className="uppercase w-full py-2 bg-green-500 hover:shadow-lg rounded-full font-bold text-sm uppercase ml-2 text-white" title="Data Kelompok" onClick={() => {
                  history.push({
                    pathname: '/pemusatan_data/kelompok'
                  })
                }}>kelompok</button>
              </div>
             </div>



      		</>
	)
}


export default withRouter(PenyebaranData)