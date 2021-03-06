import React from "react";
import { hideModal } from "../../actions/modal_actions";
import { connect } from "react-redux";
import LoginFormContainer from "../session/login_form_container";
import SignupFormContainer from "../session/signup_form_container";
import CheckoutContainer from "../Checkout/checkout_container";

function Modal({ modal, hideModal }) {
  if (!modal) {
    return null;
  }
  let component;
  switch (modal) {
    case "Sign in":
      component = <LoginFormContainer />;
      break;
    case "Sign up":
      component = <SignupFormContainer />;
      break;
    case "Checkout":
      component = <CheckoutContainer />;
      break;
    default:
      return null;
  }
  return (
    <div className="modal-background" onClick={hideModal}>
      <div className="modal-child" onClick={(e) => e.stopPropagation()}>
        {component}
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    modal: state.ui.modal,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    hideModal: () => dispatch(hideModal()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Modal);
