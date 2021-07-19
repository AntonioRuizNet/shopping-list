import React, { Component } from 'react';

import img404 from './images/404.svg';

export default class NotFound extends Component {
    render() {
        return (
            <div>
                <img src={img404} alt="404" />
            </div>
        )
    }
}