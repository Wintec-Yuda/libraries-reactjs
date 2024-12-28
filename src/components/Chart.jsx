// src/Chart.js
import React from 'react';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

// Register Chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const Chart = () => {
  // Data untuk grafik
  const data = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June'],
    datasets: [
      {
        label: 'My First Dataset',
        data: [65, 59, 80, 81, 56, 55],
        borderColor: 'rgba(75, 192, 192, 1)',
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        fill: true,
      },
    ],
  };

  // Opsi untuk grafik
  const options = {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: 'Chart.js Example in React',
      },
    },
  };

  return (
    <div className="p-6 max-w-3xl mx-auto bg-white shadow-xl rounded-lg">
      <h2 className="text-3xl font-semibold text-center text-gray-800 mb-4">Chart.js in React</h2>
      <div className="bg-gray-100 p-4 rounded-md shadow-md">
        <Line data={data} options={options} />
      </div>
    </div>
  );
};

export default Chart;
