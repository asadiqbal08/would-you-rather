import React, { Component } from 'react';
import { connect } from 'react-redux';
import ResultCard from './ResultCard'

export class Result extends Component {
  handleClick = () => {
    this.props.history.push('/');
  };

  getBackGroundColor = (optionOneVotes, optionTwoVotes, colorFor) => {
    let background = '#f4f4f4'
    let color = '#000000'

    if (colorFor === 'optionOne') {
      if (optionOneVotes > optionTwoVotes) {
        background = 'honeydew'
        color = '#008000'
      } 
    }

    if (colorFor === 'optionTwo') {
      if (optionTwoVotes > optionOneVotes) {
        background = 'honeydew'
        color = '#008000'
      }
    }
  
    return {
      'background': background,
      'color': color
    }
  }

  render() {
    const { question, user } = this.props;
    const optionOneVotes = question.optionOne.votes.length;
    const optionTwoVotes = question.optionTwo.votes.length;
    const totalVotes = optionOneVotes + optionTwoVotes;
    const userVote = user.answers[question.id];
    
    return (
      <div className="container">
      <div className="row result-rows">
        <h3>Results:</h3>
        <div className="col">
          <div className='optionOne'>
            {userVote === 'optionOne' && (
              <div className="card-your-vote">Your Vote</div>
            )}
            <ResultCard 
              option={question.optionOne}
              votes={optionOneVotes}
              total_votes={totalVotes}
              styles={this.getBackGroundColor(optionOneVotes, optionTwoVotes, 'optionOne')}
            />
          </div>
          <div className='optionTwo'>
            {userVote === 'optionTwo' && (
              <div className="card-your-vote">Your Vote</div>
            )}
            <ResultCard 
              option={question.optionTwo}
              votes={optionTwoVotes}
              total_votes={totalVotes}
              styles={this.getBackGroundColor(optionOneVotes, optionTwoVotes, 'optionTwo')}
            />
          </div>
        </div>
      </div>
    </div>   
    );
  }
}

function mapStateToProps({ users, authUser }) {
  const user = users[authUser];
  return {
    user
  };
}

export default connect(mapStateToProps)(Result);
