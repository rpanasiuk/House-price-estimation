import React, { Component } from 'react';
import { Bar } from 'react-chartjs-2';

Chart.defaults.global.defaultFontStyle = 'bold';
Chart.defaults.global.defaultFontSize = 14;

const data = {
    datasets: [
    {
        label: 'Median price',
        type:'line',
        fill: false,
        borderColor: '#EC932F',
        backgroundColor: '#EC932F',
        pointBorderColor: '#EC932F',
        pointBackgroundColor: '#EC932F',
        pointHoverBackgroundColor: '#EC932F',
        pointHoverBorderColor: '#EC932F',
        yAxisID: 'y-axis-2'
    },
    {
        type: 'bar',
        label: 'Houses distribution',
        fill: false,
        backgroundColor: '#71B37C',
        borderColor: '#71B37C',
        hoverBackgroundColor: '#71B37C',
        hoverBorderColor: '#71B37C',
        yAxisID: 'y-axis-1'
    }]
};

const options = {
    responsive: true,
    tooltips: {
        mode: 'label'
    },
    elements: {
        line: {
            fill: false
        }
    },
    scales: {

        xAxes: [
            {
                display: true,
                gridLines: {
                    display: false
                }
            }
        ],

        yAxes: [
            {
                type: 'linear',
                display: true,
                position: 'left',
                id: 'y-axis-1',
                gridLines: {
                    display: false
                },
                labels: {
                    show: true,                    
                },
                ticks: {
                    maxTicksLimit: 7                    
                }
            },
            {
                type: 'linear',
                display: true,
                position: 'right',
                id: 'y-axis-2',
                gridLines: {
                    display: false
                },
                labels: {
                    show: true
                },
                ticks: {
                    beginAtZero: true,
                    maxTicksLimit: 7
                }
            }
        ]        
    },
    layout: {
        padding: {
        left: 20,
        right: 20
        }
    },
    title: {
        display: true,
        text: 'Living SQFT. boundaries with median price',
        fontSize: 18
    }
};


export default class PlotComponent extends Component {
    render() {
        const { districtSqft } = this.props.data;

        if (districtSqft) {

            const xAxis = Object.keys(districtSqft);
            const barData = [];
            const scatterData = [];

            for (let el in districtSqft) {
                const { count, median } = districtSqft[el];

                barData.push(count);
                scatterData.push(median);
            }

            data.datasets[0].data = scatterData;
            data.datasets[1].data = barData;
            options.labels = xAxis;
            options.scales.xAxes[0].labels = xAxis;

            return (
                <div className="component">
                    <Bar
                        data={data}
                        options={options}
                    />
                </div>
            );
        } else {

            return (      
                <div className="component">
                    Plot loading..
                </div>
            );
        }
    }
}