import { createSelector } from 'reselect'

/**
*
*/
export const getValue = state => state.inputForm.value

/**
*
*/
export const isValueValid = createSelector([ getValue ], value => !!value.match(/^[A-Za-z0-9]{1,10}$/i))
