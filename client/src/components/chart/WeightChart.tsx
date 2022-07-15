import { Line } from 'react-chartjs-2';

export default function WeightChart({ data, labels }: any) {
  const weightData = {
    labels,
    datasets: [
      {
        borderColor: 'rgb(54, 162, 235)',
        borderWidth: 2,
        data: data.체중,
      },
    ],
  };

  const options = {
    plugins: {
      title: {
        display: true,
        text: '체중',
      },
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
      },
    },
  };

  return <Line data={weightData} options={options} />;
}
