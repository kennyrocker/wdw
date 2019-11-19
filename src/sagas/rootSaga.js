import {put, takeLatest, all} from "redux-saga/effects";
import * as types from "../constants/actionType";

import randomId from '../utils/utls';



// Workers

/*
* users
* */
export function* addUser(action) {
    try {
        // const res = yield call(service api, url);
        const user = action.user;
        user.id = randomId(10);
        yield put({ type: types.ADD_USER_SUCCESS, user });

    } catch (e) {
        yield put({ type: types.ADD_USER_ERROR });
    }
}

export function* getUsers() {
    try {
        // const user = yield call(service api, url);
        const users = [
            {
                "id": 1211253443,
                "name": "Kenny"
            },
            {
                "id": 2235235246,
                "name": "Vivian"
            }
        ];

        yield put({ type: types.GET_USERS_SUCCESS, users });
    } catch (e) {
        yield put({ type: types.GET_USERS_ERROR });
    }
}

/*
* tasks
* */
export function* getTasks() {
    try {
        // const tasks = yield call(service api, url);
        const tasks = [
            {
                "id": 1,
                "name": "Dish washing",
                "description": "This include lunch box content",
                "user": 1,
                "lastModified": "2019-11-15"
            },
            {
                "id": 2,
                "name": "Garbage collection",
                "description": "This only include taking garbage to the grage",
                "user": 2,
                "lastModified": "2019-11-15"
            }
        ];

        yield put({ type: types.GET_TASKS_SUCCESS, tasks });
    } catch (e) {
        yield put({ type: types.GET_TASKS_ERROR });
    }
}



// Watchers
export function* watchers() {
    yield takeLatest(types.ADD_USER, addUser);
    yield takeLatest(types.GET_USERS, getUsers);

    yield takeLatest(types.GET_TASKS, getTasks);
}




export function* rootSaga() {
    yield all([
        watchers()
    ])
}

