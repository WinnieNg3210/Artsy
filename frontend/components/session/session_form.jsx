import React from "react";
import { Link } from "react-router-dom";
import { signup } from "../../util/session_api_util";
import {withRouter} from "react-router-dom";

class SessionForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: "",
            username: ""
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.guestDemo = this.guestDemo.bind(this);
    }

    update(field) {
        return e => this.setState({[field]: e.currentTarget.value})
    }

    handleSubmit(e) {
        e.preventDefault()
        const user = Object.assign({}, this.state);
        this.props.processForm(user);        
    }

    guestDemo() {
        this.setState({email: "beOurGuest@gmail.com", password: "guestDemo" })
    }

    renderErrors() {
        // debugger
        return(
        <ul>
            {this.props.errors.map((error, i) => (
            <li key={`error-${i}`}>
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
                <input type="submit" value="Demo Sign In" className="form-button" onClick={this.guestDemo}/>
            )
        }

        if (this.props.formType) {
            currentForm = (
                <div> 
                    {this.props.otherForm}
                </div>
            )
        };

        if (this.props.formType === "Sign up") {            
            signUpUser = (
                <label className = "formInput">First Name:
                    <input 
                        type="text"
                        value = {this.state.username}
                        onChange= {this.update("first_name")}
                    />
                </label>
            )
        }        

        let currentForm = (this.props.formType === "Sign up") ? (
        <div>
            Please sign up to continue or {this.props.otherForm} with demo
        </div>
        ) : (
        <div>
            Please sign in to continue or {this.props.otherForm}
        </div>
        )                

        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    
                    {currentForm}
                    <div onClick={this.props.closeModal}>X</div>

                    {this.renderErrors()}
                    <div className="formInput">
                        {signUpUser}
                        <label className="formInput">Email:
                            <input 
                                type="email"
                                value={this.state.email}
                                onChange={this.update('email')}
                            />
                        </label>

                        <label className="formInput">Password:
                            <input type="password"
                                value={this.state.password}
                                onChange={this.update('password')}
                            />
                        </label>

                        <input type="submit" value={this.props.formType} className="form-button"/>
                        {guestDemo}
                    </div>
                
                </form>
            </div>
        );
    }

}

export default withRouter(SessionForm);
// export default SessionForm;

