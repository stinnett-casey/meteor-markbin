import React, { Component } from 'react';
import CodeMirror from 'react-codemirror';
import 'codemirror/mode/markdown/markdown';

export default class BinsEditor extends Component {
  onEditorChange(content){
    Meteor.call('bins.update', this.props.bin, content);
  }

  render() {
    // console.log(this.props.bin._id);
    return (
      <div className="col-xs-8">
        <h5>Input</h5>
        <CodeMirror
          value={this.props.bin.content} 
          onChange={this.onEditorChange.bind(this)} 
          options={{mode: 'markdown', lineNumbers: true}} />
      </div>
    );
  }
}
