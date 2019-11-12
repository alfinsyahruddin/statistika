import React from 'react';
import {withRouter} from 'react-router-dom'
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

const BottomButton = ({history, titleLeft, titleRight, pathLeft, leftFunc, rightFunc, btnLeft, btnRight}) => {
	return (
            <div className="mt-4 flex flex-row justify-between">
                <button className="text-green-500 bg-white shadow-md rounded-full font-lg py-2 px-4 focus:outline-none hover:shadow-lg" onClick={() => {
                   console.log(leftFunc)
                    if (leftFunc !== undefined) {
                        leftFunc()
                    } else {
                        history.push({
                            pathname: pathLeft,
                        })
                    }
                }} style={{
                    visibility: btnLeft !== false ? 'visible' : 'hidden'
                }}>
                    <FaArrowLeft color="#48bb78" style={{display: 'inline-block', marginRight: 4}} /> {titleLeft}
                </button>
                <button className="bg-green-500 text-white shadow-md rounded-full font-lg py-2 px-4 focus:outline-none hover:shadow-lg" onClick={rightFunc} style={{
                    visibility: btnRight !== false ? 'visible' : 'hidden'
                }}>
                    {titleRight} <FaArrowRight color="#fff" style={{display: 'inline-block', marginLeft: 4}} />
                </button>
            </div>
    )
}


export default withRouter(BottomButton);