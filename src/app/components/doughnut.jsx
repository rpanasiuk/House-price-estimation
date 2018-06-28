import React, { Component } from 'react';
import {Doughnut} from 'react-chartjs-2';

export default class DoughnutComponent extends Component {
  render() {

  	const { districtYears } = this.props.data;

  	if (districtYears) {

	  	const labels = Object.keys(districtYears);
	  	const dataArray = labels.map((el, i) => {
	  		return districtYears[el][0];
	  	});

	  	const data = {
			labels: labels,
			datasets: [{
				data: dataArray,
				backgroundColor: [
					'#FF6384',
					'#36A2EB',
					'#FFCE56',
					'#FF6384',
					'#36A2EB',
					'#FFCE56',
					'#FF6384',
					'#36A2EB'								
				],
				hoverBackgroundColor: [
					'#FF6384',
					'#36A2EB',
					'#FFCE56',
					'#FF6384',
					'#36A2EB',
					'#FFCE56',
					'#FF6384',
					'#36A2EB'
				]
			}]
		};

		const options = {
			responsive: true,
			legend: {
				position: 'right'
			},
			layout: {
				padding: {
				left: 20,
				right: 20
				}
			},
			title: {
				display: true,
				text: 'Distribution in relation to the built year',
        		fontSize: 18
			}
		}
		
	    return (
			<div className="component">
				<Doughnut data={data} options={options} />
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
}; 