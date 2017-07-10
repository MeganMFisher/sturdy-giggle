import React, { Component } from 'react';
import { connect } from 'react-redux';
import { logInUser } from './redux/reducer';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      newUser: ''
    }

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();

    console.log('Logging in as', this.state.newUser);

    this.props.logInUser(this.state.newUser);

    this.setState({
      newUser: ''
    })
  }

  handleChange(e) {
    this.setState({
      newUser: e.target.value
    })
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Redux Demo</h2>
        </div>
        <h5> Currently logged in as {this.props.loggedInUser || "NOT LOGGED IN"} </h5>

        <form onSubmit={this.handleSubmit}>
          <input type="text" value={this.state.newUser} onChange={this.handleChange} />
          <button>Log in</button>
        </form>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    loggedInUser: state.loggedInUser
  }
}

export default connect(
  mapStateToProps, 
  {
    logInUser: logInUser
  }
)(App);
