import React from "react";
import ReactApexChart from 'react-apexcharts';


class ApexDateChart extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        series: [{ data: props.data }],
        options: {
          chart: {
            id: 'area-datetime',
            type: 'area',
            width: '500px'
          },
          annotations: {
            yaxis: [{
              y: 30,
              borderColor: '#999',
              label: {
                show: true,
                text: 'Support',
                style: {
                  color: "#fff",
                  background: '#00E396'
                }
              }
            }],
            xaxis: [{
              x: new Date('14 Nov 2022').getTime(),
              borderColor: '#999',
              yAxisIndex: 0,
              label: {
                show: true,
                text: 'Rally',
                style: {
                  color: "#fff",
                  background: '#775DD0'
                }
              }
            }]
          },
          dataLabels: {
            enabled: false
          },

          xaxis: {
            type: 'datetime',
            tickAmount: 6,
          },
          tooltip: {
            x: {
              format: 'dd MMM yyyy'
            }
          },
          fill: {
            type: 'gradient',
            gradient: {
              shadeIntensity: 1,
              opacityFrom: 0.7,
              opacityTo: 0.9,
              stops: [0, 100]
            }
          },
        },
      
      };
    }

    render() {
      return ( 
        <div id="chart">
            <div id="chart-timeline">
                <ReactApexChart options={this.state.options} series={this.state.series} type="area" width={800} height={400} />
            </div>
        </div>
        );
    }
}

export default ApexDateChart;