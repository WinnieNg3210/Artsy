import React from "react";
// import { Link } from "react-router-dom";
// import { signup } from "../../util/session_api_util";
import { withRouter } from "react-router-dom";

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      first_name: "",
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.guestDemo = this.guestDemo.bind(this);
  }

  update(field) {
    return (e) => this.setState({ [field]: e.currentTarget.value });
  }

  componentWillUnmount() {
    this.props.clearErrors();
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user).then(this.props.hideModal);
  }

  guestDemo() {
    this.setState({ email: "beOurGuest@gmail.com", password: "guestDemo" });
  }

  renderErrors() {
    return (
      <ul className="form-errors">
        {this.props.errors.map((error, i) => (
          <li key={`error-${i}`} className="individual-errors">
            {error}
          </li>
        ))}
      </ul>
    );
  }

  render() {
    let guestDemo;
    let signUpUser;

    if (this.props.formType === "Sign in") {
      guestDemo = (
        <input
          type="submit"
          value="Demo Sign In"
          className="form-button"
          onClick={this.guestDemo}
        />
      );
    }

    if (this.props.formType === "Sign up") {
      signUpUser = (
        <label className="formInput">
          First Name:
          <input
            className="label"
            type="text"
            value={this.state.first_name}
            onChange={this.update("first_name")}
          />
        </label>
      );
    }

    let currentForm =
      this.props.formType === "Sign up" ? (
        <div className="navLink">
          Please sign up to continue or <span>{this.props.otherForm}</span> with
          demo
        </div>
      ) : (
        <div className="navLink">
          Please sign in to continue or <span>{this.props.otherForm}</span>
        </div>
      );

    return (
      <div className="session-modal">
        <form onSubmit={this.handleSubmit}>
          <div className="modal-form">
            <div onClick={this.props.hideModal} className="exitModalButton">
              x
            </div>
            {currentForm}
            {this.renderErrors()}
            <div className="formInput">
              {signUpUser}
              <label className="formInput">
                Email:
                <input
                  className="label"
                  type="email"
                  value={this.state.email}
                  onChange={this.update("email")}
                />
              </label>

              <label className="formInput">
                Password:
                <input
                  className="label"
                  type="password"
                  value={this.state.password}
                  onChange={this.update("password")}
                />
              </label>
              <input
                type="submit"
                value={this.props.formType}
                className="form-button"
              />
              {guestDemo}
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default withRouter(SessionForm);
