import React, {useState, useEffect, useContext} from 'react';
import DiagramContext from '../contexts/DiagramContext'
import '../styles/DistribusiFrekuensi.css';
import {withRouter} from 'react-router-dom'
import BottomButton from './BottomButton';
import BarChart from './charts/BarChart'
import LineChart from './charts/LineChart'
import PieChart from './charts/PieChart'

const ChartDiagramGenerator = ({history}) => {
	const DiagramConsumer = useContext(DiagramContext);
	const [labels, setLabels] = useState([])
	const [data, setData] = useState([])
	const getChartData = (data) => {
		let labels = data.map((value, key) => {
			return value.label
		})
		let dataChart = data.map((value, key) => {
			return Number(value.nilai)
		})
		return {labels: labels, data: dataChart}
	}

	useEffect(() => {
		const DiagramData = DiagramConsumer.state.Diagram.data;
		setLabels(getChartData(DiagramData).labels)
		setData(getChartData(DiagramData).data)
	}, [])
	return (
		<>
			<h1 className="text-xl text-green-700 mb-2">Diagram</h1>
			<hr />
			<BarChart labels={labels} chartData={data} />
			<LineChart labels={labels} chartData={data} />
			<PieChart labels={labels} chartData={data} />

            <BottomButton titleLeft="Kembali" pathLeft="/diagram_generator" btnRight={false} />
       </>
    )
}


export default withRouter(ChartDiagramGenerator)
