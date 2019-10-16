import React, {useState, useEffect, useContext} from 'react';
import DiagramContext from '../contexts/DiagramContext'
import '../styles/DistribusiFrekuensi.css';
import {withRouter} from 'react-router-dom'
import BottomButton from './BottomButton';
import BarChart from './charts/BarChart'
import LineChart from './charts/LineChart'
import PieChart from './charts/PieChart'
import Histogram from './charts/Histogram'
import Polygon from './charts/Polygon'
import Ogive from './charts/Ogive'


const ChartDiagramGenerator = ({history}) => {
	const DiagramConsumer = useContext(DiagramContext);
	const [chartData, setChartData] = useState([])

	const getChartData = (data) => {
		let labels = data.map((value, key) => {
			return value.from+"-"+value.to
		})
		let titikTengah = data.map((value, key) => {
			return Number(value.nilai)
		})
		let tepiAtas = data.map((value, key) => {
			return value.to+0.5
		})
		let dataChart = data.map((value, key) => {
			return Number(value.nilai)
		})
		let dataOgive = data.map((value, key) => {
			if (key>0) {
				let num = data.filter((d,i) => i<=key).reduce((acc, cur, i) => {
					return acc + Number(cur.nilai)
				}, 0)
				return num
			} else {
				return Number(value.nilai);
			}
		})
		return {labels, data: dataChart, titikTengah, tepiAtas, dataOgive}
	}

	useEffect(() => {
			const DiagramData = DiagramConsumer.state.Diagram.data;
		  setChartData(getChartData(DiagramData))
	}, [])
	return (
		<>
			<h1 className="text-xl text-green-700 mb-2">Diagram</h1>
			<hr />
			<BarChart labels={chartData.labels} chartData={chartData.data} />
			<LineChart labels={chartData.labels} chartData={chartData.data} />
			<PieChart labels={chartData.labels} chartData={chartData.data} />
			<Histogram labels={chartData.titikTengah} chartData={chartData.data} />
			<Polygon labels={chartData.titikTengah} chartData={chartData.data} />
			<Ogive labels={chartData.tepiAtas} chartData={chartData.dataOgive} />

            <BottomButton titleLeft="Kembali" pathLeft="/diagram_generator" btnRight={false} />
       </>
    )
}


export default withRouter(ChartDiagramGenerator)
