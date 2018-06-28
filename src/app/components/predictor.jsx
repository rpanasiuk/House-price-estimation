import React, { Component } from 'react';

const labels = [
	"Number of bedrooms",
	"Number of bathrooms",
	"Living square feets",
	"Residential lot size",
	"Year built",
	"Zipcode"
];

export default class Predictor extends Component {

	inputHouseDetails(data) {
		return Object.keys(data).map((key, index) => (			 
			<li key={index}>
				<span className="prediction__feature">{labels[index]}:</span>
				<span className="prediction__value">{data[key]}</span>
			</li>			
		));
	}

	render() {
		const { data, prediction } = this.props;

		return (
			<section className="main-predictor component">
				<ul className="prediction">			
					{this.inputHouseDetails(data)}

					<li className="prediction__price">
						<span className="prediction__feature">Predicted price:</span>
						<span className="prediction__value">{prediction} USD</span>						
					</li>
				</ul>
			</section>
		);
	}
}