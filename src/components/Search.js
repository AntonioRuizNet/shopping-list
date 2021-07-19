import React, { Component } from 'react'

import Gravatar from "./Gravatar";

import './styles/Search.css';

export default class Search extends Component {
    render() {
        return (
            <div className="Search">
                <div className="row">
                    <div className="col-10">
                        <input type="text" 
                                className="form-control" 
                                placeholder="Escribe un producto"/>
                    </div>
                    <div className="col-2">
                        <Gravatar
                                className="Search__avatar"
                                email="email@email.com"
                                alt="Avatar"
                        />
                    </div>
                </div>
            </div>
        )
    }
}
