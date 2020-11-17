import React from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { setAuthUser } from '../actions/authUser';

const Nav = (props) => {
  const { authUser, users } = props
  const avatar = users[authUser].avatarURL
  const tags = [
    {
      id: 1,
      title: 'Home',
      path: '/'
    },
    {
      id: 2,
      title: 'leaderboard',
      path: '/leaderboard'
    },
    { 
      id: 3,
      title: 'New Poll',
      path: '/addquestion'
    },
  ]

  return (
    <nav className='topnav'>
      <ul className="container-fluid" >
        {tags.map(t =>
          <li className="tags" key={t.id}>
            <NavLink
              to={t.path} exact
            >
              {t.title}
            </NavLink>
          </li>
        )}
          <li>
          <NavLink activeClassName='active' activeStyle={{
            color: 'white'
            }} to='/' exact onClick={() => {props.dispatch(setAuthUser(null))}}>
          <div className="nav-user">
            Logout 
            <img
              src={avatar}
              alt={`Avatar of ${authUser}`}
              className='nav-avatar'
              title={ authUser }
            />
          </div>
          </NavLink>
          </li>
        </ul>
      </nav>
      )
    }

function mapStateToProps({ authUser, users }) {
  return {
    authUser,
    users
  };
}

export default connect(mapStateToProps)(Nav)