import AsyncStorage from '@react-native-community/async-storage';
const WOULD_YOU_RATHER_USERS_KEY = 'UdaciWouldYouRather:WouldYouRatherUsers'
const WOULD_YOU_RATHER_QUESTIONS_KEY = 'UdaciWouldYouRather:WouldYouRatherQuestions'


export function SaveUserToStorage ({id, name, avatarURL, answers={}, questions=[]}) {
  return AsyncStorage.mergeItem(WOULD_YOU_RATHER_USERS_KEY, JSON.stringify({
    [id]: { 
      'id': id, 
      'name': name, 
      'avatarURL': avatarURL,
      'answers': answers,
      'questions': questions
     }
  }))
}

export function UpdateUserToStorage (id, question, answer='') {
  return AsyncStorage.getItem(WOULD_YOU_RATHER_USERS_KEY)
    .then((results) => {
      const all_users = JSON.parse(results)
      let user = all_users[id]
      if (question && answer === '') {
        user['questions'].push(question)
      } 
      else if (answer) {
        user.answers[question] = answer;
      }
      all_users[id] = user
      AsyncStorage.setItem(WOULD_YOU_RATHER_USERS_KEY, JSON.stringify(all_users))
    })
}


export function UpdateQuestionToStorage (authUser, qid, answer) {
  return AsyncStorage.getItem(WOULD_YOU_RATHER_QUESTIONS_KEY)
    .then((results) => {
      const all_questions = JSON.parse(results)
      let question = all_questions[qid]
      question[answer].votes.push(authUser)
      all_questions[qid] = question
      AsyncStorage.setItem(WOULD_YOU_RATHER_QUESTIONS_KEY, JSON.stringify(all_questions))
    })
}

export function SaveQuestionToStorage ({id, author, timestamp, optionOne=[], optionTwo=[]}) {
  return AsyncStorage.mergeItem(WOULD_YOU_RATHER_QUESTIONS_KEY, JSON.stringify({
    [id]: { 
      'id': id, 
      'author': author,
      'timestamp': timestamp,
      'optionOne': optionOne,
      'optionTwo': optionTwo,
     }
  }))
}

export const getUsersFromStorage = async () => {
  try {
    //AsyncStorage.clear()
    const users = await AsyncStorage.getItem(WOULD_YOU_RATHER_USERS_KEY);
    return JSON.parse(users);

    } catch (error) {
        console.log(error, "An error occured while fetching all users data.")
    }
}

export const getQuestionsFromStorage = async () => {
  try {
    //AsyncStorage.clear()
    const questions = await AsyncStorage.getItem(WOULD_YOU_RATHER_QUESTIONS_KEY);
    return JSON.parse(questions);

    } catch (error) {
        console.log(error, "An error occured while fetching all questions data.")
    }
}



let users = {
  brittini: {
    id: 'brittini',
    name: 'Brittini',
    avatarURL: '/images/users/lego-f-2.png',
    answers: {
      '8xf0y6ziyjabvozdd253nd': 'optionOne',
      '6ni6ok3ym7mf1p33lnez': 'optionTwo',
      am8ehyc8byjqgar0jgpub9: 'optionTwo',
      loxhs1bqm25b708cmbf3g: 'optionTwo'
    },
    questions: ['8xf0y6ziyjabvozdd253nd', 'am8ehyc8byjqgar0jgpub9']
  },
  ifenna: {
    id: 'ifenna',
    name: 'Ifenna',
    avatarURL: '/images/users/deadpool.png',
    answers: {
      vthrdm985a262al8qx3do: 'optionOne',
      xj352vofupe1dqz9emx13r: 'optionTwo'
    },
    questions: ['loxhs1bqm25b708cmbf3g', 'vthrdm985a262al8qx3do']
  },
  joeylene: {
    id: 'joeylene',
    name: 'Joeylene',
    avatarURL: '/images/users/hiker.png',
    answers: {
      xj352vofupe1dqz9emx13r: 'optionOne',
      vthrdm985a262al8qx3do: 'optionTwo',
      '6ni6ok3ym7mf1p33lnez': 'optionTwo'
    },
    questions: ['6ni6ok3ym7mf1p33lnez', 'xj352vofupe1dqz9emx13r']
  },
  peter: {
    id: 'peter',
    name: 'Peter',
    avatarURL: '/images/users/lego-m.png',
    answers: {},
    questions: []
  },
  anusha: {
    id: 'anusha',
    name: 'Anusha',
    avatarURL: '/images/users/lego-f.png',
    answers: {},
    questions: []
  },
  evidence: {
    id: 'evidence',
    name: 'Evidence',
    avatarURL: '/images/users/lego.png',
    answers: {},
    questions: []
  },
  meryem: {
    id: 'meryem',
    name: 'Meryem',
    avatarURL: '/images/users/thief.png',
    answers: {},
    questions: []
  },
  james: {
    id: 'james',
    name: 'James',
    avatarURL: '/images/users/mariachi.png',
    answers: {},
    questions: []
  }
};

