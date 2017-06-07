import React, { Component } from 'react';
import Accounts from './Accounts';
import { Link, Redirect, withRouter } from 'react-router-dom'
import createBrowserHistory from 'history/createBrowserHistory';


class Header extends Component {
  onBinClick(e){
    e.preventDefault();
    Meteor.call('bins.insert', (err, bin) => {
      const url = `/bins/${bin}`;
      this.props.history.push(url);
    });
  }

  render() {
    return (
      <nav className="nav navbar-default">
        <div className="navbar-header">
          <Link to="/" className="navbar-brand">MarkBin</Link>
        </div>
        <ul className="nav navbar-nav">
          <li>
            <Accounts />
          </li>
          <li>
            <a href="#" onClick={this.onBinClick.bind(this)}>Create Bin</a>
          </li>
        </ul>
      </nav>
    );
  }
}

export default withRouter(Header);
