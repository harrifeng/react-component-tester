"use strict";

import React from 'react';
import ReactDOM from 'react-dom';

import {Button} from 'react-bootstrap';
import {ButtonToolbar} from 'react-bootstrap';

let data = JSON.parse(localStorage.getItem('data'));

if (!data) {
    data = {};
}


const buttonsInstance = (
    <ButtonToolbar>
    {/* Standard button */}
    <Button>Default</Button>

    {/* Provides extra visual weight and identifies the primary action in a set of buttons */}
    <Button bsStyle="primary">Primary</Button>

    {/* Indicates a successful or positive action */}
    <Button bsStyle="success">Success</Button>

    {/* Contextual button for informational alert messages */}
    <Button bsStyle="info">Info</Button>

    {/* Indicates caution should be taken with this action */}
    <Button bsStyle="warning">Warning</Button>

    {/* Indicates a dangerous or potentially negative action */}
    <Button bsStyle="danger">Danger</Button>

    {/* Deemphasize a button by making it look like a link while maintaining button behavior */}
    <Button bsStyle="link">Link</Button>
    </ButtonToolbar>
);

/* ReactDOM.render(buttonsInstance, mountNode);*/

ReactDOM.render(
    /* <h1 id="my-heading">
     * <span> Hello <em> World</em></span>
     * </h1>*/
    buttonsInstance,
    document.getElementById('pad')
);
