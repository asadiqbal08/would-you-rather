import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Tabs, Tab } from 'react-bootstrap';
import UserBallotCard from './UserBallotCard'   
export class Home extends Component {

  render() {

    const {answered, unanswered} = this.props


    return (
      <div className="container">
          <Tabs
            id="controlled-tab-example"
            className="nav nav-tabs justify-content-center"
          >
            <Tab eventKey="unanswered" title="Unanswered Questions">
              {unanswered.map(question => (
              <UserBallotCard
                key={question.id}
                question_id={question.id}
                unanswered={true}
              />
              ))}
            </Tab>
            <Tab eventKey="answered" title="Answered Questions">
              {answered.map(question => (
              <UserBallotCard
                key={question.id}
                question_id={question.id}
                unanswered={false}
              />
              ))}
            </Tab>
          </Tabs>
      </div>
    );
  }  
}

function mapStateToProps({ authUser, users, questions }) {
  const answeredIds = Object.keys(users[authUser].answers);
  const unanswered = Object.values(questions)
    .filter(question => !answeredIds.includes(question.id))
    .sort((a, b) => b.timestamp - a.timestamp);
  const answered = Object.values(questions)
    .filter(question => answeredIds.includes(question.id))
    .sort((a, b) => b.timestamp - a.timestamp);

  return {
      answered,
      unanswered
  };
}

export default connect(mapStateToProps)(Home);
