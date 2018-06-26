import React, { Component, StrictMode } from 'react';
import { connect } from 'react-redux';

import Form from "../components/form.jsx";
import MapComponent from "../components/map.jsx";

class mainView extends Component {
	render() {
		console.log('markers', this.props.markers);
		return (
			<div className="grid">
				<div className="col-2">
					<div className="row">
						<Form />
					</div>
				</div>
				<div className="col-2">
					<div className="row">
						<MapComponent markers={this.props.markers} />
					</div>
				</div>
			</div>
		);
	}
}

function mapStateToProps({ markers }) {
  return { markers };
}

export default connect(mapStateToProps)(mainView);