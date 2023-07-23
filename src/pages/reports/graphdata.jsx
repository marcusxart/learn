import { Line } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";

const GraphChart = ({ width, height }) => {
  const days = ["Mon", "Tues", "Wed", "Thur", "Fri", "Sat", "Sun"];

  const barChartData = {
    labels: days,
    datasets: [
      {
        label: "",
        fill: false,
        // backgroundColor: ,
        borderColor: "rgba(33, 213, 155, 1)",
        borderCapStyle: "round",
        borderJoinStyle: "miter",
        tension: 0.4,
        pointBorderColor: "rgba(0, 194, 194, 1)",
        pointBackgroundColor: "#fff",
        pointBorderWidth: 0.5,
        pointHoverRadius: 10,
        pointHoverBackgroundColor: "rgba(0, 194, 194, 1)",
        pointHoverBorderColor: "rgba(255, 255, 255, 0.8)",
        pointHoverBorderWidth: 8,
        pointRadius: 0,
        pointHitRadius: 10,
        data: [200, 180, 300, 250, 450, 150, 300],
      },
    ],
  };

  const barChartOptions = {
    responsive: true,
    layout: {
      padding: 10,
    },
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        usePointStyle: true,
        backgroundColor: "#00C2C2",
        bodyColor: "rgba(0, 0, 0, 1)",
        titleColor: "rgba(0, 0, 0, 0.6)",
        titleAlign: "center",
        bodyAlign: "center",
        footerAlign: "center",
        yAlign: "bottom",
        caretPadding: 15,
        boxWidth: 100,
        displayColors: false,
        titleMarginBottom: 10,
        titleSpacing: 15,
        callbacks: {},
      },
    },
    scales: {
      x: {
        // type: "category",
        ticks: {
          color: "rgba(173, 178, 178, 1)",
          fontSize: 12,
        },
        grid: {
          lineWidth: 1,
          display: false,
        },
      },
      y: {
        display: true,
        beginAtZero: true,
        grid: {
          display: true,
        },
        ticks: {
          color: "rgba(173, 178, 178, 1)",
          fontSize: 12,
          display: false,
        },
      },
    },

    animation: {
      easing: "linear",

      y: {
        duration: 2000,
        from: 500,
      },
    },
  };

  return (
    <>
      <Line
        data={barChartData}
        options={barChartOptions}
        height={height}
        width={width}
      />
    </>
  );
};
export default GraphChart;
