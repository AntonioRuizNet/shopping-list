import React, { Component } from 'react'

import './styles/NewProd.css';

export default class NewProd extends Component {
    render() {
        return (
            <div className="NewProd">
                <div className="row">
                    <div className="col">
                        <input type="text" 
                                className="form-control" 
                                placeholder="Add new"/>
                    </div>
                </div>
            </div>
        )
    }
}
