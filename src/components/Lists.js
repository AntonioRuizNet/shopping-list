import React, { Component} from 'react';
import { Link } from 'react-router-dom';

import Gravatar from "./Gravatar";

import './styles/Lists.css';

export default class Lists extends Component {

    handleChange = (e) => {
        
    };

    handleClickShowMenu () {
        document.getElementById('Lists__Modal').style.display = 'block';
    }

    handleClickHideMenu () {
        document.getElementById('Lists__Modal').style.display = 'none';
    }

    handleClickNewList () {
        document.getElementById('Lists__Modal').style.display = 'none';
        document.getElementById('Lists__NewList').style.display = 'block';
    }

    handleClickCloseModalList () {
        document.getElementById('Lists__NewList').style.display = 'none';
    }

    handleClickCreateNewList = (e) => {
        let name = document.getElementById('namelist').value;
        document.getElementById('namelist').value = "";
        document.getElementById('Lists__NewList').style.display = 'none';
        const url = "http://localhost:3004/lists";
        (async () => {
            const rawResponse = await fetch(url, {
              method: 'POST',
              headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
              },
              body: JSON.stringify({
                  id: 5,
                  nombre: name
                })
            });
            console.log(rawResponse);
          })();
    }

    render() {
        return (
            <React.Fragment>
            <div className="row">
                <div className="col-10">
                    <select id="List" className="form-control Lists" onChange={this.props.onChange}>
                        <option value="false">Select an existing list or create new one on avatar</option>
                        {this.props.lists && this.props.lists.map((e, key) => {
                            return(<option value={e.id} key={e.id}>{e.nombre}</option>)
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
                    <li className="Lists__Modal__NewList" onClick={this.handleClickNewList}>New list</li>
                    <li><Link to ='/'>Logout</Link></li>
                </ul>
            </div>

            <div id="Lists__NewList" className="Lists__NewList">
                <span className="Lists__Modal__Close">
                    <i className="fa fa-close" onClick={this.handleClickCloseModalList}></i>
                </span>
                <div className="row">
                    <div className="col-12">
                        <label>Name list</label>
                        <input id="namelist" type="text" className="form-control" />
                    </div>
                    <div className="col-12">
                        <br/>
                        <input type="button" 
                                className="form-control btn btn-info" 
                                onClick={this.handleClickCreateNewList}
                                value="Create"
                        />
                    </div>
                </div>
            </div>
            </React.Fragment>
        )
    }
}
