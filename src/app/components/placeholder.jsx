import React, { Component, StrictMode } from 'react';

export default class Placeholder extends Component {
	render() {
		let style;
		if (this.props.styles) {
			style = this.props.styles
		} else {
			style = {
				width: "100%",
				height: "250px",
				margin: "0 30px"
			}
		}

		return (
			<div className="component" style={style}>
				{this.props.text}
			</div>
		);
	}
}