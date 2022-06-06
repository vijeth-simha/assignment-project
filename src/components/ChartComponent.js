import React from 'react'
import { generateDummyRecords } from '../helpers/helper'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar ,Line} from 'react-chartjs-2';
import { barChartoptions, lineChartoptions } from '../constants/constants';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);


const ChartComponent = () => {
  let values,chartLabels;
  const filteredApiData = generateDummyRecords().filter(el=>el.Timestamp.includes("2021-01-01"));
  
  
function getMostFrequent(arr) {
    const hashmap = arr.reduce( (acc, val) => {
      acc[val.pageTitle] = (acc[val.pageTitle] || 0 ) + 1
      return acc
    },{})
    values =hashmap;
    chartLabels= Object.keys(hashmap);
    return Object.keys(hashmap).reduce((a, b) => hashmap[a] > hashmap[b] ? a : b)
 }

 const labels = chartLabels;
 const label = getMostFrequent(filteredApiData);

 const data = {
  labels,
  datasets: [
    {
      label: label,
      data: values,
      borderColor: 'rgb(53, 162, 235)',
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
    },
  ],
};

return (
  <div className="charts-container">
    <Bar options={barChartoptions} data={data} />
    <Line options={lineChartoptions} data={data} />
  </div>
)
}

export default ChartComponent