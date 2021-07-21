import React, { Component }  from 'react';

import './styles/Products.css';

export default class Products extends Component{
    render() {
        return (
            <div>
                    <div className="Products">
                        <div className="row">
                            <div className="col-2">
                                <input type="checkbox" className="Products__Check" />
                            </div>
                            <div className="col-10">
                                {this.props.nombre}
                            </div>
                        </div>
                    </div>
            </div>
        );
    }
}
