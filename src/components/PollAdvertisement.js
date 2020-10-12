import React, { Component, Fragment } from 'react';
import { Redirect } from 'react-router-dom';

export class PollAdvertisement extends Component {
  state = {
    viewQuestionPoll: false
  };
  handleClick = e => {
    this.setState(prevState => ({
      viewQuestionPoll: !prevState.viewQuestionPoll
    }));
  };

  render() {
    const { question, unanswered } = this.props;
    const buttonText = unanswered === true ? 'View Poll' : 'View Results';
     
    if (this.state.viewQuestionPoll === true) {
      return <Redirect push to={`/questions/${question.id}`} />;
    }
    return (
      <Fragment>
        <h4>
          Would you rather
        </h4>
        <p style={{ textAlign: 'center' }}>
          {question.optionOne.text}
          <br />
          or...
        </p>
        <button onClick={this.handleClick} className="app-btn">{buttonText}</button>
      </Fragment>
    );
  }
}

export default PollAdvertisement;
