'use strict';

import React from 'react';
import ReactDom from 'react-dom';
import Demo  from './demo';

window.onload = () => {
    ReactDom.render(
        React.createElement(Demo),
        window.document.getElementById('content')
    );
};
