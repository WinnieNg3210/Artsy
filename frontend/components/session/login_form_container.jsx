import React from "react";
import {connect} from "react-redux";
import { login } from "../../actions/session_actions";
import {Link} from "react-router-dom";
import SessionForm from "./session_form";


const mSTP = state => ({
    errors: Object.values(state.errors),
    formType: "Sign In",
    navLink: <Link to="/signup">Sign up</Link>
})

const mDTP = (dispatch, ownProps) => ({
    processForm: user => dispatch(login(user))
})

export default connect(mSTP, mDTP)(SessionForm);