import { createSelector } from 'reselect'
import {
	getFacility,
	getExposure
} from '../selectors'

/**
*
*/
export const getModalValue = createSelector([ getFacility, getExposure ], (facility, exposure) => {
	if(!facility || !exposure) return 0
	else return facility.val3 * exposure.val5
})
