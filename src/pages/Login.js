import React, {Component } from 'react';
import { Link } from 'react-router-dom';

import './styles/Login.css'


export default class Login extends Component{

    state = {
        mail: ''
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    handleClick = (e) => {
        localStorage.setItem('MailUser', this.state.mail);
    }

    render(){
        return (
            <div className="form-group text-center Login">
                <h1>Shopping List</h1>
                    <input  type="email" 
                            name="mail"
                            className="form-control text-center Login__Input" 
                            placeholder="Email"
                            onChange={this.handleChange}
                    />
                    <Link   to ='/list'
                            className="btn btn-primary form-control Login__Button"
                            onClick={this.handleClick}
                    >Enter</Link>
            </div>
        )
    }
}
