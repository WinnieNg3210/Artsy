import React from "react";
import {connect} from "react-redux";
import Header from "./header";
import { logout } from "../../actions/session_actions";
// import { showModal, hideModal } from "../../actions/modal_actions";

const mapStateToProps = ({session, entities: {users}}) => ({
    currentUser: users[session.id]
    // ui: ui.modal
})

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout())
  // hideModal: () => dispatch(hideModal()),
  // showModal: () => dispatch(showModal())
});


export default connect(mapStateToProps, mapDispatchToProps)(Header);