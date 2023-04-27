export interface IQuestion {
  user: string;
  question: string;
  answer?: string;
  date: Date;
  subscribe?: boolean
  isFaq?: boolean
}

export const faq: IQuestion[] = [
  {
    user: "admin",
    question: "¿Cómo puedo hacerme socio de MainLiber?",
    date: new Date("2000/1/1"),
    answer:
      "Contacta con nosotros en fake@email.fk y conoce más sobre nuestro servicio personalizado.",
    isFaq: true
  },
  {
    user: "admin",
    question: "¿Cómo puedo hacerme socio de MainLiber?",
    date: new Date("2000/1/1"),
    answer:
      "Contacta con nosotros en fake@email.fk y conoce más sobre nuestro servicio personalizado.",
    isFaq: true
  },
  {
    user: "admin",
    question: "¿Cómo puedo hacerme socio de MainLiber?",
    date: new Date("2000/1/1"),
    answer:
      "Contacta con nosotros en fake@email.fk y conoce más sobre nuestro servicio personalizado.",
    isFaq: true
  },
  {
    user: "admin",
    question: "¿Cómo puedo hacerme socio de MainLiber?",
    date: new Date("2000/1/1"),
    answer:
      "Contacta con nosotros en fake@email.fk y conoce más sobre nuestro servicio personalizado.",
    isFaq: true
  },
  {
    user: "admin",
    question: "¿Cómo puedo hacerme socio de MainLiber?",
    date: new Date("2000/1/1"),
    answer:
      "Contacta con nosotros en fake@email.fk y conoce más sobre nuestro servicio personalizado.",
    isFaq: true
  },
];

const API_URL = process.env.NEXT_PUBLIC_API_URL || "";

export const getUserQuestions = async (userEmail: string): Promise<IQuestion[]> => {
  const headers = {
    'content-type': 'application/json'
  }
  const requestBody = {
    query: `query getUserQuestions($userEmail: String) {userQuestions(query: $userEmail){
        user,
        question,
        answer,
        date
      }}`,
    variables: { userEmail }
  }
  const options = {
    method: "POST",
    headers,
    body: JSON.stringify(requestBody)
  }
  const res = await fetch(API_URL, options)
  const data = await res.json()
  return data.data.userQuestions;
}

export const getQuestionsFilter = async (query: string): Promise<IQuestion[]> => {

  const headers = {
    'content-type': 'application/json'
  }
  const requestBody = {
    query: `query searchQuestions($query: String) {search(query: $query){
        __typename,
        user,
        question,
        answer,
        date
      }}`,
    variables: { query }
  }
  const options = {
    method: "POST",
    headers,
    body: JSON.stringify(requestBody)
  }
  const res = await fetch(API_URL, options)
  const data = await res.json()
  return data.data.search;
}

export const createNewQuestion = async (userEmail: string, question: string, subscribe: boolean) => {

  const headers = {
    'content-type': 'application/json'
  }
  const requestBody = {
    query: `query addNewQuestion($userEmail: String, $question: String, $subscribe: Boolean) {addQuestion(user: $userEmail, question: $question, subscribe: $subscribe){
        __typename,
        user,
        question,
        answer,
        date
      }}`,
    variables: { userEmail, question, subscribe }
  };
  const options = {
    method: "POST",
    headers,
    body: JSON.stringify(requestBody)
  };
  const res = await fetch(API_URL, options);
  const data = await res.json();
  return data.data.addQuestion;
}
