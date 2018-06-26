import React, { Component, StrictMode } from 'react';
import { connect } from 'react-redux';

import Placeholder from '../components/placeholder.jsx';
import PlotComponent from '../components/plotly-char.jsx';
import DoughnutComponent from "../components/doughnut.jsx";
import MapComponent from '../components/map.jsx';

import { fetchDistrict } from "../actions/action_district.jsx";

class districtView extends Component {

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
			<div>
				<div className="grid">
					<div className="col-1">
						<div className="row">
							<PlotComponent data={this.props.districtData} />
						</div>

						<div className="row">
							<DoughnutComponent data={this.props.districtData} />
						</div>
					</div>
					<div className="col-2">
						<div className="row">
							<MapComponent markers={this.mapComponentData()} />
						</div>
					</div>
				</div>
			</div>
		);
	}
}

function mapStateToProps({ houseData, districtData }) {
	return { houseData, districtData };
}

export default connect(mapStateToProps, { fetchDistrict })(districtView)