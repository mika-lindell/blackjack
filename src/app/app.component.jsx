import React from 'react';
import {render} from 'react-dom';

import AwesomeComponent from '../awesome/awesome.component.jsx';

import './app.component.scss';

class AppComponent extends React.Component {
  render () {
    return (
      <div>
        <p> Hello React!</p>
        <AwesomeComponent />
      </div>
    );
  }
}

export default AppComponent;