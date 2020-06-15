import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { createStream } from '../../actions';

// reduxForm function same as connect function

class StreamCreate extends React.Component {

	renderError({error, touched }) {
		if (touched && error) {
			return (
				<div className="ui error message">
					<div className="header">{error}</div>
				</div>
			);
		}
	}

	renderInput = ({ input, label, meta }) => {

		// Template strings
		const className = `field ${meta.error && meta.touched ? 'error' : ''}`;

		return (
			//<input onChange={formProps.input.onChange} value={formProps.input.value} />

			<div className={className}>
				<label>{label}</label>
				<input {...input} autoComplete="off"/>
				{this.renderError(meta)}
			</div>
		)
	}

	onSubmit = (formValues) => {
		this.props.createStream(formValues);
	}

	render() {
		return (
			// handlesubmit prop 
			<form onSubmit={this.props.handleSubmit(this.onSubmit)} className="ui form error">
				<Field name="title" component={this.renderInput} label="Enter title"/>
				<Field name="description" component={this.renderInput} label="Enter description"/>

				<button className="ui button primary">Submit</button>
			</form>
		);
	}
}


//Validation function

const validate = (formValues) => {

	const errors = {};

	if (!formValues.title) {
		errors.title = "Please enter a title"
	}

	if (!formValues.description) {
		errors.description = "Please enter a description"
	}

	return errors;
}

// Wire up form and vaildate function for redux form


// Stack functions

const formWrapped = reduxForm({
	form: 'StreamCreate',
	validate: validate
})(StreamCreate);

export default connect(null, { createStream })(formWrapped);