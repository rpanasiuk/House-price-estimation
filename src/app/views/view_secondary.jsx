import React, { Component, StrictMode } from 'react';
import Placeholder from '../components/placeholder.jsx';
import PlotComponent from '../components/plotly-char.jsx';
import DoughnutComponent from "../components/doughnut.jsx";
import MapComponent from '../components/map.jsx';

export default class secondaryView extends Component {


	render() {
		console.log('secondary view');
		const style = {
			width: "100%",
			height: "100%",
			margin: "0",
			padding: "0"
		};

		const style2 = {
			width: "100%",
			height: "550px",
			margin: "0 30px"
		}

		return (
			<div style={{width: "100%"}}>
				<div className="grid">
					<div className="col-1">
						<div className="row">
							<Placeholder text="PLACEHOLDER PIERWSZY"/>
						</div>

						<div className="row">
							<Placeholder text="PLACEHOLDER DRUGI"/>
						</div>
					</div>
					<div className="col-2">
						<div className="row">
							<Placeholder text="PLACEHOLDER TRZECI" styles={style2}/>
						</div>
					</div>
				</div>
			</div>
		);
	}
}