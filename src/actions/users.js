import { SaveUserToStorage } from '../_DATA'

export const FETCH_USERS                = 'FETCH_USERS'
export const CREATE_USER                = 'CREATE_USER'
export const SAVE_USER_ANSWER           = 'SAVE_USER_ANSWER'
export const ASSOCIATE_USER_TO_QUESTION = 'ASSOCIATE_USER_TO_QUESTION'

export function fetchUsers (users) {
  return {
    type: FETCH_USERS,
    users,
  }
}

export function AssociateUserToQuestion (question, author) {
    return {
        type: ASSOCIATE_USER_TO_QUESTION,
        question,
        author

    }
}

export function saveUserAnswer(authUser, qid, answer) {
    return {
        type: SAVE_USER_ANSWER,
        authUser,
        qid,
        answer

    }
}

export const createNewUser = (user) => (dispatch) => {
  SaveUserToStorage(user)
  dispatch({type: CREATE_USER, user});
  return true
}
