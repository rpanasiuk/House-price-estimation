import React, { Component, StrictMode } from 'react';
import { connect } from 'react-redux';

import Form from "../components/form.jsx";
import MapComponent from "../components/map.jsx";
import Predictor from "../components/predictor.jsx";

class mainView extends Component {
	renderPredictionComponent() {
		const { markers: { prediction }, houseData } = this.props;

		if (prediction && houseData) {
			return (
				<div className="row">
					<Predictor prediction={prediction} data={houseData} />
				</div>
			);
		}
	}

	mapComponentData() {
		const { markers } = this.props;

		if (markers.houses) {
			return Object.values(markers.houses);
		} else {
			return markers;
		}		
	}

	render() {
		return (
			<div className="container">				
				<div className="col">
					<div className="row">
						<Form />
					</div>
					
					{this.renderPredictionComponent()}						
				</div>
				<div className="col">
					<div className="row">
						<MapComponent markers={this.mapComponentData()} />
					</div>
				</div>
			</div>
		);
	}
}

function mapStateToProps({ markers, houseData }) {
  return { markers, houseData };
}

export default connect(mapStateToProps)(mainView);