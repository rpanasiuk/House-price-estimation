import React, { Component } from 'react';

export default class Placeholder extends Component {
	render() {
		return (
			<div className="component">
				{this.props.text}
			</div>
		);
	}
}