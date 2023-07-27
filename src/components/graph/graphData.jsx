import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement);

function GraphData({ height, width }) {
  const labels = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  const options = {
    responsive: true,
    plugins: {
      legend: false,
      title: {
        display: false,
        text: "Chart.js Line Chart",
      },
      tooltip: {
        usePointStyle: true,
        backgroundColor: "#fff",
        bodyColor: "#00000099",
        titleColor: "#00000099",
        titleAlign: "center",
        bodyAlign: "left",
        footerAlign: "center",
        yAlign: "bottom",
        caretPadding: 15,
        width: 400,
        displayColors: false,
        titleMarginBottom: 10,
        titleSpacing: 15,
        borderWidth: 2,
        padding: 9,
        borderColor: "rgba(0, 0, 0, 0.05)",
        callbacks: {
          title: function () {
            return null;
          },
          label: function (content) {
            return `${content?.raw} hours`;
          },
        },
      },
    },
    scales: {
      x: {
        ticks: {
          padding: 10,
          color: "#ADB2B2",
          font: {
            size: 10,
          },
        },
        grid: {
          display: false,
        },
      },
      y: {
        min: 10,
        border: {
          display: false,
        },
        ticks: {
          callback: (value) => value + " hours",
          padding: 10,
          font: {
            size: 10,
          },
          color: "#ADB2B2",
        },
        display: true,
        beginAtZero: true,
        grid: {
          display: true,
          color: "#DFE5E5",
        },
      },
    },
    animation: {
      easing: "linear",

      y: {
        duration: 1000,
        from: 500,
      },
    },
  };
  const data = {
    labels,
    datasets: [
      {
        data: [10, 20, 30, 40, 50, 60, 70, 80, 100],
        borderColor: "#30D468",
        backgroundColor: "transparent",
        borderCapStyle: "round",
        borderJoinStyle: "miter",
        tension: 0.4,
        borderWidth: 3.9,
        pointBorderColor: "#FFF",
        pointBorderWidth: 0.5,
        pointHoverRadius: 10,
        pointHoverBackgroundColor: "#fff",
        pointHoverBorderColor: "rgba(0, 0, 0,0.05 )",
        pointHoverBorderWidth: 2,
        pointRadius: 0,
        pointHitRadius: 10,
      },
    ],
  };

  return (
    <Line
      options={options}
      data={data}
      className="line_graph"
      height={height || "160px"}
      width={width}
    />
  );
}

export default GraphData;
