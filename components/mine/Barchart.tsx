"use client";

import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

// Registrar los elementos de Chart.js
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const BarChart = () => {
  const presentes = [20, 18, 22, 19, 21];
  const ausentes = [5, 7, 3, 6, 4];

  const data = {
    labels: ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes"],
    datasets: [
      {
        label: "Presentes",
        data: presentes,
        backgroundColor: "#FAEDCD", // beige
        borderRadius: 10,
      },
      {
        label: "Ausentes",
        data: ausentes,
        backgroundColor: "#D4A373", // marrón suave
        borderRadius: 10,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
      title: {
        display: true,
        text: "Asistencia de alumnos",
        font: {
          size: 18,
          weight: "light",
        },
      },
      tooltip: {
        mode: "index",
        intersect: false,
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        title: {
          display: true,
        },
        ticks: {
          color: "#6B7280", // gris medio para contraste
        },
      },
      x: {
        title: {
          display: true,
          text: "Días",
        },
        ticks: {
          color: "#6B7280",
        },
      },
    },
  };

  return (
    <div className="flex flex-col items-center gap-2 h-full rounded-3xl justify-center p-4">
      <div className="w-full flex-1 flex justify-center">
        <Bar data={data} options={options} />
      </div>

      {/* Leyenda personalizada */}
      <div className="flex justify-center gap-6 mt-2 text-gray-800 text-sm">
        <div className="flex items-center gap-1">
          <span
            className="w-4 h-4 rounded-full"
            style={{ backgroundColor: "#FAEDCD" }}
          ></span>
          <span>Presentes</span>
        </div>
        <div className="flex items-center gap-1">
          <span
            className="w-4 h-4 rounded-full"
            style={{ backgroundColor: "#D4A373" }}
          ></span>
          <span>Ausentes</span>
        </div>
      </div>
    </div>
  );
};

export default BarChart;
