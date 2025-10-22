"use client";

import { Doughnut } from "react-chartjs-2";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

const DonutChart = () => {
  const hombres = 30;
  const mujeres = 45;
  const total = hombres + mujeres;

  const data = {
    labels: ["Hombres", "Mujeres"],
    datasets: [
      {
        label: "Hombres",
        data: [hombres, total - hombres],
        backgroundColor: ["#CCD5AE", "#CCD5AE33"], // verde suave y su versión translúcida
        borderWidth: 0,
        weight: 1,
      },
      {
        label: "Mujeres",
        data: [mujeres, total - mujeres],
        backgroundColor: ["#E9EDC9", "#E9EDC933"], // verde claro y su versión translúcida
        borderWidth: 0,
        weight: 1,
      },
    ],
  };

  const options = {
    cutout: "70%",
    rotation: -90,
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        callbacks: {
          label: function (tooltipItem: any) {
            return (
              tooltipItem.dataset.label +
              ": " +
              tooltipItem.parsed +
              " estudiantes"
            );
          },
        },
      },
    },
  };

  return (
    <div className="flex flex-col items-center justify-center gap-2 h-full p-8">
      <Doughnut data={data} options={options} />
      <div className="flex justify-center gap-6 mt-2 text-gray-800 text-sm">
        <div className="whitespace-nowrap flex items-center gap-1">
          <span className="w-4 h-4 rounded-full" style={{ backgroundColor: "#CCD5AE" }}></span>
          <span>Hombres: {hombres}</span>
        </div>
        <div className="whitespace-nowrap flex items-center gap-1">
          <span className="w-4 h-4 rounded-full" style={{ backgroundColor: "#E9EDC9" }}></span>
          <span>Mujeres: {mujeres}</span>
        </div>
      </div>
    </div>
  );
};

export default DonutChart;
