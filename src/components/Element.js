import React, { Component }  from 'react'

import './styles/Element.css';

export default class Element extends Component{
    render() {
        return (
            <div>
                {this.props.products.map( (product) => {
                return (
                    <div className="Element" key={product.id}>
                        <div className="row">
                            <div className="col-2">
                                <input type="checkbox" className="Element__Check" />
                            </div>
                            <div className="col-10">
                                {product.name}
                            </div>
                        </div>
                    </div>
                );
                })}
            </div>
        );
    }
}
