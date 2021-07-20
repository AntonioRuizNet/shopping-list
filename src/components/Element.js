import React, { Component }  from 'react'

import './styles/Element.css';

export default class Element extends Component{
    render() {
        return (
            <div>
                    <div className="Element" key={this.props.id}>
                        <div className="row">
                            <div className="col-2">
                                <input type="checkbox" className="Element__Check" />
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
