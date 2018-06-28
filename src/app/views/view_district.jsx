import React, { Component, StrictMode } from 'react';
import { connect } from 'react-redux';

import Placeholder from '../components/placeholder.jsx';
import PlotComponent from '../components/plot.jsx';
import DoughnutComponent from "../components/doughnut.jsx";
import MapComponent from '../components/map.jsx';

import { fetchDistrict } from "../actions/action_district.jsx";

class DistrictView extends Component {

	componentDidMount() {
		this.props.fetchDistrict(this.props.houseData)
	}

	mapComponentData() {
		const { districtData } = this.props;

		if (districtData.districtHouses) {
			return Object.values(districtData.districtHouses);
		} else {
			return districtData;
		}
	}

	render() {
		return (
			<div className="container">
				<div className="col">
					<div className="row">
						<PlotComponent data={this.props.districtData} />
					</div>

					<div className="row">
						<DoughnutComponent data={this.props.districtData} />
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

function mapStateToProps({ houseData, districtData }) {
	return { houseData, districtData };
}

export default connect(mapStateToProps, { fetchDistrict })(DistrictView)