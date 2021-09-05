import React from "react";
import { Link } from "react-router-dom";
import { signup } from "../../util/session_api_util";

class SessionForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: ""
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
    
    render() {

        // let currentForm;
        let signUpUser;
        let guestDemo;
        // if (this.props.formType) {
        //     currentForm = (
        //         <div className="navLink">
        //             {this.props.navLink}
        //         </div>
        //     )
        // };

        let currentForm = (this.props.formType === "Sign up") ? (
        <div className = "navLink">
            Please sign up to continue or {this.props.navLink} with demo
        </div>
        ) : (
        <div className = "navLink">
            Please sign in to continue or {this.props.navLink}
        </div>
        )

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

        if (this.props.formType === "Sign In") {
            guestDemo = (
                <input type="submit" value="Demo Sign In" className="form-button" onClick={this.guestDemo}/>
            )
        }


        return (
            <div className="session-modal">
                <div className="exitModalButton">&times;</div>
                <form onSubmit={this.handleSubmit} className="modal-form">
                    {/* Please {this.props.formType} or {this.props.navLink} */}
                    {currentForm}
                    <div className= "formInput">
                        {signUpUser}
                        <label className= "formInput">Email:
                            <input
                                type = "email"
                                value= {this.state.email}
                                onChange= {this.update("email")} 
                                />
                        </label>
                        <label className= "formInput">Password:
                            <input
                                type = "password"
                                value= {this.state.password}
                                onChange= {this.update("password")} 
                                />
                        </label> 
                        <input type="submit" value={this.props.formType} className="form-button"/>
                        {guestDemo}
                    </div>
                </form>
            </div>

        )
    }
}

export default SessionForm;