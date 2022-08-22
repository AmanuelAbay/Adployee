import ReactApexChart from "react-apexcharts";

// interface Props {
//   options: [];
// }

const TasksChart: React.FC = () => {
  const options = {
    chart: {
      background: "#fff",
      width: "100%",
      zoom: {
        enabled: true,
      },
    },
    xaxis: {
      categories: [
        "Amanuel",
        "Andy",
        "Pop",
        "Edom",
        "solomon",
        "muse",
        "alibirra",
        "Total",
      ],
    },
  };

  const series = [
    {
      name: "Net Salary",
      data: [31, 40, 28, 51, 42, 109, 100, 400],
    },
  ];

  return (
    <ReactApexChart type="bar" options={options} series={series} height={350} />
  );
};

export default TasksChart;
