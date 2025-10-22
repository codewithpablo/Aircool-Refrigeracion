// components/UniversityFinanceLineChart.tsx
"use client";

import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
  ChartOptions,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

type Props = {
  labels?: string[];
  gastos?: number[];
  inversiones?: number[];
  className?: string;
};

const currencyFormatter = (value: number) =>
  value.toLocaleString("es-AR", {
    style: "currency",
    currency: "ARS",
    maximumFractionDigits: 0,
  });

export default function FinanceLineChart({
  labels = [
    "Ene",
    "Feb",
    "Mar",
    "Abr",
    "May",
    "Jun",
    "Jul",
    "Ago",
    "Sep",
    "Oct",
    "Nov",
    "Dic",
  ],
  gastos = [
    1200000, 900000, 1100000, 1000000, 950000, 1300000, 1250000, 1150000,
    1050000, 1400000, 1350000, 1500000,
  ],
  inversiones = [
    400000, 600000, 500000, 700000, 650000, 800000, 750000, 700000, 720000,
    850000, 900000, 950000,
  ],
  className = "",
}: Props) {
  const n = Math.max(labels.length, gastos.length, inversiones.length);
  const safeLabels = labels.slice(0, n);
  const safeGastos = gastos.slice(0, n);
  const safeInversiones = inversiones.slice(0, n);

  const data = {
    labels: safeLabels,
    datasets: [
      {
        label: "Gastos",
        data: safeGastos,
        tension: 0.3,
        fill: true,
        backgroundColor: (context: any) => {
          const ctx = context.chart.ctx;
          const gradient = ctx.createLinearGradient(0, 0, 0, 300);
          gradient.addColorStop(0, "rgba(156,163,175,0.2)"); // gris claro
          gradient.addColorStop(1, "rgba(156,163,175,0.02)");
          return gradient;
        },
        borderColor: "rgba(156,163,175,0.9)", // gray-400
        pointRadius: 3,
        pointHoverRadius: 5,
        pointBackgroundColor: "rgba(156,163,175,1)",
        borderWidth: 2,
      },
      {
        label: "Inversiones",
        data: safeInversiones,
        tension: 0.3,
        fill: true,
        backgroundColor: (context: any) => {
          const ctx = context.chart.ctx;
          const gradient = ctx.createLinearGradient(0, 0, 0, 300);
          gradient.addColorStop(0, "rgba(23,37,84,0.25)"); // azul 950 translúcido
          gradient.addColorStop(1, "rgba(23,37,84,0.02)");
          return gradient;
        },
        borderColor: "rgba(23,37,84,0.95)", // blue-950 fuerte
        pointRadius: 3,
        pointHoverRadius: 5,
        pointBackgroundColor: "rgba(23,37,84,1)",
        borderWidth: 2,
      },
    ],
  };

  const options: ChartOptions<"line"> = {
    maintainAspectRatio: false,
    responsive: true,
    interaction: { mode: "index", intersect: false },
    plugins: {
      legend: {
        position: "top",
        labels: { boxWidth: 12, padding: 12 },
      },
      tooltip: {
        enabled: true,
        callbacks: {
          label: (ctx) => {
            const val = ctx.parsed.y ?? 0;
            const label = ctx.dataset.label ?? "";
            return `${label}: ${currencyFormatter(val)}`;
          },
        },
        padding: 10,
        cornerRadius: 6,
      },
      title: {
        display: true,
        text: "Finanzas de la Universidad - Gastos e Inversiones",
        font: { size: 16, weight: "600" },
      },
    },
    scales: {
      x: {
        grid: { display: false },
        ticks: { maxRotation: 0, autoSkip: true },
      },
      y: {
        grid: { borderDash: [4, 4] },
        ticks: {
          callback: (value) => {
            const num = Number(value);
            if (isNaN(num)) return value;
            if (num >= 1_000_000) return `${(num / 1_000_000).toFixed(1)}M`;
            if (num >= 1_000) return `${(num / 1_000).toFixed(0)}k`;
            return num;
          },
        },
      },
    },
  };

  return (
    <div
      className={`bg-white/80 dark:bg-slate-900/60 rounded-2xl p-4 shadow-sm ${className}`}
    >
      <div className="flex items-center justify-between mb-3">
        <div>
          <h3 className="text-lg font-semibold">Resumen financiero</h3>
          <p className="text-sm text-muted-foreground">
            Gastos vs Inversiones (últimos meses)
          </p>
        </div>
        <div className="text-right">
          <div className="text-xs text-muted-foreground">Total Gastos</div>
          <div className="font-medium">
            {currencyFormatter(safeGastos.reduce((a, b) => a + b, 0))}
          </div>
        </div>
      </div>

      <div className="h-[340px]">
        <Line options={options} data={data} />
      </div>

      <div className="mt-3 flex gap-4 text-sm text-muted-foreground">
        <div className="flex items-center gap-2">
          <span className="w-3 h-3 rounded-sm bg-gray-400 inline-block" />
          Gastos
        </div>
        <div className="flex items-center gap-2">
          <span className="w-3 h-3 rounded-sm bg-blue-950 inline-block" />
          Inversiones
        </div>
      </div>
    </div>
  );
}
