import React, { Component} from 'react';
import { Link } from 'react-router-dom';
import md5 from 'md5';

import Gravatar from "./Gravatar";
import UserProfile from './UserProfile';

import './styles/Lists.css';

export default class Lists extends Component {

    handleClickShowMenu () {
        document.getElementById('Lists__Modal').style.display = 'block';
    }

    handleClickHideMenu () {
        document.getElementById('Lists__Modal').style.display = 'none';
    }

    handleSelectList () {
        const id = document.getElementById('List').value;
        console.log(id);

        const url = "https://antonioruiz.net/apps/listadecompra/api";
        const hash = md5(UserProfile.getEmail());
        const url_final = `${url}/get_public_product_list/${hash}/${id}`;
        console.log(url_final);
        const fetchData = async () => {
          try {
            const response = await fetch(url_final);
            const json = await response.json();
            UserProfile.setList(json)
          } catch (error) {
            console.log("error", error);
          }
        };
        fetchData();
    }

    

    render() {
        return (
            <React.Fragment>
            <div className="row">
                <div className="col-10">
                    <select id="List" className="form-control Lists" onChange={this.props.onChange}>
                        <option value="false">Select an existing list</option>
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
                    <li>New list</li>
                    <li><Link to ='/'>Logout</Link></li>
                </ul>
            </div>
            </React.Fragment>
        )
    }
}
