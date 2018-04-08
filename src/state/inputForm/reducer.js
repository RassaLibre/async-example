import { combineReducers } from 'redux'
import {
	VALUE_CHANGE,
	SET_IS_PROCESSING,
	RESET_INPUT_FORM
} from './actions'

/**
*
*/
const DEFAULT_VALUE = ''

/**
*
*/
const value = (state = DEFAULT_VALUE, action) => {
	switch(action.type){
		case RESET_INPUT_FORM:
			return DEFAULT_VALUE
		case VALUE_CHANGE:
			return action.value
		default:
			return state
	}
}

/**
*
*/
const isProcessing = (state = false, action) => {
	switch(action.type){
		case SET_IS_PROCESSING:
			return action.isProcessing
		default:
			return state
	}
}

/**
*
*/
export default combineReducers({
	value,
	isProcessing
})
