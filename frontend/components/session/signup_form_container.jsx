import React from "react";
import { connect } from "react-redux";
import { signup } from "../../actions/session_actions";
import SessionForm from "./session_form";
import { showModal, hideModal } from "../../actions/modal_actions";

const mSTP = (state) => {
  // debugger
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
});

export default connect(mSTP, mDTP)(SessionForm);
