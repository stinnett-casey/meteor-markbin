import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Template } from 'meteor/templating';
import { Blaze } from 'meteor/blaze';

export default class Accounts extends Component {
  componentDidMount(){ /*Called when rendered to screen*/
    //Render the Blaze accounts form and then find the div
    // that we just rendered in the render method and place
    // the Blaze accounts form in that div
    this.view = Blaze.render(Template.loginButtons, 
      ReactDOM.findDOMNode(this.refs.container));
  }

  componentWillUnmount(){ /*Called when rendered to screen*/
    // Go find the forms we created and destroy them
    // We need to clean up the forms ourselves 
    Blaze.remove(this.view);
  }

  render() {
    return (
      <div ref="container"></div>
    );
  }
}
