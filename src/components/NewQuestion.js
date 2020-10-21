import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { AddNewUserQuestionHandler } from '../actions/shared';

export class NewQuestion extends Component {
  
  state = {
    questionSubmited: false,
    first_option: '',
    second_option: ''
  };
  handleChange = e => {
    this.setState({ [e.target.id]: e.target.value });
  };
  handleSubmit = e => {
    e.preventDefault();
    const { authUser, dispatch } = this.props;
    const { first_option, second_option } = this.state;

    new Promise((res, rej) => {
      dispatch(AddNewUserQuestionHandler(first_option, second_option, authUser));
      setTimeout(() => res('success'), 1000);
    }).then(() => {
      this.setState({
        first_option: '',
        second_option: ''
      });
      this.setState({ questionSubmited: true });
    });
  };
  render() {
    const disabled = (this.state.first_option === '' || this.state.second_option === '') ? 'disabled' : '';

    if (this.state.questionSubmited) {
      return <Redirect to="/" />;
    }
    return (

      <div className="card new-question">
        <div className="card-header text-center">
          <h3>Create New Question</h3>
        </div>
        <div className="card-body">
          <h6 className="card-title">Complete the question:</h6>
          <div className='container h-100 text-center'>
          <h5 className="text-left">Would you rather...</h5>
            <div className="row align-items-center h-100">
              <div className='col'>
                <input id='first_option' type="text" className='w-75' placeholder='Enter OptionOne text here' onChange={this.handleChange} value={this.state.first_option}/>
              </div>
            </div>
            <div className='row align-items-center h-100'>
              <div className='col'><b>OR</b></div>
            </div>
            <div className='row align-items-center h-100'>
              <div className='col'>
                <input id='second_option' type="text" className='w-75' placeholder='Enter OptionTwo text here' onChange={this.handleChange} value={this.state.second_option}/>
              </div>
            </div>
            <div className='row align-items-center question-submit-button h-100'>
              <div className='col'>
                <button className={`app-btn ${disabled && "btn-outline-secondary"}`} disabled={disabled} onClick={this.handleSubmit}>Submit</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps({ authUser }) {
  return {
    authUser
  };
}

export default connect(
  mapStateToProps,
)(NewQuestion);
