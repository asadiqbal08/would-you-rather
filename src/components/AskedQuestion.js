import React, { Component } from 'react';
import { connect } from 'react-redux';
import { saveQuestionAnswer } from '../actions/shared';

class AskedQuestion extends Component {
  
  state = {
    optionChoosed: ''
  }

  onValueChange = (event) => {
    this.setState({ optionChoosed: event.target.value });
  }

  formSubmit = e => {
    e.preventDefault();
    const option = this.state.optionChoosed
    if (option) {
      const { authUser, question, dispatch} = this.props;
      dispatch(saveQuestionAnswer(authUser, question.id, option));
    }
  };

  render() {
    const { question } = this.props;
    let disabled = false;
    if (this.state.optionChoosed === '') {
      disabled = true
    }

    return (
      <div>
        <label style={{'text-align': 'center', 'display': 'grid'}}><b>Would You Rather?</b></label>
        <form onSubmit={this.formSubmit}>
          <div className="radios-elements">
            <label>
              <input
                type="radio"
                value="optionOne"
                name="optradio"
                onChange={this.onValueChange}
              />
              {question.optionOne.text}
            </label>
            </div>
            <div className="radios-elements">
            <label>
              <input
                type="radio"
                value="optionTwo"
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
      </div>
    );
  }
}

function mapStateToProps({ authUser }) {
  return {
    authUser
  }
}

export default connect(mapStateToProps)(AskedQuestion);
