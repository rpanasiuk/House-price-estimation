import React, { Component, StrictMode } from 'react';

import Form from "../containers/form.jsx";
import MapComponent from "./map.jsx";

export default class App extends Component {
	render() {
		return (
			<div>
				<Form />
				<MapComponent />
			</div>
		);
	}
}