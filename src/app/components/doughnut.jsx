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
		
	    return (
			<div className="component">
				<Doughnut data={data} width={500} height={500} />
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