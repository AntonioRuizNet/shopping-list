import React, { Component }  from 'react';

import './styles/Products.css';

export default class Products extends Component{
    render() {
        return (
            <React.Fragment>
            {this.props.data.map( (e) => {
                let checked = false; if(e.estado==0) checked = true;
                return (
                    <div key={e.id} className="Products"> 
                        <div className="row">
                            <div className="col-2">
                                <input  name={e.id} 
                                        type="checkbox" 
                                        className="Products__Check" 
                                        onClick={this.props.onClick}
                                        defaultChecked={e.estado}/>
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
