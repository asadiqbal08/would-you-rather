import {
  _getUsers,
  _getQuestions,
  _saveQuestion,
  _saveQuestionAnswer,
} from '../_DATA';

import { NewUserQuestion, SaveAnswerToQuestion} from './questions'
import { AssociateUserToQuestion, saveUserAnswer } from './users'

import { fetchQuestions } from './questions';
import { fetchUsers } from './users';

export function getInitialData() {
    return (dispatch) => {
      return Promise.all([
        _getUsers(),
        _getQuestions()
      ]).then(([ users, questions ]) => {
        dispatch(fetchUsers(users));
        dispatch(fetchQuestions(questions));
      })
    };
}

export function AddNewUserQuestionHandler(optionOneText, optionTwoText, author) {
  return (dispatch) => { 
      _saveQuestion({optionOneText, optionTwoText, author})
        .then((question) => {
            dispatch(NewUserQuestion(question));
            dispatch(AssociateUserToQuestion(question, author));
        })
        .catch(() => {
          alert('There was an error. Try again.')
        })
      }
  }


export function saveQuestionAnswer (authUser, qid, answer) {

  return (dispatch) => {
      return _saveQuestionAnswer({authUser, qid, answer})
        .then(() => {
            dispatch(SaveAnswerToQuestion(authUser, qid, answer));
            dispatch(saveUserAnswer(authUser, qid, answer))
        })
        .catch(() => {
          alert('There was an error. Try again.')
        })
    }
}
