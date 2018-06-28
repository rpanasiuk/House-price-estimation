import React, { Component } from 'react';
import { Doughnut } from 'react-chartjs-2';

import innerHeightPadding from '../utils/window-height.jsx';

const colors = [
	'#deebf7',
	'#c6dbef',
	'#9ecae1',
	'#6baed6',
	'#4292c6',
	'#2171b5',
	'#08519c',
	'#08306b'
];

const data = {
	datasets: [{
		backgroundColor: colors,
		hoverBackgroundColor: colors
	}]
};

const options = {
	responsive: true,
	legend: {
		position: 'right',
		labels: {
			boxWidth: 12,
			fontSize: 7
		}
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
		text: 'Distribution in relation to the built year',
		fontSize: 16
	}
}

export default class DoughnutComponent extends Component {
	
  render() {
  	const { districtYears } = this.props.data;

  	if (districtYears) {

	  	const labels = Object.keys(districtYears);
	  	const dataArray = labels.map((el, i) => {
	  		return districtYears[el][0];
	  	});

	  	data.labels = labels;
	  	data.datasets[0].data = dataArray;
		
	    return (
			<section className="district-doughnut component">
				<Doughnut data={data} options={options} />
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
}; 