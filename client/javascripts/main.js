'use strict';

import global from 'global';
import document from 'global/document';

import React from 'react';
import Home from './app/components/home';

let mountNode = document.getElementById('app');
React.render(<Home />, mountNode);

global.React = React;
