import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { handleInitialData } from '../actions/shared';
import { connect } from 'react-redux';
import Login from './Login';
import Nav from './Nav';
import Home from './Home';
import UserBallotCard from './UserBallotCard';
import NewQuestion from './NewQuestion';
import Leaderboard from './Leaderboard';
import NotFound from './NotFound';

class App extends Component {

  componentDidMount() {
    this.props.dispatch(handleInitialData());
  }
  render() {
    const { userLoggedIn } = this.props;

    return (
      <Router>
        <div className="App">
        {userLoggedIn === null ? (
            <Route
              render={() => (
                  <Login />
              )}
            />
          ) : (
          <Fragment>
            <div className='container'>
              <Nav />
                <div>
                    <Switch>
                      <Route exact path="/questions/not-found" component={NotFound} />
                      <Route exact path="/" component={Home} />
                      <Route path="/leaderboard" component={Leaderboard} />
                      <Route path="/questions/:question_id" component={UserBallotCard} />
                      <Route path="/addquestion" component={NewQuestion} />
                      <Route path="/leaderboard" component={Leaderboard} />
                    </Switch>
                </div>
            </div>
          </Fragment>
          )}
          </div>
      </Router>
    );
  }
};

function mapStateToProps({ authUser }) {
  return {
    userLoggedIn: authUser,
  };
}
  
  export default connect(mapStateToProps)(App);