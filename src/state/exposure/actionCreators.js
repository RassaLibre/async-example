import {
	FETCH_EXPOSURE_REQUEST,
	FETCH_EXPOSURE_SUCCESS,
	FETCH_EXPOSURE_ERROR
} from './actions'
import { API_URL } from '../../constants/ApiURL'

/**
*
*/
const _fetchExposure = id => fetch(`${API_URL}/exposure/${id}`)
	.then(response => {
		if(response.ok) return response.json()
		else throw new Error()
	})

/**
*
*/
export const fetchExposure = id => dispatch => {
	dispatch({ type: FETCH_EXPOSURE_REQUEST })
	return _fetchExposure(id)
		.then(exposure => dispatch({ type: FETCH_EXPOSURE_SUCCESS, exposure }))
		.catch(error => {
			dispatch({ type: FETCH_EXPOSURE_ERROR, error })
			throw error
		})
}
