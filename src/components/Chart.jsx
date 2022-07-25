import React from "react";
import { Line } from "react-chartjs-2";
import "chartjs-adapter-date-fns";
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Title,
  TimeScale,
} from "chart.js";
import jsData from "../stackline_frontend_assessment_data_2021.json";
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  TimeScale
);

const Chart = () => {
  const info = jsData[0].sales;
  const date = [];
  const retailSale = [];
  const wholesaleSales = [];
  info.forEach((i) => {
    date.push(i.weekEnding);
    retailSale.push(i.retailSales);
    wholesaleSales.push(i.wholesaleSales);
  });

  //   console.log(date);

  const data = {
    labels: date,
    datasets: [
      {
        data: retailSale,
        backgroundColor: "transparent",
        borderColor: "#f26c6d",
        pointBorderColor: "transparent",
        pointBorderWidth: 4,
        tension: 0.4,
      },

      {
        data: wholesaleSales,
        backgroundColor: "transparent",
        borderColor: "#36a2eb",
        pointBorderColor: "transparent",
        pointBorderWidth: 4,
        tension: 0.4,
      },
    ],
  };
  const options = {
    plugins: {
      title: {
        text: "Retail Sales",
        display: true,
      },
    },
    scales: {
      x: {
        type: "time",
        time: {
          displayFormats: {
            month: "MMM",
          },
        },
        grid: {
          display: false,
        },
      },

      y: {
        display: false,
        beginAtZero: true,
        max: 2000000,
        grid: {
          display: false,
        },
      },
    },
  };

  return (
    <div
      style={{
        width: "1000px",
        height: "500px",
        marginTop: "80px",
        marginLeft: "150px",
      }}
    >
      <Line data={data} options={options} />
    </div>
  );
};

export default Chart;
