import React, { Component } from 'react'

import './styles/NewProd.css';

export default class NewProd extends Component {
    render() {
        return (
            <div className="NewProd">
                <form onSubmit={this.props.onSubmit}>
                <div className="row">
                    <div className="col">
                        <input type="text" 
                                name="newproduct"
                                className="form-control" 
                                placeholder="Add new"
                                onChange={this.props.onChange}/>
                    </div>
                </div>
                </form>
            </div>
        )
    }
}
