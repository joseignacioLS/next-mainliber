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

export const getUserQuestionsRequest = async (userEmail: string): Promise<IQuestion[]> => {
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
  try {
    const res = await fetch(API_URL, options);
    const data = await res.json();
    return data.data.userQuestions;
  }
  catch (err) {
    console.log(err);
    return [];
  }
}

export const getQuestionsFilterRequest = async (query: string): Promise<IQuestion[]> => {

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
  try {

    const res = await fetch(API_URL, options)
    const data = await res.json()
    return data.data.search;
  }
  catch (err) {
    console.log(err)
    return [];
  }
}

export const createNewQuestionRequest = async (userEmail: string, question: string, subscribe: boolean) => {

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
  try {

    const res = await fetch(API_URL, options);
    const data = await res.json();
    return data.data.addQuestion;
  }
  catch (err) {
    console.log(err);
    return {};
  }
}

export const getPageOfQuestionsRequest = async (page: number, onlyUnanswered: boolean, showFaq: boolean) => {

  const headers = {
    'content-type': 'application/json'
  }
  const requestBody = {
    query: `query getPage($page: Int, $onlyUnanswered: Boolean, $showFaq: Boolean) { page(query: $page, onlyUnanswered: $onlyUnanswered, showFaq: $showFaq){
      questions {
        _id,
        user,
        question,
        answer,
        date,
        subscribe,
        isFaq
      },
      maxPage
      }}`,
    variables: { page, onlyUnanswered, showFaq }
  }
  const options = {
    method: "POST",
    headers,
    body: JSON.stringify(requestBody)
  };
  try {

    const res = await fetch(API_URL, options);
    const data = await res.json();
    return data.data.page;
  }
  catch (err) {
    console.log(err);
    return [];
  }
}


export const getFaqQuestionsRequest = async () => {

  const headers = {
    'content-type': 'application/json'
  }
  const requestBody = {
    query: `{faq(nothing: ""){
      
        _id,
        user,
        question,
        answer,
        date,
        subscribe,
      }}`
  }
  const options = {
    method: "POST",
    headers,
    body: JSON.stringify(requestBody)
  };
  try {

    const res = await fetch(API_URL, options);
    const data = await res.json();
    return data.data.faq;
  }
  catch (err) {
    console.log(err);
    return [];
  }
}


export const answerQuestionRequest = async (id: string, answer: string) => {

  const headers = {
    'content-type': 'application/json'
  }
  const requestBody = {
    query: `query answerQuestion($id: String, $answer: String) {answerQuestion(id: $id, answer: $answer){
      _id,
        __typename,
        user,
        question,
        answer,
        date
      }}`,
    variables: { id, answer }
  };
  const options = {
    method: "POST",
    headers,
    body: JSON.stringify(requestBody)
  };
  try {

    const res = await fetch(API_URL, options);
    const data = await res.json();
    return data.data.addQuestion;
  }
  catch (err) {
    console.log(err);
    return {};
  }
}

export const deleteQuestionRequest = async (id: string) => {

  const headers = {
    'content-type': 'application/json'
  }
  const requestBody = {
    query: `query deleteQuestion($id: String) {deleteQuestion(id: $id){
      _id,
        __typename,
        user,
        question,
        answer,
        date
      }}`,
    variables: { id }
  };
  const options = {
    method: "POST",
    headers,
    body: JSON.stringify(requestBody)
  };
  try {

    const res = await fetch(API_URL, options);
    const data = await res.json();
    return data.data.addQuestion;
  }
  catch (err) {
    console.log(err);
    return {};
  }
}
