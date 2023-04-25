export interface IQuestion {
  user: string;
  question: string;
  answer?: string;
}

const questionsDB: IQuestion[] = [
  {
    user: "ls.joseignacio@gmail.com",
    question: "Como?",
    answer: "Comiendo"
  },
  {
    user: "carmenbonita.hola@gmail.com",
    question: "Que?",
    answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
  },
  {
    user: "ls.joseignacio@gmail.com",
    question: "Quien?",
  }
]

export const getUserQuestions = (userEmail: string): IQuestion[] => {
  return questionsDB.filter(question => question.user === userEmail);
}

export const getQuestionsFilter = (query: string): IQuestion[] => {
  query = query.toLowerCase()
  return questionsDB.filter(question => {
    return question.question.toLowerCase().includes(query) || question.answer?.toLowerCase().includes(query)
  })
}
