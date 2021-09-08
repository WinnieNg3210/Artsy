import React from "react";
import { connect } from "react-redux";
import { signup, clearErrors } from "../../actions/session_actions";
import SessionForm from "./session_form";
import { showModal, hideModal } from "../../actions/modal_actions";

const mSTP = (state) => {
  return {
    errors: state.errors.loginError,
    formType: "Sign up",
  };
};

const mDTP = (dispatch, ownProps) => ({
  processForm: (user) => dispatch(signup(user)),
  otherForm: (
    <button
      className="otherForm"
      onClick={() => dispatch(showModal("Sign in"))}
    >
      sign in
    </button>
  ),
  hideModal: () => dispatch(hideModal()),
  clearErrors: () => dispatch(clearErrors()),
});

export default connect(mSTP, mDTP)(SessionForm);
