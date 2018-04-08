import {
	SHOW_MODAL,
	HIDE_MODAL
} from './actions'

/**
*
*/
export const showModal = () => dispatch => dispatch({ type: SHOW_MODAL })

/**
*
*/
export const hideModal = () => dispatch => dispatch({ type: HIDE_MODAL })
