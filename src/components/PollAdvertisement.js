import React, { Component } from 'react';
import { Redirect, Link } from 'react-router-dom';

export class PollAdvertisement extends Component {
  state = {
    viewQuestionPoll: false
  };
  
  render() {
    const { question, unanswered } = this.props;
    const buttonText = unanswered === true ? 'Answer Poll' : 'Poll Results';
     
    if (this.state.viewQuestionPoll === true) {
      return <Redirect push to={`/questions/${question.id}`} />;
    }
    return (
      <div className="poll-advertisement">
        <h4>
          Would you rather
        </h4>
        <p className='center mb-4'>
          {question.optionOne.text}
          <br />
          or...
        </p>
        <div className='link'>
          <Link to={`/questions/${question.id}`} className="link-btn">{buttonText}</Link>
        </div>
      </div>
    );
  }
}

export default PollAdvertisement;
