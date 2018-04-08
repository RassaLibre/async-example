import {
	FETCH_PERSON_REQUEST,
	FETCH_PERSON_SUCCESS,
	FETCH_PERSON_ERROR
} from './actions'
import { API_URL } from '../../constants/ApiURL'

/**
*
*/
const _fetchPerson = id => fetch(`${API_URL}/person/${id}`)
	.then(response => {
		if(response.ok) return response.json()
		else throw new Error()
	})

/**
*
*/
export const fetchPerson = id => dispatch => {
	dispatch({ type: FETCH_PERSON_REQUEST })
	return _fetchPerson(id)
		.then(person => dispatch({ type: FETCH_PERSON_SUCCESS, person }))
		.catch(error => {
			dispatch({ type: FETCH_PERSON_ERROR, error })
			throw error
		})
}
