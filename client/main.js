import React from 'react';
import ReactDOM from 'react-dom';
import App from '../imports/components/App';
import { Bins } from '../imports/collections/bins';

Meteor.startup(() => {
  ReactDOM.render(
    <App />, 
    document.getElementById('app')
  );
});