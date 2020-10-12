import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { newQuestionHandler } from '../actions/questions';

export class NewQuestion extends Component {
  
  state = {
    questionSubmited: false,
    option1: '',
    option2: ''
  };
  handleChange = e => {
    this.setState({ [e.target.id]: e.target.value });
  };
  handleSubmit = e => {
    e.preventDefault();
    const { authUser } = this.props;
    const { option1, option2 } = this.state;

    new Promise((res, rej) => {
      this.props.dispatch(newQuestionHandler(option1, option2, authUser));
      setTimeout(() => res('success'), 1000);
    }).then(() => {
      this.setState({
        option1: '',
        option2: ''
      });
      this.setState({ questionSubmited: true });
    });
  };
  render() {
    const disabled = (this.state.option1 === '' || this.state.option2 === '') ? 'disabled' : '';

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
                <input id='option1' type="text" className='w-75' placeholder='Enter OptionOne text here' onChange={this.handleChange} value={this.state.option1}/>
              </div>
            </div>
            <div className='row align-items-center h-100'>
              <div className='col'><b>OR</b></div>
            </div>
            <div className='row align-items-center h-100'>
              <div className='col'>
                <input id='option2' type="text" className='w-75' placeholder='Enter OptionTwo text here' onChange={this.handleChange} value={this.state.option2}/>
              </div>
            </div>
            <div className='row align-items-center h-100'>
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
