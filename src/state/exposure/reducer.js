import { combineReducers } from 'redux'
import {
	FETCH_EXPOSURE_REQUEST,
	FETCH_EXPOSURE_SUCCESS,
	FETCH_EXPOSURE_ERROR
} from './actions'

/**
*
*/
const DEFAULT_STATE = null

/**
*
*/
const data = (state = DEFAULT_STATE, action) => {
	switch(action.type){
		case FETCH_EXPOSURE_SUCCESS:
			return action.exposure
		default:
			return state
	}
}

/**
*
*/
const isFetching = (state = false, action) => {
	switch(action.type){
		case FETCH_EXPOSURE_ERROR:
		case FETCH_EXPOSURE_SUCCESS:
			return false
		case FETCH_EXPOSURE_REQUEST:
			return true
		default:
			return state
	}
}

/**
*
*/
export default combineReducers({
	data,
	isFetching
})
