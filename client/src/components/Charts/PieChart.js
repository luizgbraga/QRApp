import React from "react";
import ReactApexChart from 'react-apexcharts';

class ApexPieChart extends React.Component {
    constructor(props) {
      super(props);

      this.state = {
      
        series: props.data,
        options: {
          chart: {
            type: 'pie',
          },
          labels: ['Android', 'iOS', 'Outro'],
          responsive: [{
            breakpoint: 480,
            options: {
              chart: {
                width: 200
              },
              legend: {
                position: 'bottom'
              }
            }
          }]
        },
      
      
      };
    }

  

    render() {
      return (
      
  <div id="chart">
<ReactApexChart options={this.state.options} series={this.state.series} type="pie" width={400} />
</div>

);
}
}

export default ApexPieChart;