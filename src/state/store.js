import thunk from 'redux-thunk'
import { createStore, applyMiddleware, combineReducers } from 'redux'
import facility from './facility/reducer'
import person from './person/reducer'
import exposure from './exposure/reducer'
import inputForm from './inputForm/reducer'
import modal from './modal/reducer'

/**
*
*/
const reducers = combineReducers({
	facility,
	person,
	exposure,
	inputForm,
	modal
})

/**
*
*/
export default createStore(reducers, applyMiddleware(thunk))
