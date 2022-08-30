import { all } from 'redux-saga/effects';
import todoSaga from './todoSaga';
import toggleSaga from './toggleSaga';

export default function* rootSaga() {
    yield all([
        todoSaga(),
        // toggleSaga()
    ]);
}

export function* toggleTodoSaga() {
    yield all([
        toggleSaga()
    ]);
}
