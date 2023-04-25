export interface IQuestion {
  user: string;
  question: string;
  answer?: string;
  date?: Date;
  subscribe?: boolean
}

const questionsDB: IQuestion[] = [
  {
    user: "carmenbonita.hola@gmail.com",
    question: "Lorem ipsum",
    answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    date: new Date("2023/03/01")
  },
  {
    user: "ls.joseignacio@gmail.com",
    question: "¿Cómo es la intro del señor de los anillos?",
    answer: `Tres Anillos para los Reyes Elfos bajo el cielo.
    Siete para los Señores Enanos en casas de piedra.
    Nueve para los Hombres Mortales condenados a morir.
    Uno para el Señor Oscuro, sobre el trono oscuro
    en la Tierra de Mordor donde se extienden las Sombras.
    Un Anillo para gobernarlos a todos. Un Anillo para encontrarlos,
    un Anillo para atraerlos a todos y atarlos en las tinieblas
    en la Tierra de Mordor donde se extienden las Sombras`,
    date: new Date("2023/02/01")
  }
]

export const getUserQuestions = (userEmail: string): IQuestion[] => {
  return questionsDB.filter(question => question.user === userEmail);
}

export const getQuestionsFilter = (query: string): IQuestion[] => {

  if (query === "") {
    return questionsDB.slice(questionsDB.length - 10)
  }
  query = query.toLowerCase()
  return questionsDB.filter(question => {
    return question.question.toLowerCase().includes(query) || question.answer?.toLowerCase().includes(query)
  })
}

export const createNewQuestion = (userEmail: string, question: string, subscribe: boolean) => {
  questionsDB.push({
    user: userEmail,
    question,
    date: new Date(),
    subscribe: subscribe
  })
}
