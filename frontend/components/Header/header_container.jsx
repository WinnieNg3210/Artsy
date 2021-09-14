import React from "react";
import { connect } from "react-redux";
import { showModal } from "../../actions/modal_actions";
import { withRouter } from "react-router";
import Header from "./header";
import { logout } from "../../actions/session_actions";

const mapStateToProps = ({ session, entities: { users } }) => ({
  currentUser: users[session.id],
});

const mapDispatchToProps = (dispatch) => ({
  logout: () => dispatch(logout()),
  showModal: (modal) => dispatch(showModal(modal)),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Header));
