import { call, put, takeEvery } from 'redux-saga/effects';

import axios from 'axios';
const BASE_URL = 'http://localhost:3004/todos';

export const toggleComplete = async todo => {
  const response = await axios.patch(`${BASE_URL}/${todo.id}`, todo);
  return response.data;
};
function* toggleTodo() {
  const todos = yield call(toggleComplete);
  yield put({ type: 'GET_TODOS_SUCCESS', todos: todos });
}

function* toggleSaga() {
  yield takeEvery('GET_TODOS_REQUESTED', toggleTodo);
}

export default toggleSaga;
