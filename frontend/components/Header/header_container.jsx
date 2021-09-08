import React from "react";
import { connect } from "react-redux";
import { showModal } from "../../actions/modal_actions";
import Header from "./header";
import { logout } from "../../actions/session_actions";

const mapStateToProps = ({ session, entities: { users } }) => ({
  currentUser: users[session.id],
});

const mapDispatchToProps = (dispatch) => ({
  logout: () => dispatch(logout()),
  showModal: (modal) => dispatch(showModal(modal)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
