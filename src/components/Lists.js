import React, { Component } from 'react'

import Gravatar from "./Gravatar";
import './styles/Lists.css';

export default class Lists extends Component {
    render() {
        return (
            <div className="row">
                <div className="col-10">
                    <select className="form-control Lists">
                        <option value="false">Select an existing list</option>
                        {this.props.lists && this.props.lists.map((e, key) => {
                            return(<option value={e.id}>{e.nombre}</option>)
                        })}
                    </select>
                </div>
                <div className="col-2">
                        <Gravatar
                                className="Lists__avatar"
                                email={this.props.mail}
                                alt="Avatar"
                        />
                    </div>
            </div>
        )
    }
}
