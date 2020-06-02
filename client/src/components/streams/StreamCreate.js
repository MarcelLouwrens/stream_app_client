import React from 'react';
import { Field, reduxForm } from 'redux-form';

// reduxForm function same as connect function

class StreamCreate extends React.Component {

	renderInput({ input, label }) {
		return (
			//<input onChange={formProps.input.onChange} value={formProps.input.value} />
			<div className="field">
				<label>{label}</label>
				<input {...input} />
			</div>
		)
	}

	onSubmit(event) {
		event.preventDefault();
	}

	render() {
		return (
			<form className="ui form">
				<Field name="title" component={this.renderInput} label="Enter title"/>
				<Field name="description" component={this.renderInput} label="Enter description"/>
			</form>
		);
	}
}

export default reduxForm({
	form: 'StreamCreate'
})(StreamCreate);