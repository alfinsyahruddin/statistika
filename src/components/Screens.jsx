import React, {useState, lazy, Suspense} from 'react'
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import Loading from './Loading';

import {DFProvider} from '../contexts/DFContext';
import {PDProvider} from '../contexts/PDContext';
import {DiagramProvider} from '../contexts/DiagramContext';
import Home from './Home';
// LAZY LOAD COMPONENT
const DistribusiFrekuensi  				= lazy(() => import('./DistribusiFrekuensi'));
const ResultDistribusiFrekuensi 		= lazy(() => import('./ResultDistribusiFrekuensi'));

const ChartDistribusiFrekuensi  		= lazy(() => import('./ChartDistribusiFrekuensi'));
const DiagramGenerator  				= lazy(() => import('./DiagramGenerator'));
const ChartDiagramGenerator 			= lazy(() => import('./ChartDiagramGenerator'));
const ChartDiagramGenerator2  			= lazy(() => import('./ChartDiagramGenerator2'));

const PemusatanData  					= lazy(() => import('./PemusatanData'));
const PemusatanDataTunggal  			= lazy(() => import('./PemusatanDataTunggal'));
const PemusatanDataKelompok  			= lazy(() => import('./PemusatanDataKelompok'));
const ResultPemusatanDataTunggal		= lazy(() => import('./ResultPemusatanDataTunggal'));
const ResultPemusatanDataKelompok		= lazy(() => import('./ResultPemusatanDataKelompok'));


const Screens = () => {
	const LS_DF = JSON.parse(localStorage.getItem('DF'))
	const LS_PD = JSON.parse(localStorage.getItem('PD'))
	const LS_Diagram = JSON.parse(localStorage.getItem('Diagram'))
	const [DF, setDF] = useState(LS_DF === null ? {data: [], info: {}} : LS_DF)
	const [PD, setPD] = useState(LS_PD === null ? {data: []} : LS_PD)
	const [Diagram, setDiagram] = useState(LS_Diagram === null ? {data: []} : LS_Diagram)

	const dispatch_df = (action) => {
		switch (action.type) {
			case 'UPDATE_DF':
				localStorage.setItem('DF', JSON.stringify(action.payload))
				return setDF(action.payload)
			default:
				return DF
		}
	}
	const dispatch_pd = (action) => {
		switch (action.type) {
			case 'UPDATE_PD':
				localStorage.setItem('PD', JSON.stringify(action.payload))
				return setPD(action.payload)
			default:
				return PD
		}
	}
	const dispatch_diagram = (action) => {
		switch (action.type) {
			case 'UPDATE_DIAGRAM':
				localStorage.setItem('Diagram', JSON.stringify(action.payload))
				return setDiagram(action.payload)
			default:
				return Diagram
		}
	}

	return (
		<>
		<BrowserRouter>
				<DFProvider value={
					{
						state: {
							DF,
						},
						dispatch: dispatch_df
					}
				}>
				<DiagramProvider value={
					{
						state: {
							Diagram,
						},
						dispatch: dispatch_diagram
					}
				}>
				<PDProvider value={
					{
						state: {
							PD,
						},
						dispatch: dispatch_pd
					}
				}>
					<div className="p-4">
					<Switch>
						<Route exact path="/" component={Home} />
						<Route exact path="/distribusi_frekuensi" component={WaitingComponent(DistribusiFrekuensi)} />
						<Route exact path="/distribusi_frekuensi/result" component={WaitingComponent(ResultDistribusiFrekuensi)}/>
						<Route exact path="/distribusi_frekuensi/chart" component={WaitingComponent(ChartDistribusiFrekuensi)}/>
						<Route exact path="/diagram_generator" component={WaitingComponent(DiagramGenerator)} />
						<Route exact path="/diagram_generator/chart" component={WaitingComponent(ChartDiagramGenerator)} />
						<Route exact path="/diagram_generator/chart_2" component={WaitingComponent(ChartDiagramGenerator2)} />

						<Route exact path="/pemusatan_data" component={WaitingComponent(PemusatanData)} />
						<Route exact path="/pemusatan_data/tunggal" component={WaitingComponent(PemusatanDataTunggal)} />
						<Route exact path="/pemusatan_data/kelompok" component={WaitingComponent(PemusatanDataKelompok)} />
						<Route exact path="/pemusatan_data/tunggal/result" component={WaitingComponent(ResultPemusatanDataTunggal)} />
						<Route exact path="/pemusatan_data/kelompok/result" component={WaitingComponent(ResultPemusatanDataKelompok)} />

					</Switch>
					</div>
				</PDProvider>
				</DiagramProvider>
				</DFProvider>
		</BrowserRouter>
      </>
	)
}

function WaitingComponent(Component) {
  return props => (
    <Suspense fallback={<Loading />}>
      <Component {...props} />
    </Suspense>
  );
}

export default Screens;