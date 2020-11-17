import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import Login from './components/Login';
import Nav from './components/Nav';
import Home from './components/Home';
import UserBallotCard from './components/UserBallotCard';
import NewQuestion from './components/NewQuestion';
import Leaderboard from './components/Leaderboard';
import NotFound from './components/NotFound';

class App extends Component {

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