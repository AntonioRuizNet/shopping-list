import React, {Component } from 'react';

import './styles/Login.css'

export default class Login extends Component{

    handleSubmit = (e) => {
        e.preventDefault();
        const { history } = this.props;
        history.push("/list")
    }

    render(){
        return (
            <div class="form-group text-center Login">
                <h1>Shopping List</h1>
                <form onSubmit={this.handleSubmit}>
                    <input  type="email" 
                            className="form-control text-center Login__Input" 
                            placeholder="Email"/>
                    <button 
                            type="submit" 
                            className="btn btn-primary form-control Login__Button" 
                            value="Entrar">Enter
                    </button>
                </form>
            </div>
        )
    }
}
