import { call, put, takeEvery } from 'redux-saga/effects';

import axios from 'axios';
const BASE_URL = 'http://localhost:3004/todos';

async function getTodos() {
  const response = await axios.get(BASE_URL);
  return response.data;
}



function* fetchTodos() {
  try {
    const todos = yield call(getTodos);
    yield put({ type: 'GET_TODOS_SUCCESS', todos: todos });
  } catch (error) {
    yield put({ type: 'GET_TODOS_FAILED', message: error.message });
  }
};



function* todoSaga() {
  yield takeEvery('GET_TODOS_REQUESTED', fetchTodos);
}

export default todoSaga;
