import React from 'react';

import Element from '../components/Element';
import Search from '../components/Search';

import Api from '../Api.json';

export default function List(props) {  
    return (
        <React.Fragment>
            <Search mail={props.location.params.email}/>
            <Element products={Api} />
        </React.Fragment>
    )
}
