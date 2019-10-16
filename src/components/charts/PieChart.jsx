import React from 'react';
import { Pie } from 'react-chartjs-2';
import 'chart.piecelabel.js';

const PieChart = ({labels, chartData}) => {
  const data = {
    labels: labels,
    datasets: [
      {
        fill: false,
        lineTension: 0.1,
        backgroundColor: ['rgba(255,219,0,0.7)', 'rgba(255,109, 217 ,0.7)', 'rgba(0,174,255,0.7)', 'rgba(38,162,103, 0.7)', 'rgba(255,33,37,0.7)', 'rgba(164,67,255,0.7)', 'rgba(255, 109, 53, 0.7)', 'rgba(23, 192, 120, 0.7)'],
        borderWidth: 0,
        borderCapStyle: 'butt',
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: 'miter',
        data: chartData,
      }
    ],
  };

const options = {
    legend: {
      position: 'bottom',
    },
    scales: {
        yAxes: [{
            ticks: {
                beginAtZero: true
            }
        }]
        },
    tooltips: {
      callbacks: {
        label: function(tooltipItem, data) {
          //get the concerned dataset
          var dataset = data.datasets[tooltipItem.datasetIndex];
          //calculate the total of this data set
          var total = dataset.data.reduce(function(previousValue, currentValue, currentIndex, array) {
            return previousValue + currentValue;
          });
          //get the current items value
          var currentValue = dataset.data[tooltipItem.index];
          //calculate the precentage based on the total and current item, also this does a rough rounding to give a whole number
          var percentage = Math.floor(((currentValue/total) * 100)+0.5);

          return currentValue + " (" + percentage + "%)";
        }
      }
    },
    pieceLabel: {
       render: true,
       color: '#fff',
    }


}

  return (
      <div className="mt-2">
        <h3 className="mb-2 text-gray-700">Diagram Lingkaran</h3>
        <Pie data={data} height={250} options={options} />
      </div>
    )
}


export default PieChart
