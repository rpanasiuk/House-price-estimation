import React, { Component, StrictMode } from 'react';
import { connect } from 'react-redux';

import Form from "../components/form.jsx";
import MapComponent from "../components/map.jsx";
import Predictor from "../components/predictor.jsx";
import IntroductionComponent from "../components/introduction.jsx";

class MainView extends Component {
	renderPredictionComponent() {
		const { markers: { prediction }, houseData } = this.props;

		if (prediction && houseData) {
			return (
				<div className="row">
					<Predictor prediction={prediction} data={houseData} />
				</div>
			);
		} else {
			return (
				<div className="row">
					<IntroductionComponent />
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
					{this.renderPredictionComponent()}

					<div className="row">
						<Form />
					</div>
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

export default connect(mapStateToProps)(MainView);