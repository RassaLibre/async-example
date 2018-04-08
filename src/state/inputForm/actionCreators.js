import {
	VALUE_CHANGE,
	SET_IS_PROCESSING,
	RESET_INPUT_FORM
} from './actions'

/**
*
*/
export const changeValue = value => dispatch =>
	dispatch({ type: VALUE_CHANGE, value })

/**
*
*/
export const setIsProcessing = isProcessing => dispatch =>
	dispatch({ type: SET_IS_PROCESSING, isProcessing })

/**
*
*/
export const resetInputForm = () => dispatch =>
	dispatch({ type: RESET_INPUT_FORM })
