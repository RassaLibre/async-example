import React, { PureComponent } from 'react'
import { number, func, string } from 'prop-types'
import './styles.css'

/**
*
*/
export default class Modal extends PureComponent{

	/**
	*
	*/
	constructor(args){
		super(args)
		this.state = {}
	}

	/**
	*
	*/
	render(){
		const { value, onClose, explanation} = this.props
		return(
			<div className="curtain" onClick={onClose}>
				<div className="modal">
					<div className="modal__header">
						<a href="javascript:void(0)" onClick={onClose}>Kindly close me!</a>
					</div>
					<div className="modal__body">
						<p>The value you were looking for is...</p>
						<h1>{value}</h1>
						{explanation && <p>{explanation}</p>}
					</div>
				</div>
			</div>
		)
	}

}

/**
*
*/
Modal.defaultProps = {
	value: 0,
	explanation: ''
}

/**
*
*/
Modal.propTypes = {
	value: number,
	onClose: func.isRequired,
	explanation: string
}


