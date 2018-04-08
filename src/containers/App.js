import React, { Component } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import InputForm from '../components/InputForm'
import Modal from '../components/Modal'
import './App.css';
import {
  fetchPerson,
  fetchFacility,
  fetchExposure,
  changeValue,
  setIsProcessing,
  showModal,
  hideModal,
  resetInputForm
} from '../state/actionCreators'
import {
  isValueValid,
  getModalValue,
  getExposure,
  getFacility,
} from '../state/selectors'

/**
*
*/
class App extends Component {

  /**
  *
  */
  render() {
    const {
      inputForm,
      onInputFormChange,
      onSubmit,
      onModalHide,
      exposure,
      facility,
      modal : { isVisible }
    } = this.props
    return (
      <div className="container">
        <InputForm
          {...inputForm}
          onChange={onInputFormChange}
          onSubmit={onSubmit}/>
        {isVisible &&
          <Modal
            {...this.props.modal}
            explanation={`Because exposure's val5 is ${exposure.val5} and facility's val3 is ${facility.val3}.`}
            onClose={onModalHide}/>
        }
      </div>
    )
  }

}

/**
*
*/
const mapStateToProps = (state) => ({
  exposure: getExposure(state),
  facility: getFacility(state),
  inputForm: {
    ...state.inputForm,
    isValid: isValueValid(state)
  },
  modal: {
    ...state.modal,
    value: getModalValue(state)
  }
})

/**
*
*/
const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    onInputFormChange: changeValue,
    onModalHide: () => dispatch => {
      dispatch(hideModal())
      dispatch(resetInputForm())
    },
    onSubmit: id => async (dispatch) => {
      try{
        dispatch(setIsProcessing(true))
        const { person } = await dispatch(fetchPerson(id))
        if(person){
          const promises = [
            dispatch(fetchFacility(person.val1)),
            dispatch(fetchExposure(person.val2))
          ]
          await Promise.all(promises)
          dispatch(showModal())
        } else throw new Error('No person found!')
      } catch(e){
        alert('I know I, as an error, should be handled properly, but this should be enough for now.')
      } finally {
        dispatch(setIsProcessing(false))
      }
    }
  }, dispatch)
};

/**
*
*/
export default connect(mapStateToProps, mapDispatchToProps)(App);
