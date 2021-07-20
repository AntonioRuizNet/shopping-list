import React, { Component } from 'react'

import './styles/Search.css';

export default class Search extends Component {
    render() {
        return (
            <div className="Search">
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
