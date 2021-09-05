import React from "react";
import {connect} from "react-redux";
import { signup } from "../../actions/session_actions";
import {Link} from "react-router-dom";
import SessionForm from "./session_form";

const mSTP = state => ({
    errors: Object.values(state.errors),
    formType: "Sign up",
    navLink: <Link to="/login">Sign in</Link>
})

const mDTP = (dispatch, ownProps) => ({
    processForm: user => dispatch(signup(user))
})

export default connect(mSTP, mDTP)(SessionForm);