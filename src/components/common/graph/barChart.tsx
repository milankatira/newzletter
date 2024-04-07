import React, { useState, useEffect } from 'react';
import ReactApexChart from 'react-apexcharts';

const BarChart: React.FC = () => {
  const [series, setSeries] = useState([]);
  const [options, setOptions] = useState({
    chart: {
      type: 'bar',
      height: 350
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: '55%',
        endingShape: 'rounded'
      },
    },
    dataLabels: {
      enabled: false
    },
    stroke: {
      show: true,
      width: 2,
      colors: ['transparent']
    },
    xaxis: {
      categories: []
    },
    yaxis: {
      title: {
        text: '$ (thousands)'
      }
    },
    fill: {
        opacity: 1,
    },
    tooltip: {
      y: {
        formatter: function (val: number) {
          return "$ " + val + " thousands"
        }
      }
    }
  });

  useEffect(() => {
    // Function to generate last 7 days dates
    const getLastSevenDays = () => {
      const dates = [];
      const today = new Date();
      for (let i = 6; i >= 0; i--) {
        const date = new Date(today);
        date.setDate(date.getDate() - i);
        dates.push(date.toLocaleDateString('en-US', { weekday: 'long' }));
      }
      return dates;
    };

    // Generate the last 7 days dates for x-axis categories
    const lastSevenDays = getLastSevenDays();

    // Example data for demonstration
    const exampleData = [44, 55, 57, 56, 61, 58, 63]; // Replace with your actual data

 //@ts-ignore
    setOptions((prevOptions) => ({
      ...prevOptions,
      xaxis: {
        ...prevOptions.xaxis,
        categories: lastSevenDays
      }
    }));
 //@ts-ignore
    setSeries([{ name: 'Net Profit', data: exampleData }]);
  }, []);

  return (
    <div>
          <div id="chart">
              {/* @ts-ignore */}
        <ReactApexChart options={options} series={series} type="bar" height={350} />
      </div>
      <div id="html-dist"></div>
    </div>
  );
}

export default BarChart;
