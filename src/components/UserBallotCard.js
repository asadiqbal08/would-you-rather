import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { PollAdvertisement } from './PollAdvertisement'
import AskedQuestion from './AskedQuestion'
import Result from './Result'

export class UserBallotCard extends Component {
    render() {
        const { question, questionAuthor, type, redirectToNotFound, unanswered} = this.props;
        if (redirectToNotFound === true) {
            return <Redirect to="/questions/not-found" />;
          }
        return(
            <div className="user-ballot card text-center mx-auto w-50 p-0 text-black">
                <div className="card-header">
                    {questionAuthor.name} asks:
                </div>
                <div className="card-body">
                    <span>
                        <img alt="User Avatar" className="card-img" src={questionAuthor.avatarURL}/>
                    </span>
                    <span className='poll'>
                    {type === 'POLL_ADVERTISEMENT' && 
                        <PollAdvertisement question={question} unanswered={unanswered} />
                    }
                    {type === 'POLL_ASKED_QUESTION' && 
                        <AskedQuestion question={question} />
                    }
                    {type === 'POLL_RESULT' && 
                        <Result question={question} />
                    }
                    </span>
                </div>
          </div>
          );
    } 
}

function mapStateToProps({users, questions, authUser}, { match, question_id }) {
    let question,
        type,
        redirectToNotFound,
        questionAuthor = false
    
    if (question_id !== undefined) {
        question = questions[question_id];
        questionAuthor = users[question.author];
        type = 'POLL_ADVERTISEMENT';
    } else {
        const { question_id } = match.params;
        question = questions[question_id];
        
        if (question === undefined) {
            redirectToNotFound = true;
        } else {
            questionAuthor = users[question.author];
            type = 'POLL_ASKED_QUESTION';
            const doesAnswerExist = Object.keys(users[authUser].answers).filter(answerId => answerId === question.id)
            if (doesAnswerExist.length > 0 ) {
                type = 'POLL_RESULT';
            }
        }
    }

    return {
        question,
        questionAuthor,
        redirectToNotFound,
        type
    }
}

export default connect(mapStateToProps)(UserBallotCard);