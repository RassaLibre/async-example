import { combineReducers } from 'redux'
import {
	FETCH_PERSON_REQUEST,
	FETCH_PERSON_SUCCESS,
	FETCH_PERSON_ERROR
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
		case FETCH_PERSON_SUCCESS:
			return action.person
		default:
			return state
	}
}

/**
*
*/
const isFetching = (state = false, action) => {
	switch(action.type){
		case FETCH_PERSON_ERROR:
		case FETCH_PERSON_SUCCESS:
			return false
		case FETCH_PERSON_REQUEST:
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
