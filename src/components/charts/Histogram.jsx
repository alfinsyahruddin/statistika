import React from 'react';
import { Bar } from 'react-chartjs-2';

const Histogram = ({labels, chartData}) => {
  const data = {
    labels: labels,
    datasets: [
      {
        fill: false,
        lineTension: 0.1,
        backgroundColor: 'rgba(38,162,103, 0.4)',
        borderColor: 'rgba(38,162,103,1)',
        borderWidth: 1,
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
      xAxes: [{
        gridLines: {
            offsetGridLines: true
        },
        display: false,
        barPercentage: 1.3,
     }, {
        display: true,
        ticks: {
            autoSkip: false,
          max: 4,
        }
      }],
      yAxes: [{
        ticks: {
          beginAtZero:true
        },
      }]
    }
     
}

  return (
      <div className="mt-2">
        <h3 className="mb-2 text-gray-700">Histogram</h3>
        <Bar data={data} height={250} options={options} />
      </div>
    )
}


export default Histogram
