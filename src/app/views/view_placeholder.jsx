import React, { Component, StrictMode } from 'react';

import Placeholder from '../components/placeholder.jsx';

export default class PlaceholderView extends Component {
	render() {
		return (
			<div className="container">
				<div className="col">
					<div className="row">
						<Placeholder text="FIRST PLACEHOLDER"/>
					</div>
					<div className="row">
						<Placeholder text="SECOND PLACEHOLDER"/>
					</div>
				</div>
				<div className="col">
					<div className="row">
						<Placeholder text="THIRD PLACEHOLDER"/>
					</div>
				</div>
			</div>
		);
	}
}