import React from "react";
import { generateDummyRecords, getMostFrequent,getFrequentTimeStamps} from "../helpers/helper";
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
} from "chart.js";
import { Bar, Line } from "react-chartjs-2";
import {
  barChartoptions,
  lineChartoptions,
  timeStampBarChartoptions,
  timeStampLineChartoptions,
} from "../constants/constants";

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
  const filteredApiData = generateDummyRecords().filter((el) =>
    el.Timestamp.includes("2021-01-01")
  );

  const {values,labels,label}= getMostFrequent(filteredApiData);

  const data = {
    labels,
    datasets: [
      {
        label: label,
        data: values,
        borderColor: "rgb(53, 162, 235)",
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
    ],
  };

  const {timeStampValues,timeStampChartlabels,timeStampLabels}= getFrequentTimeStamps(filteredApiData);

  const timedata = {
    labels: timeStampChartlabels,
    datasets: [
      {
        label: timeStampLabels,
        data: timeStampValues,
        borderColor: "rgb(53, 162, 235)",
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
    ],
  };

  return (
    <div className="charts-container">
      <div>
        <h3>
          Below chart signifies the highest number of page views in Bar Chart
        </h3>
        <Bar options={barChartoptions} data={data} />
      </div>
      <div>
        <h3>
          Below chart signifies the highest number of page views in Line Chart
        </h3>
        <Line options={lineChartoptions} data={data} />
      </div>

      <div>
        <h3>
          Below chart signifies the highest number of users in given time in Bar
          Chart
        </h3>
        <Bar options={timeStampBarChartoptions} data={timedata} />
      </div>
      <div>
        <h3>
          Below chart signifies the highest number of users in given time in Line
          Chart
        </h3>
        <Line options={timeStampLineChartoptions} data={timedata} />
      </div>
    </div>
  );
};

export default ChartComponent;
