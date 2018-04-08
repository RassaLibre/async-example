import {
	FETCH_FACILITY_REQUEST,
	FETCH_FACILITY_SUCCESS,
	FETCH_FACILITY_ERROR
} from './actions'
import { API_URL } from '../../constants/ApiURL'

/**
*
*/
const _fetchFacility = id => fetch(`${API_URL}/facility/${id}`)
	.then(response => {
		if(response.ok) return response.json()
		else throw new Error()
	})

/**
*
*/
export const fetchFacility = id => dispatch => {
	dispatch({ type: FETCH_FACILITY_REQUEST })
	return _fetchFacility(id)
		.then(facility => dispatch({ type: FETCH_FACILITY_SUCCESS, facility }))
		.catch(error => {
			dispatch({ type: FETCH_FACILITY_ERROR, error })
			throw error
		})
}
