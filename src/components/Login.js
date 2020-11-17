import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { setAuthUser } from '../actions/authUser';
import RegisterUser from './RegisterUser';
import { getInitialData } from '../actions/shared';

class Login extends Component {
  state = {
    userId: null,
    renderTo: '',
  }

  handleSelectionChanged = function(event) {
    const userId = event.target.value;

    this.setState(function(previousState) {
      return {
        ...previousState,
        userId,
      };
    });
  }

  handleLogin = function(event) {
    event.preventDefault();
    const { userId } = this.state;
    this.props.dispatch(setAuthUser(userId));

    this.setState(function(previousState) {
      return {
        ...previousState,
        renderTo: 'dashboard',
      };
    });
  }

  handleRegistration = function(event) {
    event.preventDefault();
    this.setState(function(previousState) {
      return {
        ...previousState,
        renderTo: 'registration',
      };
    });
  }

  componentDidMount() {
    this.props.dispatch(setAuthUser(null))
    this.props.dispatch(getInitialData());
  }

  render() {
    const { userId, renderTo } = this.state;
    const { users } = this.props;
    const selected = userId ? userId : -1;
    const avatar = userId ? users[userId].avatarURL : '/images/users/wouldYouRather.png';


    if (renderTo === 'dashboard') {
      return <Redirect to='/' />
    }
    
    else if (renderTo === 'registration') {
      return (
      <RegisterUser/>
      )
    }

    return (
      <div>
        <h3 className='center'>Login</h3>
        <div className='login-container'>
        {(selected ? <span>Please click the login button.</span>: <span>Select a user and click the login button.</span> )}
          <div className='user-select'>
           <img
              src={avatar}
              alt={`General Avatar`}
              className='avatar'
            />
            <hr/>
            <select value={selected} onChange={(event) => this.handleSelectionChanged(event)}>
              <option value={-1} disabled>Select user to login...</option>
              {Object.keys(users).map(function(key) {
                return (
                  <option className='options-data' value={users[key].id} key={key} style={{ backgroundImage: `url(${users[key].avatarURL})`}}>
                    {users[key].id}
                  </option>
                );
              })}
            </select>
          </div>
          <button className='app-btn' disabled={userId === null} onClick={(event) => this.handleLogin(event)}>
            Login
          </button>
          <button className='app-btn' onClick={(event) => this.handleRegistration(event)}>
            Create New User
          </button>
        </div>
      </div>
    );
  }
}

function mapStateToProps({ users }) {
  return {
    users,
  };
}

export default connect(mapStateToProps)(Login)