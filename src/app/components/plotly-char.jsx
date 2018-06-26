import React, { Component } from 'react';
import Plot from 'react-plotly.js';

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

            const scatter = {
                x: xAxis,
                y: scatterData,
                name: 'Median price',
                type: 'scatter'
            };
            const bar = {
                type: 'bar', 
                yaxis: 'y2', 
                name: 'Houses amount',
                x: xAxis, 
                y: barData
            };

            const data = [bar, scatter];
            const layout = {
                width: 500,
                height: 500,
                title: 'Living SQFT. boundaries with median price',
                yaxis: {
                    title: 'Median house sales price', 
                    overlaying: "y2",
                    nticks: 6
                },
                yaxis2: {
                    title: 'Houses distribution',
                    showlegend: true,
                    side: "right",
                    nticks: 10
                },
                legend: {
                    y: 1.15
                }
            }; 


            return (      
                <div className="component">
                    <Plot
                        data={data}
                        layout={layout}
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