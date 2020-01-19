import React from 'react';
import { Bar } from 'react-chartjs-2';

const data = {
  labels: ['شنبه', 'یکشنبه', 'دوشنبه', 'سه شنبه', 'چهار شنبه', 'پنج شنبه', 'جمعه'],
  datasets: [
    {
      label: 'My First dataset',
      backgroundColor: 'rgb(177, 225, 238)',
      borderColor: 'rgb(177, 225, 238)',
      borderWidth: 0.2,
      hoverBackgroundColor: 'rgba(255,99,132,0.4)',
      hoverBorderColor: 'rgba(255,99,132,1)',
      data: [65, 59, 80, 81, 56, 55, 40]
    }
  ]
};

const Divider = props => {
  return (
    <Bar
      data={data}
      width={200}
      height={200}
      options={{
        maintainAspectRatio: false
      }}
    />
  );
};

export default Divider;
