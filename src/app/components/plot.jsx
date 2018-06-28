import React, { Component } from 'react';
import { Bar } from 'react-chartjs-2';

import innerHeightPadding from '../utils/window-height.jsx';

Chart.defaults.global.defaultFontStyle = 'bold';
Chart.defaults.global.defaultFontSize = 12;

const data = {
    datasets: [
    {
        label: 'Median price',
        type:'line',
        fill: false,
        borderColor: '#6baed6',
        backgroundColor: '#6baed6',
        pointBorderColor: '#6baed6',
        pointBackgroundColor: '#6baed6',
        pointHoverBackgroundColor: '#6baed6',
        pointHoverBorderColor: '#6baed6',
        yAxisID: 'y-axis-2'
    },
    {
        type: 'bar',
        label: 'Houses distribution',
        fill: false,
        backgroundColor: '#08306b',
        borderColor: '#08306b',
        hoverBackgroundColor: '#6baed6',
        hoverBorderColor: '#6baed6',
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
            right: 20,
            top: innerHeightPadding(10),
            bottom: innerHeightPadding(10)
        }
    },
    title: {
        display: true,
        text: 'Living SQFT. boundaries with median price',
        fontSize: 16
    },
    legend: {
        labels: {
            boxWidth: 15,
            fontSize: 10
        }
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
                <section className="district-plot component">
                    <Bar
                        data={data}
                        options={options}
                    />
                </section>
            );
        } else {

            return (      
                <section className="loader component">
                    Plot loading..
                </section>
            );
        }
    }
}