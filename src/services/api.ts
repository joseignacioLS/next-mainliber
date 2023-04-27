export interface IQuestion {
  _id: string;
  user: string;
  question: string;
  answer?: string;
  date: Date;
  subscribe?: boolean
  isFaq?: boolean
}

const API_URL = process.env.NEXT_PUBLIC_API_URL || "";

export const getUserQuestions = async (userEmail: string): Promise<IQuestion[]> => {
  const headers = {
    'content-type': 'application/json'
  }
  const requestBody = {
    query: `query getUserQuestions($userEmail: String) {userQuestions(query: $userEmail){
      _id,
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
      _id,
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
      _id,
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

export const getPageOfQuestionsRequest = async (page: number) => {

  const headers = {
    'content-type': 'application/json'
  }
  const requestBody = {
    query: `query getPage($page: Int) { page(query: $page){
      questions {

        _id,
        user,
        question,
        answer,
        date,
        subscribe
      },
      maxPage
      }}`,
    variables: { page }
  }
  const options = {
    method: "POST",
    headers,
    body: JSON.stringify(requestBody)
  };
  const res = await fetch(API_URL, options);
  const data = await res.json();
  return data.data.page;
}