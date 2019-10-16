import React from 'react';
import { Line } from 'react-chartjs-2';

const LineChart = ({labels, chartData}) => {
  const data = {
    labels: labels,
    datasets: [
      {
        fill: false,
        lineTension: 0.1,
        backgroundColor: 'rgba(38,162,103, 0.8)',
        borderColor: 'rgba(38,162,103,1)',
        borderCapStyle: 'butt',
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: 'miter',
        pointRadius: 5,
        pointBorderWidth: 2,
        pointHitRadius: 10,
        pointBorderColor: 'rgba(38,162,103,1)',
        pointBackgroundColor: 'rgba(38,162,103,1)',
        pointHoverBorderWidth: 2,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgba(38,162,103,1)',
        data: chartData,
      }
    ],
  };

const options = {
    legend: {
      display: false
    },
    tooltips: {
        callbacks: {
           label: function(tooltipItem) {
                  return tooltipItem.yLabel;
           }
        }
    },
    scales: {
        yAxes: [{
            ticks: {
                beginAtZero: true
            }
        }]
    }
}

	return (
      <div className="mt-2">
        <h3 className="mb-2 text-gray-700">Diagram Garis</h3>
  			<Line data={data} height={250} options={options} />
      </div>
    )
}


export default LineChart
