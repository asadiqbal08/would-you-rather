import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { saveAnswerHandler } from '../actions/users';

class AskedQuestion extends Component {
  static propTypes = {
    authUser: PropTypes.string.isRequired,
    question: PropTypes.object.isRequired
  };
  state = {
    selectedOption: ''
  };

  onValueChange = (event) => {
    this.setState({ selectedOption: event.target.value });
  }

  formSubmit = e => {
    e.preventDefault();
    if (this.state.selectedOption !== '') {
      const { authUser, question, saveAnswerHandler} = this.props;
      saveAnswerHandler(authUser, question.id, this.state.selectedOption);
    }
  };

  render() {
    const { question } = this.props;
    const disabled = this.state.selectedOption === '' ? true : false;

    return (
      <form onSubmit={this.formSubmit}>
      <div className="radioa">
        <label>
          <input
            type="radio"
            value="optionOne"
            checked={this.state.selectedOption === 'optionOne'}
            onChange={this.onValueChange}
            name="optradio"
          />
           {question.optionOne.text}
        </label>
      </div>
      <div className="radios">
        <label>
          <input
            type="radio"
            value="optionTwo"
            checked={this.state.selectedOption === "optionTwo"}
            onChange={this.onValueChange}
            name="optradio"
          />
           {question.optionTwo.text}
        </label>
      </div>
      <button className={`app-btn ${disabled && "btn-outline-secondary"}`} type="submit" disabled={disabled}>
        Submit
      </button>
    </form>
    );
  }
}

function mapStateToProps({ authUser }) {
  return {
    authUser
  }
}

export default connect(mapStateToProps, {saveAnswerHandler})(AskedQuestion);
