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
				<div className="form__row-title">{field.label}</div>
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
						label="Living square feets"
						name="sqftLiving"
						placeholder="500"
						component={this.renderField}
					/>

					<Field
						label="Residential lot size"
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

					<div className="form__btn">
						<button className="btn btn--submit btn--form">SEND</button>           
					</div>
				</form>
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