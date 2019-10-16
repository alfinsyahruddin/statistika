import React from 'react';
import '../styles/DistribusiFrekuensi.css';
import TabelDistribusiFrekuensi from './TabelDistribusiFrekuensi';
import InfoDistribusiFrekuensi from './InfoDistribusiFrekuensi';
import {withRouter} from 'react-router-dom'
import BottomButton from './BottomButton';

const ResultDistribusiFrekuensi = ({history}) => {
	return (
		<>
			<h1 className="text-xl text-green-700">Hasil Distribusi Frekuensi</h1>
            <TabelDistribusiFrekuensi />
            <InfoDistribusiFrekuensi />
            <BottomButton titleLeft="Kembali" pathLeft="/distribusi_frekuensi" titleRight="Diagram" rightFunc={() => {
		      history.push({
		        pathname: '/distribusi_frekuensi/chart'
		      })
            }} />
        </>
    )
}


export default withRouter(ResultDistribusiFrekuensi)