let questions = {
  '8xf0y6ziyjabvozdd253nd': {
    id: '8xf0y6ziyjabvozdd253nd',
    author: 'brittini',
    timestamp: 1467166872634,
    optionOne: {
      votes: ['brittini'],
      text: 'have horrible short term memory'
    },
    optionTwo: {
      votes: [],
      text: 'have horrible long term memory'
    }
  },
  '6ni6ok3ym7mf1p33lnez': {
    id: '6ni6ok3ym7mf1p33lnez',
    author: 'joeylene',
    timestamp: 1468479767190,
    optionOne: {
      votes: [],
      text: 'become a superhero'
    },
    optionTwo: {
      votes: ['joeylene', 'brittini'],
      text: 'become a supervillain'
    }
  },
  am8ehyc8byjqgar0jgpub9: {
    id: 'am8ehyc8byjqgar0jgpub9',
    author: 'brittini',
    timestamp: 1488579767190,
    optionOne: {
      votes: [],
      text: 'be telekinetic'
    },
    optionTwo: {
      votes: ['brittini'],
      text: 'be telepathic'
    }
  },
  loxhs1bqm25b708cmbf3g: {
    id: 'loxhs1bqm25b708cmbf3g',
    author: 'ifenna',
    timestamp: 1482579767190,
    optionOne: {
      votes: [],
      text: 'be a front-end developer'
    },
    optionTwo: {
      votes: ['brittini'],
      text: 'be a back-end developer'
    }
  },
  vthrdm985a262al8qx3do: {
    id: 'vthrdm985a262al8qx3do',
    author: 'ifenna',
    timestamp: 1489579767190,
    optionOne: {
      votes: ['ifenna'],
      text: 'find $50 yourself'
    },
    optionTwo: {
      votes: ['joeylene'],
      text: 'have your best friend find $500'
    }
  },
  xj352vofupe1dqz9emx13r: {
    id: 'xj352vofupe1dqz9emx13r',
    author: 'joeylene',
    timestamp: 1493579767190,
    optionOne: {
      votes: ['joeylene'],
      text: 'write JavaScript'
    },
    optionTwo: {
      votes: ['ifenna'],
      text: 'write Swift'
    }
  }
};

function generateUID() {
  return (
    Math.random()
      .toString(36)
      .substring(2, 15) +
    Math.random()
      .toString(36)
      .substring(2, 15)
  );
}

export function _getUsers() {
  return AsyncStorage.getItem(WOULD_YOU_RATHER_USERS_KEY)
    .then((results) => {
      if (results === null) {
        Object.keys(users).forEach(function(key) {
          SaveUserToStorage(users[key])
      });
    } else {
      return getUsersFromStorage()
    }
      
  })
}

export function _getQuestions() {
  return AsyncStorage.getItem(WOULD_YOU_RATHER_QUESTIONS_KEY)
    .then((results) => {
      if (results === null) {
        Object.keys(questions).forEach(function(key) {
          SaveQuestionToStorage(questions[key])
      });
    } else {
      return getQuestionsFromStorage()
    }
      
  })
}

function formatQuestion({ optionOneText, optionTwoText, author }) {
  return {
    id: generateUID(),
    timestamp: Date.now(),
    author,
    optionOne: {
      votes: [],
      text: optionOneText
    },
    optionTwo: {
      votes: [],
      text: optionTwoText
    }
  };
}

export function _saveQuestion(question) {
  return new Promise((res, rej) => {
    const authUser = question.author;
    const formattedQuestion = formatQuestion(question);
    setTimeout(() => {
      SaveQuestionToStorage(formattedQuestion)
      UpdateUserToStorage(authUser, formattedQuestion.id )
      res(formattedQuestion);
    }, 1000);
  })
}

export function _saveQuestionAnswer({ authUser, qid, answer }) {
  return new Promise((res, rej) => {
    users = getUsersFromStorage()
    questions = getQuestionsFromStorage()
    setTimeout(() => {
      UpdateUserToStorage(authUser, qid, answer )
      UpdateQuestionToStorage(authUser, qid, answer)
      res();
    }, 500);
  });
}
