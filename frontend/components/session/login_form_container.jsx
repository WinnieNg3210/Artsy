import React from 'react';
import { connect } from 'react-redux';
import { login } from '../../actions/session_actions';
import { showModal, hideModal } from '../../actions/modal_actions';
import SessionForm from './session_form';

const mapStateToProps = ({ errors }) => {
  return {
    errors: errors.loginError,
    formType: 'Sign in',
  };
};

const mapDispatchToProps = dispatch => {
  return {
    processForm: (user) => dispatch(login(user)),
    otherForm: (
      <button onClick={() => dispatch(showModal('Sign up'))}>
        Sign up
      </button>
    ),
    hideModal: () => dispatch(hideModal())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);