import React, { PureComponent } from 'react'
import { string, func, bool } from 'prop-types'
import "./styles.css"

/**
*
*/
const getButtonText = (isProcessing, isValid) => {
	if(isProcessing) return '...'
	else if(isValid) return 'Submit!'
	else return 'Incorrect input!'
}

/**
*
*/
export default class InputForm extends PureComponent{

	/**
	*
	*/
	constructor(args){
		super(args)
		this.state = {}
		this.handleChange = this.handleChange.bind(this)
		this.handleSubmit = this.handleSubmit.bind(this)
	}

	/**
	*
	*/
	handleChange(e){
		const { onChange } = this.props
		const value = e.target.value
		onChange(value)
	}

	/**
	*
	*/
	handleSubmit(e){
		e.preventDefault()
		const { onSubmit, value, isProcessing } = this.props
		if(!isProcessing) onSubmit(value)
	}

	/**
	*
	*/
	render(){
		const { value, isValid, isProcessing } = this.props
		return(
			<div>
				<form className="inputForm">
					<input
						placeholder="alphanumeric only"
						className="inputForm__textField"
						type="text"
						minLength="1"
						maxLength="10"
						value={value}
						disabled={isProcessing}
						onChange={this.handleChange}/>
					<button
						onClick={this.handleSubmit}
						className="inputForm__submitButton"
						disabled={!isValid}>{getButtonText(isProcessing, isValid)}</button>
				</form>
			</div>
		)
	}
}

/**
*
*/
InputForm.defaultProps = {
	value: '',
	isValid: false,
	isProcessing: false
}

/**
*
*/
InputForm.propTypes = {
	value: string,
	isValid: bool,
	onChange: func.isRequired,
	onSubmit: func.isRequired,
	isProcessing: bool
}
