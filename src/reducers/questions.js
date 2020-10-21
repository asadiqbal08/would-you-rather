import {
    FETCH_QUESTIONS,
    USER_ANSWERED_TO_QUESTION,
    NEW_USER_QUESTION
  } from '../actions/questions'

export default function questions (state = {}, action) {
    switch(action.type) {
        case FETCH_QUESTIONS :
            const { questions } = action
            return {
                ...state,
                ...questions
            }
        case USER_ANSWERED_TO_QUESTION:
            return {
                ...state,
                [action.qid]: {
                ...state[action.qid],
                [action.answer]: {
                    ...state[action.qid][action.answer],
                    votes: state[action.qid][action.answer].votes.concat([action.authUser])
                }
            }
        }
        case NEW_USER_QUESTION:
            return {
                ...state,
                [action.question.id]: action.question
            }
        default :
            return state
        }
    }
