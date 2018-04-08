import { combineReducers } from 'redux'
import {
	FETCH_FACILITY_REQUEST,
	FETCH_FACILITY_SUCCESS,
	FETCH_FACILITY_ERROR
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
		case FETCH_FACILITY_SUCCESS:
			return action.facility
		default:
			return state
	}
}

/**
*
*/
const isFetching = (state = false, action) => {
	switch(action.type){
		case FETCH_FACILITY_ERROR:
		case FETCH_FACILITY_SUCCESS:
			return false
		case FETCH_FACILITY_REQUEST:
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
