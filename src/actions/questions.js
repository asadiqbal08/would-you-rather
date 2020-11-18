export const FETCH_QUESTIONS            = 'FETCH_QUESTIONS'
export const USER_ANSWERED_TO_QUESTION  = 'USER_ANSWERED_TO_QUESTION'
export const NEW_USER_QUESTION          = 'NEW_USER_QUESTION'


export function fetchQuestions (questions) {
  return {
    type: FETCH_QUESTIONS,
    questions,
  }
}

export function SaveAnswerToQuestion (authUser, qid, answer) {
    return {
        type: USER_ANSWERED_TO_QUESTION,
        authUser,
        qid,
        answer
    }
}

export function NewUserQuestion(question) {
    return {
        type: NEW_USER_QUESTION,
        question
    }
}
