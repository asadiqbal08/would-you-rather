import {
    FETCH_USERS,
    CREATE_USER,
    SAVE_USER_ANSWER,
    ASSOCIATE_USER_TO_QUESTION
  } from '../actions/users'

export default function users (state = {}, action) {
    switch(action.type) {
        case FETCH_USERS :
            return {
                ...state,
                ...action.users
            }
        case CREATE_USER:
            return {
                ...state
            }
        case SAVE_USER_ANSWER:
            return {
                ...state,
                [action.authUser]: {
                  ...state[action.authUser],
                  answers: {
                    ...state[action.authUser].answers,
                    [action.qid]: action.answer
                  }
                }
            }
        case ASSOCIATE_USER_TO_QUESTION:
            return {
                ...state,
                [action.author]: {
                ...state[action.author],
                questions: state[action.author].questions.concat([action.question.id])
                }
            }

        default :
            return state
        }
    }
