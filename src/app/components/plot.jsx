import React, { Component } from 'react';
import { Bar } from 'react-chartjs-2';

const data = {
    datasets: [
    {
        label: 'Sales',
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
        label: 'Visitor',
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
                    show: true
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
                }
            }
        ]
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