import React from "react";
import { connect } from "react-redux";
import BannerBodyProduct from "./banner_body_products";

const mapStateToProps = ({ session, entities: { users } }) => ({
  currentUser: users[session.id],
});

export default connect(mapStateToProps, null)(BannerBodyProduct);
