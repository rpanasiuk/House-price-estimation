import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';

import { fetchNearestNeighbours } from '../actions/action_fnn.jsx';
import { setHouseData } from '../actions/action_house-data.jsx';

class FetchData extends Component {

	renderField = (field) => {
		return (
			<div className="form__row">
				<label htmlFor={field.name} className="visuallyhidden">{field.label}</label>
				<input
					className="text"
					type="text"
					id={field.name}
					placeholder={field.placeholder}
					{...field.input}
				/>
			</div>
		);
	}

	onSubmit = (object) => {
		this.props.fetchNearestNeighbours(object);
		this.props.setHouseData(object);
	}

	render(){
		return (
			<section className="main-form component">
				<div className="container">
					<form className="form" id="mainForm" method="POST" 
						onSubmit={this.props.handleSubmit(this.onSubmit)}>

						<Field
							label="Number of bedrooms"
							name="bedrooms"
							placeholder="1"
							component={this.renderField}
						/>

						<Field
							label="Number of bathrooms"
							name="bathrooms"
							placeholder="1.0"
							component={this.renderField}
						/>

						<Field
							label="SQFT living"
							name="sqftLiving"
							placeholder="500"
							component={this.renderField}
						/>

						<Field
							label="SQFT lot"
							name="sqftLot"
							placeholder="1000"
							component={this.renderField}
						/>

						<Field
							label="Year built"
							name="yrBuilt"
							placeholder="1950"
							component={this.renderField}
						/>

						<Field
							label="Zipcode"
							name="zipcode"
							placeholder="98178"
							component={this.renderField}
						/>

						<button className="btn btn--submit">SEND</button>           
					</form>
				</div>
			</section>
		);
	}        
}




export default reduxForm({
	// validate,
	form: 'FetchDataForm'
})(
	connect(null, { fetchNearestNeighbours, setHouseData })(FetchData)
)