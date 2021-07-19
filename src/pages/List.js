import React from 'react'

import Element from '../components/Element';
import Search from '../components/Search';

import Api from '../Api.json';

export default function List() {  
    return (
        <React.Fragment>
            <Search />
            <Element products={Api} />
        </React.Fragment>
    )
}
