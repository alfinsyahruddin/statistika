import React from 'react';
import '../styles/Loading.css'
import { css } from '@emotion/core';
import ScaleLoader from 'react-spinners/ScaleLoader';

const Loading = () => {
	return (
		<div id="loading-screen">
	 		<ScaleLoader
	          height={50}
	          width={7}
	          radius={0}
	          loading={true}
	          color="rgba(38,162,103,1)"
	        />
		</div>
	)
}

export default Loading;