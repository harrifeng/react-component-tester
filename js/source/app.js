"use strict";

import React from 'react';
import ReactDOM from 'react-dom';

let data = JSON.parse(localStorage.getItem('data'));

if (!data) {
    data = {};
}

ReactDOM.render(
    <h1 id="my-heading">
      <span> Hello <em> World</em></span>
    </h1>,
    document.getElementById('pad')
);
