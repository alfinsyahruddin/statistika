import React from 'react';
import '../styles/DistribusiFrekuensi.css';
import {withRouter} from 'react-router-dom'
import MenuButton from './MenuButton';
import '../styles/Home.css'

const Home = ({history}) => {
	const goTo = (path) => {
		history.push({
			pathname: '/'+path
		})
	}


	return (
		<>
			<h1 className="text-xl text-green-700 text-center text-line"><span>Silahkan pilih</span></h1>
			<MenuButton icon="table" text="DISTRIBUSI FREKUENSI" onClick={() => goTo('distribusi_frekuensi')} />
			<MenuButton icon="chart" text="MEMBUAT DIAGRAM" onClick={() => goTo('diagram_generator')}/>
        </>
    )
}


export default withRouter(Home)