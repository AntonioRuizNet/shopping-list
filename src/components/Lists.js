import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Gravatar from "./Gravatar";
import './styles/Lists.css';

export default class Lists extends Component {

    handleClickShowMenu () {
        document.getElementById('Lists__Modal').style.display = 'block';
    }

    handleClickHideMenu () {
        document.getElementById('Lists__Modal').style.display = 'none';
    }


    render() {
        return (
            <React.Fragment>
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
                                onClick={this.handleClickShowMenu}
                        />
                </div>
            </div>
            <div id="Lists__Modal" className="Lists__Modal">
                <span className="Lists__Modal__Close">
                    <i className="fa fa-close" onClick={this.handleClickHideMenu}></i>
                </span>
                <ul>
                    <li>New list</li>
                    <li><Link to ='/'>Logout</Link></li>
                </ul>
            </div>
            </React.Fragment>
        )
    }
}
