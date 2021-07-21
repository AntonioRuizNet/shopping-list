import React, { Component }  from 'react';

import './styles/Products.css';

export default class Products extends Component{
    render() {
        return (
            <React.Fragment>
            {this.props.data.map( (e) => {
            return (
                <div key={e.id} className="Products"> 
                    <div className="row">
                        <div className="col-2">
                            <input type="checkbox" className="Products__Check" />
                        </div>
                        <div className="col-10">
                            {e.nombre}
                        </div>
                    </div>
                </div>
            );
            })}
            </React.Fragment>
        )
    }
}
